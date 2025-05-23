import dynamic from 'next/dynamic';

const DocsContent = dynamic(() => import('@/components/docs-content'), { ssr: false });

export default function DocumentationPage() {
  return <DocsContent />;
} 