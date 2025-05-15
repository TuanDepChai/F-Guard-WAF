"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Printer, FileDown, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PrintButton() {
  const [isPrinting, setIsPrinting] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)

    setTimeout(() => {
      window.print()
      setIsPrinting(false)
    }, 100)
  }

  const handleExportPDF = () => {
    setIsExporting(true)

    // Simulate PDF export
    setTimeout(() => {
      // In a real implementation, this would use a library like jsPDF
      // or call a server endpoint to generate a PDF
      alert("PDF export functionality would be implemented here")
      setIsExporting(false)
    }, 1000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          <span>Print / Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handlePrint} disabled={isPrinting}>
          {isPrinting ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              <span>Printing...</span>
            </>
          ) : (
            <>
              <Printer className="h-4 w-4 mr-2" />
              <span>Print</span>
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleExportPDF} disabled={isExporting}>
          {isExporting ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              <span>Exporting...</span>
            </>
          ) : (
            <>
              <FileDown className="h-4 w-4 mr-2" />
              <span>Export as PDF</span>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
