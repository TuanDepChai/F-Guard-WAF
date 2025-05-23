"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from 'date-fns';

interface SecurityLog {
  id: string;
  action: string;
  details: string;
  createdAt: string;
}

interface SecurityLogViewProps {
  securityLogs: SecurityLog[];
}

export function SecurityLogView({ securityLogs }: SecurityLogViewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Log</CardTitle>
        <CardDescription>
          Review recent security events on your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {securityLogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    No security events recorded.
                  </TableCell>
                </TableRow>
              ) : (
                securityLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.action}</TableCell>
                    <TableCell>{log.details}</TableCell>
                    <TableCell>{format(new Date(log.createdAt), 'PPP pp')}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
} 