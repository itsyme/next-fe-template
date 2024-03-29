import DefaultTemplate from "@/components/templates/default-template";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Query, QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultTemplate>
          <Component {...pageProps} />
      </DefaultTemplate>
    </QueryClientProvider>
  )
}
