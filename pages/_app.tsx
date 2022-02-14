import MainLayout from "../components/MainLayout/MainLayout";

export default function MyApp({ Component, pageProps } : any) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
