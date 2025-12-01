// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Village Welfare Fund - Support Our Farmers',
  description: 'Make a difference in village communities. Support sustainable agriculture and farmer welfare programs.',
  keywords: 'village welfare, farmer support, agriculture, donation, community development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}