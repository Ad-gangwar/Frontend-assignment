import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Website",
  description: "Your website description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>
            <main>{children}</main>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
