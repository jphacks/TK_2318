import type { Metadata } from "next";
import "./globals.css";
import { notoJp } from "./fonts";

export const metadata: Metadata = {
  title: "TaskBrancher",
  description: "This is the TaskBrancher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={notoJp.className}>
        <header>
          <nav className="w-full  border-b-2 border-[#BEBEBE]">
            <div className="flex justify-between mx-5  py-4 h-15">
              <div className="font-bold text-[18px] ">TaskBrancher</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
