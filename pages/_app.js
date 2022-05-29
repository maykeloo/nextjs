import Layout from "../components/Layout";
import { Global } from "../styles/globals";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Global/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
