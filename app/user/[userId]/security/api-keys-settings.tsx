"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Trash2 } from "lucide-react";
const { format } = require('date-fns');
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface ApiKey {
  id: string;
  name: string;
  key: string; // Note: In a real app, only expose key on creation
  createdAt: string;
}

interface ApiKeysSettingsProps {
  userId: string;
}

const createApiKeyFormSchema = z.object({
  name: z.string().min(1, { message: "API key name is required" }).max(50),
});

type CreateApiKeyFormValues = z.infer<typeof createApiKeyFormSchema>;

export function ApiKeysSettings({ userId }: ApiKeysSettingsProps) {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<ApiKey | null>(null);

  const form = useForm<CreateApiKeyFormValues>({
    resolver: zodResolver(createApiKeyFormSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    fetchApiKeys();
  }, [userId]);

  const fetchApiKeys = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/security/api-keys`);
      if (!response.ok) {
        throw new Error("Failed to fetch API keys");
      }
      const data = await response.json();
      // In a real app, the 'key' field should not be returned by the GET endpoint
      // We are including it here for development simplicity.
      setApiKeys(data);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong fetching API keys.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateApiKey = async (data: CreateApiKeyFormValues) => {
    setIsCreating(true);
    try {
      const response = await fetch(`/api/user/${userId}/security/api-keys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
         const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create API key");
      }

      const newKey = await response.json();
      setApiKeys([...apiKeys, newKey]);
      setNewlyCreatedKey(newKey);
      toast.success("API key created successfully");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong creating API key.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleRevokeApiKey = async (apiKeyId: string) => {
    if (!confirm("Are you sure you want to revoke this API key?")) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/security/api-keys`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKeyId }),
      });

      if (!response.ok) {
         const errorData = await response.json();
        throw new Error(errorData.message || "Failed to revoke API key");
      }

      setApiKeys(apiKeys.filter(key => key.id !== apiKeyId));
      toast.success("API key revoked successfully");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong revoking API key.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyApiKeyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.info("API key copied to clipboard.");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>
          Manage your API keys for accessing the FGuard API
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Your API Keys</h3>
          {isLoading ? (
            <p>Loading API keys...</p>
          ) : apiKeys.length === 0 ? (
            <p className="text-muted-foreground">No API keys found.</p>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Key</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell className="font-medium">{key.name}</TableCell>
                      <TableCell className="font-mono text-sm">
                         {/* Display truncated key and copy button. Only show full key on creation dialog */}
                         ********{key.key.slice(-4)}
                         <Button variant="ghost" size="sm" onClick={() => copyApiKeyToClipboard(key.key)} className="ml-2 p-1 h-auto"><Copy className="h-4 w-4" /></Button>
                      </TableCell>
                      <TableCell>{format(new Date(key.createdAt), 'PPP')}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" onClick={() => handleRevokeApiKey(key.id)} disabled={isLoading}>
                          <Trash2 className="h-4 w-4 mr-2" /> Revoke
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Create New API Key</h3>
           <p className="text-sm text-muted-foreground">Creating a new API key will give you a new set of credentials to interact with the FGuard API. Treat your API key like a password.</p>
           <Form {...form}>
             <form onSubmit={form.handleSubmit(handleCreateApiKey)} className="flex space-x-4">
               <FormField
                 control={form.control}
                 name="name"
                 render={({ field }) => (
                   <FormItem className="flex-1">
                     <FormLabel className="sr-only">Name</FormLabel>
                     <FormControl>
                       <Input placeholder="API Key Name" {...field} disabled={isCreating} />
                     </FormControl>
                      <FormMessage />
                   </FormItem>
                 )}
               />
               <Button type="submit" disabled={isCreating}>Create Key</Button>
             </form>
           </Form>
        </div>

        {newlyCreatedKey && (
          <Dialog open={!!newlyCreatedKey} onOpenChange={(open) => !open && setNewlyCreatedKey(null)}>
             <DialogContent>
               <DialogHeader>
                 <DialogTitle>API Key Created</DialogTitle>
                 <DialogDescription>
                   Please copy your new API key now. You will not be able to see it again.
                 </DialogDescription>
               </DialogHeader>
               <div className="space-y-4">
                 <div>
                   <Label htmlFor="new-api-key-name">Name</Label>
                   <Input id="new-api-key-name" value={newlyCreatedKey.name} readOnly className="font-mono" />
                 </div>
                  <div>
                   <Label htmlFor="new-api-key">API Key</Label>
                   <div className="flex items-center space-x-2">
                      <Input id="new-api-key" value={newlyCreatedKey.key} readOnly className="font-mono" />
                      <Button size="sm" variant="secondary" onClick={() => copyApiKeyToClipboard(newlyCreatedKey.key)}>
                        <Copy className="h-4 w-4 mr-2" /> Copy
                      </Button>
                   </div>
                 </div>
               </div>
                <DialogFooter>
                 <DialogClose asChild>
                   <Button type="button" variant="secondary">Close</Button>
                 </DialogClose>
               </DialogFooter>
             </DialogContent>
           </Dialog>
        )}
      </CardContent>
    </Card>
  );
} 