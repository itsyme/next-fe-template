import DefaultTemplate from "@/components/templates/default-template";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultTemplate>
        <Component {...pageProps} />
    </DefaultTemplate>
  )
}
