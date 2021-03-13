import Head from "next/head";
import styled from "styled-components";
import Header from "../components/Header";
import HomePage from "../components/Home";
import Footer from "../components/Footer";

const Container = styled.div`
  .bg-plight;
  .min-h-screen;
  .w-screen;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Santhosh Balakrishnan | JavaScript developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
        <meta property="og:site_name" content="santhoshb.com" />
        <meta property="og:site" content="santhoshb.com" />
        <meta
          property="og:title"
          content="Santhosh Balakrishnan | JavaScript Expert"
        /> 
        <meta
          property="og:description"
          content="Santhosh Balakrishnan is a Web expert who specialize in JavsScript. He is an active Open source developer"
        />
        <meta property="og:type" content="portfolio" />

        <meta
          name="description"
          content="Santhosh Balakrishnan is a Web expert who specialize in JavsScript. He is an active Open source developer"
        />
        <meta
          name="keywords"
          content="react, javascript, learn, mentor, startup, graphql, apollo, webpack, reactjs, redux, nodejs"
        />
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </Container>
  );
}
