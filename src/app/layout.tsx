import ThemeProvider from "@/components/shared/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Nature Vision - Explore & Share the Beauty of Nature",
  description:
    "Discover awe-inspiring nature photography, connect with a community of passionate photographers, and explore trending hashtags. Join Nature Vision to celebrate and share your love for the natural world.",
};

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} antialiased max-width`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
