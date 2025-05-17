"use client"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Button
      onClick={handlePrint}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
      aria-label="Print this page"
    >
      <Printer className="h-4 w-4" />
      <span>Print</span>
    </Button>
  )
}
