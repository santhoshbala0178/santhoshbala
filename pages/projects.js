import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

export default function Page() {
  return (
    <Container>
      <Head>
        <title>
          Open source Projects by Santhosh Balakrishnan | JavaScript developer
        </title>
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
          content="Santhosh Balakrishnan is a Web expert who specialize in JavsScript. He is an active Open source contributor as well."
        />
        <meta property="og:type" content="portfolio" />

        <meta
          name="description"
          content="Santhosh Balakrishnan is a Web expert who specialize in JavsScript. He is an active Open source contributor as well."
        />
        <meta
          name="keywords"
          content="react, javascript, learn, mentor, startup, graphql, apollo, webpack, reactjs, redux, nodejs"
        />
      </Head>
      <Header />
      <ItemsContainer>
        {projects.reverse().map(project => {
          return <EntityComponent data={project} key={project.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
