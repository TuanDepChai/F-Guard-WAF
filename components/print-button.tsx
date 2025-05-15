"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Printer, Check, Download } from "lucide-react"
import { useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

export default function PrintButton() {
  const [isPrinting, setIsPrinting] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [printSuccess, setPrintSuccess] = useState(false)

  useEffect(() => {
    // Load print stylesheet
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "/documentation/print.css"
    link.media = "print"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const handlePrint = () => {
    setIsPrinting(true)
    setTimeout(() => {
      window.print()
      setIsPrinting(false)
      setPrintSuccess(true)
      setTimeout(() => setPrintSuccess(false), 2000)
    }, 100)
  }

  const handleExportPDF = async () => {
    setIsExporting(true)
    try {
      const content = document.querySelector(".documentation-content") as HTMLElement
      if (!content) {
        console.error("Content element not found")
        setIsExporting(false)
        return
      }

      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

      // Get the page title or use a default
      const title = document.title || "FGuard Documentation"
      pdf.save(`${title.replace(/\s+/g, "-").toLowerCase()}.pdf`)
    } catch (error) {
      console.error("Error exporting PDF:", error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="print-button flex items-center gap-2" aria-label="Print options">
          <Printer className="h-4 w-4" />
          <span>Print</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handlePrint} disabled={isPrinting}>
          {isPrinting ? (
            "Preparing..."
          ) : printSuccess ? (
            <>
              <Check className="h-4 w-4 mr-2 text-green-500" />
              Printed
            </>
          ) : (
            <>
              <Printer className="h-4 w-4 mr-2" />
              Print page
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleExportPDF} disabled={isExporting}>
          {isExporting ? (
            "Exporting..."
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Export as PDF
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
