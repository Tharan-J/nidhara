import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#10264B',
};

export const metadata: Metadata = {
  title: 'Nidhara — Your Business. Your Documents. Credit Ready.',
  description: 'Get guided support to explore loan options, organise your records and move forward.',
  keywords: [
    'Nidhara',
    'Credit Readiness',
    'Micro-enterprises',
    'Loan Assistance',
    'Small Business',
    'Mudra Yojana',
  ],
  authors: [{ name: 'Nidhara' }],
  icons: {
    icon: '/assets/nidhara-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FFFDF7] text-[#10264B] antialiased min-h-screen flex flex-col selection:bg-[#087F78] selection:text-white">
        {children}
      </body>
    </html>
  );
}
