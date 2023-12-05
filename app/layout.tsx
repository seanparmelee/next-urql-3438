import "@/styles/globals.css";
import { Inter } from 'next/font/google';
import { GQLProvider } from "./GQLProvider";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GQLProvider>
        <body className={inter.className}>{children}</body>
      </GQLProvider>
    </html>
  );
}
