import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="page__container">
        <Sidebar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  );
}

export default MyApp;
