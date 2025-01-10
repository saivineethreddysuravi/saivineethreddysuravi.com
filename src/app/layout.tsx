import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Vineeth Reddy Suravi - Portfolio",
  description: "Sai Vineeth Reddy Suravi's personal portfolio website, showcasing skills, experience, and projects in Data Analysis, SQL, Python, Power BI, Business Intelligence, and Data Visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
