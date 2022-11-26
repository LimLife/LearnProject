import type { AppProps } from 'next/app'
import { _Layout } from '../Components/_Layout'
import "bootstrap/scss/bootstrap.scss";
import "../styles/app.css";
import { Provider } from 'react-redux';
import { reducer } from "./Redux/Store/StoreUseres"

function MyApp({ Component, pageProps }: AppProps) 
{

  return (
    <Provider store={reducer}>
      <_Layout>
         <Component {...pageProps} />
      </_Layout>
    </Provider>
  )
}

export default MyApp
