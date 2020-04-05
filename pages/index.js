import Head from "next/head";
import styled from "styled-components";
import MenuDrawer from "../components/menuDrawer";
import Practice from "../components/practice";

const Container = styled.div`
  margin: "50px auto";
  background-color: "#2694ae";
`;

const Home = () => (
  <div className="container">
    <Head>
      <title>Stoodi</title>
      <link rel="icon" href="/logo.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato"
      />
    </Head>
    <MenuDrawer />
    <div className="container">
      <Practice />
    </div>
    <style jsx global>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Lato, sans-serif !important;
      }
    `}</style>
  </div>
);

export default Home;
