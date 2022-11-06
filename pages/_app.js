import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </>
  );
}

export default MyApp;
