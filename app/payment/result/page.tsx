'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface PaymentResult {
  amount: string;
  bankCode: string;
  bankTranNo: string;
  cardType: string;
  orderInfo: string;
  payDate: string;
  responseCode: string;
  tmnCode: string;
  transactionNo: string;
  transactionStatus: string;
  txnRef: string;
  secureHash: string;
}

export default function PaymentResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Convert searchParams to object
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
          params[key] = value;
        });

        // Verify payment with backend (GET with params)
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/payments/vnpay_return?${new URLSearchParams(params).toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setIsSuccess(true);
          toast.success('Payment successful!');
        } else {
          setIsSuccess(false);
          toast.error(data.message || 'Payment verification failed');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setIsSuccess(false);
        toast.error('Error verifying payment');
      } finally {
        setIsLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams]);

  const formatAmount = (amount: string) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(Number(amount) / 100); // VNPay amount is in smallest currency unit
  };

  const formatDate = (dateStr: string) => {
    // Format: YYYYMMDDHHmmss
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    const hour = dateStr.substring(8, 10);
    const minute = dateStr.substring(10, 12);
    const second = dateStr.substring(12, 14);
    
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {isLoading ? 'Verifying Payment...' : 
             isSuccess ? 'Payment Successful' : 'Payment Failed'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4">Please wait while we verify your payment...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center">
                {isSuccess ? (
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500" />
                )}
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-medium">Amount:</div>
                  <div>{formatAmount(searchParams.get('vnp_Amount') || '0')}</div>

                  <div className="font-medium">Order Info:</div>
                  <div>{searchParams.get('vnp_OrderInfo')}</div>

                  <div className="font-medium">Transaction No:</div>
                  <div>{searchParams.get('vnp_TransactionNo')}</div>

                  <div className="font-medium">Bank Code:</div>
                  <div>{searchParams.get('vnp_BankCode')}</div>

                  <div className="font-medium">Payment Date:</div>
                  <div>{formatDate(searchParams.get('vnp_PayDate') || '')}</div>

                  <div className="font-medium">Status:</div>
                  <div className={isSuccess ? 'text-green-500' : 'text-red-500'}>
                    {isSuccess ? 'Success' : 'Failed'}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-4">
                <Button
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                >
                  Back to Dashboard
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 