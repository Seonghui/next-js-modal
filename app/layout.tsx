import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modal",
  description: "Modal Test",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div>{children}</div>
        <div>{modal}</div>
      </body>
    </html>
  );
}
