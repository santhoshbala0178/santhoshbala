import Head from "next/head";
import styled from 'styled-components';
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export const Container = styled.div`
  .bg-plight;
  .min-h-screen;
  .w-screen;
`;

export default function AboutPage() {
  return (
    <Container>
      <Head>
        <title> About Santhosh Balakrishnan | JavaScript developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
        <meta property="og:site_name" content="santhoshb.com" />
        <meta property="og:site" content="santhoshb.com" />
        <meta
          property="og:title"
          content="Santhosh Balakrishnan | JavaScript Developer"
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
      <About />
      <Footer />
    </Container>
  );
}
