import * as changeCase from "change-case";

import { Inter } from "next/font/google";

import "@borabaloglu/ui/main.dark.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Sidebar from "@/components/Sidebar/Sidebar";
import { cx } from "class-variance-authority";
import { useRouter } from "next/router";
import { Toaster } from "@borabaloglu/ui";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageName = changeCase.capitalCase(router.pathname.slice(1));

  return (
    <>
      <main className={cx("flex min-h-screen gap-x-4", inter.className)}>
        <Sidebar />
        <div className="p-6 w-full ml-[300px]">
          <h1 className="text-heading-1">{pageName}</h1>
          <div className="mt-4">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}
