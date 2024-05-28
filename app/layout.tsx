import type { Metadata } from "next";
import { opensans } from "@/public/fonts-icons/fonts";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Sidebar } from "@/components/side-bar";

export const metadata: Metadata = {
  metadataBase: new URL('https://ngwei.xyz'),
  title: "wei",
  description: "one day or day one",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${opensans.variable}`}
    >
      <body className='flex flex-col mb-40 mx-2 md:mx-10 md:flex-row md:items-start md:mt-10'>
        <Providers>
          <Sidebar/>
          <main className='lex-auto text-md md:mt-0 px-2 md:px-10 max-w-xl lg:max-w-3xl mx-auto w-full position: sticky bottom: 0'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
