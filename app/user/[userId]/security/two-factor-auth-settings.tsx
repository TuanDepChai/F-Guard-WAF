"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { QRCodeSVG } from 'qrcode.react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface TwoFactorAuthSettingsProps {
  userId: string;
  initialTwoFactorEnabled: boolean;
}

const tokenSchema = z.object({
  token: z.string().min(6, { message: "Invalid token" }).max(6, { message: "Invalid token" }),
});

type TokenFormValues = z.infer<typeof tokenSchema>;

export function TwoFactorAuthSettings({ userId, initialTwoFactorEnabled }: TwoFactorAuthSettingsProps) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(initialTwoFactorEnabled);
  const [secret, setSecret] = useState<string | null>(null);
  const [otpAuthUrl, setOtpAuthUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TokenFormValues>({
    resolver: zodResolver(tokenSchema),
    defaultValues: {
      token: "",
    },
  });

  useEffect(() => {
    if (!twoFactorEnabled) {
      fetchTwoFactorSecret();
    } else {
      setSecret(null);
      setOtpAuthUrl(null);
    }
  }, [twoFactorEnabled]);

  const fetchTwoFactorSecret = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/security/two-factor`);
      if (!response.ok) {
        throw new Error("Failed to fetch 2FA secret");
      }
      const data = await response.json();
      setSecret(data.secret);
      setOtpAuthUrl(data.otpAuthUrl);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong fetching 2FA secret.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnableTwoFactor = async (data: TokenFormValues) => {
     setIsLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/security/two-factor`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enable: true, token: data.token }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to enable 2FA");
      }

      setTwoFactorEnabled(true);
      toast.success("Two-factor authentication enabled successfully");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong enabling 2FA.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisableTwoFactor = async (data: TokenFormValues) => {
     setIsLoading(true);
    try {
      const response = await fetch(`/api/user/${userId}/security/two-factor`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ disable: true, token: data.token }),
      });

      if (!response.ok) {
         const errorData = await response.json();
        throw new Error(errorData.message || "Failed to disable 2FA");
      }

      setTwoFactorEnabled(false);
      setSecret(null);
      setOtpAuthUrl(null);
      toast.success("Two-factor authentication disabled successfully");
       form.reset();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong disabling 2FA.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>
          Add an additional layer of security to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {twoFactorEnabled ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-green-600">Two-Factor Authentication is Enabled.</p>
             <p className="text-sm text-muted-foreground">To disable 2FA, enter a valid code from your authenticator app and click 'Disable 2FA'.</p>
             <form onSubmit={form.handleSubmit(handleDisableTwoFactor)} className="space-y-4">
               <FormField
                 control={form.control}
                 name="token"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Authenticator Code</FormLabel>
                     <FormControl>
                       <Input type="text" placeholder="Enter code" {...field} />
                     </FormControl>
                      <FormMessage />
                   </FormItem>
                 )}
               />
                <Button type="submit" disabled={isLoading}>Disable 2FA</Button>
             </form>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm font-medium text-red-600">Two-Factor Authentication is Disabled.</p>
             <p className="text-sm text-muted-foreground">Scan the QR code below with your authenticator app (e.g., Google Authenticator, Authy), then enter the code to enable 2FA.</p>
            
            {isLoading ? (
              <p>Loading secret...</p>
            ) : (
             secret && otpAuthUrl && (
              <div className="flex flex-col items-center space-y-4">
                 <Label>Scan this QR code</Label>
                 <div className="p-4 border rounded-md bg-white">
                   <QRCodeSVG value={otpAuthUrl} size={200} level="H" />
                 </div>
                 <div className="space-y-2 w-full max-w-xs">
                   <Label htmlFor="secret">Your Secret Key</Label>
                    <Input id="secret" value={secret} readOnly className="font-mono text-center" />
                 </div>
               </div>
             )
            )}

             <form onSubmit={form.handleSubmit(handleEnableTwoFactor)} className="space-y-4">
               <FormField
                 control={form.control}
                 name="token"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Authenticator Code</FormLabel>
                     <FormControl>
                       <Input type="text" placeholder="Enter code from app" {...field} />
                     </FormControl>
                      <FormMessage />
                   </FormItem>
                 )}
               />
                <Button type="submit" disabled={isLoading || !secret}>Enable 2FA</Button>
             </form>

          </div>
        )}
      </CardContent>
    </Card>
  );
} 