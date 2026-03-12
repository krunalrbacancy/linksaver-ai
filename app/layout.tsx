import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkSaver",
  description: "Save and manage your personal links with Supabase auth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
