import MainLayout from "../components/MainLayout/MainLayout";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps } : any) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
