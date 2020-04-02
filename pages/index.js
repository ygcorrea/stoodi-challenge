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
    </Head>
    <MenuDrawer />
    <Container>
      <Practice />
    </Container>
  </div>
);

export default Home;
