'use client';

import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'), { ssr: false });

export default function TestimonialsWrapper() {
  return <TestimonialsSection />;
} 