import styled from "styled-components";
import Link from "next/link";
import { socials } from "../../data/social";

const AboutContainer = styled.div`
  .px-4;
  .lg: px-24;
  .py-8;
  .text-2xl;
  .text-pwhite;
`;

const Span = styled.span`
  .text-pdark;
  .text-bold;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  .flex;
  .justify-center;
`;

const Image = styled.img`
  height: 250px;
  border-radius: 25px;
  .m-4;
  .hidden;
  .lg: block;
`;

const Container = styled.div`
  .flex;
  .items-center;
`;

const Break = styled.br`
  .lg: hidden;
`;

const About = () => {
  return (
    <AboutContainer>
      <Container>
        <div>
          Hello! I'm <Span>Santhosh Balakrishnan</Span>, JavaScript Developer. I am passionate 
          about building tech products and explore new technoloies. I also love to <Span>teach 
          technology to others in depth</Span>.
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          I am a <Span>JavaScript developer</Span>. I am from India,
          living in Chennai. I am an electronics engineer by qualification and self
          taught programmer by profession. When not coding or attending meetings
          at work, you can find me reading a fantasy novel or travelling around in my bicycle.
        </div>
        <ImageContainer>
          <Image src="/about/about1.jpg" />
        </ImageContainer>
      </Container>
      <Break />
      <Break />
      <Container>
      <ImageContainer>
          <Image src="/about/about2.jpg" />
        </ImageContainer>
        <div>
          When it comes to daily work, I play a lot with
          <Span>
            JavaScript, React, Redux, GraphQL and Typescript
          </Span>
          . I have also worked with NodeJS (Express). I built highly
          scalable products for 4 years and for past 1 year I am building tools
          and libraries that makes Developer life easier. Currently trying to
          master Docker & AWS Services.
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          When it comes to <Span>Open Source</Span>, I have built few tools and
          contriubuted to few famous libraries. Few of the tools I built are,
          Styled-wind with babel plugin version, hql-tag and a Cli, A Storybook
          addon listed on official Storybook docs, A VS code extension for
          graphql-codegen. Currently building OSSPuppy - a Open source tool for
          Open source developers. Check out my open source projects{" "}
          <Span>
            {" "}
            <Link href="/projects">here.</Link>
          </Span>
        </div>
        <ImageContainer>
          <Image src="/about/about3.png" />
        </ImageContainer>
      </Container>
      <Break />
      <Break />
      <Container>
        <ImageContainer>
          <Image src="/about/about4.jpeg" />
        </ImageContainer>
        <div>
          I am a seasonal blogger. You can checkout my articles
          <Span>
            {" "}
            <Link href="/blogs">here</Link>{" "}
          </Span>
        </div>
      </Container>
    </AboutContainer>
  );
};

export default About;
