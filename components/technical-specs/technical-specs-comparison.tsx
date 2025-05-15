import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function TechnicalSpecsComparison() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Deployment Options Comparison</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Compare our different deployment options to find the best fit for your organization
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead>Cloud SaaS</TableHead>
                <TableHead>On-Premise</TableHead>
                <TableHead>Hybrid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Deployment Time</TableCell>
                <TableCell>Minutes</TableCell>
                <TableCell>Days</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Infrastructure Management</TableCell>
                <TableCell>None</TableCell>
                <TableCell>Full</TableCell>
                <TableCell>Partial</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Data Sovereignty</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Limited</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Full Control</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Configurable</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Automatic Updates</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Yes</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span>Manual</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Partial</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Global CDN Integration</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Built-in</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span>No</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Optional</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">DDoS Protection Capacity</TableCell>
                <TableCell>120+ Tbps</TableCell>
                <TableCell>Hardware Limited</TableCell>
                <TableCell>Combined</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Initial Cost</TableCell>
                <TableCell>Low</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operational Complexity</TableCell>
                <TableCell>Low</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
