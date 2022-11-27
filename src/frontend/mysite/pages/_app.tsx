import type { AppProps } from 'next/app'
import "bootstrap/scss/bootstrap.scss";
import "../styles/app.css";
import { Provider } from 'react-redux';
import { reducer } from "./Redux/Store/StoreUseres"
import  PageWithLayoutType  from "../Components/_Layouts/_LayoutType/LayoutType";
import { ReactElement } from 'react';
type AppLayoutProps = AppProps &
{
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) 
{
  const Test = Component.layout || ((element: ReactElement) => <> {element.type}</>)

  return (
    <Provider store={reducer}>
      <Test>
         <Component {...pageProps} />
      </Test>
    </Provider>
  )
}

export default MyApp
