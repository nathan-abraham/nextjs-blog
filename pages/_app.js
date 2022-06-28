import Header from "../components/Header";
import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container max-w-max mx-auto px-2">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
