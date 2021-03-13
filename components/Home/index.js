import styled from "styled-components";

const HomeContainer = styled.div`
  .py-8;
  .flex;
  .pt-0;
  .lg: pt-8;
  .items-center;
  .justify-center;
  .flex-col;
  .text-pwhite;
  height: 70vh;
`;
const PhotoContainer = styled.div`
  .mt-4;
  height: 35vh;
  width: 35vh;
  .p-4;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #fff;
`;

const Photo = styled.img`
  border-radius: 50%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const Intro = styled.div`
  width: 70vw;
  .text-2xl;
  .mt-8;
  .text-center;
`;

const Span = styled.span`
  .text-pdark;
  .text-bold;
  font-weight: 700;
`;

const Home = () => {
  return (
    <HomeContainer>
      <PhotoContainer>
        <Photo src="/intro.jpeg" alt="Santhosh Balakrishnan" />
      </PhotoContainer>
      <Intro>
        I am <Span>Santhosh Balakrishnan</Span>, a JavaScript developer, Open Source Contributor and a Blogger.
        <br />
        <br />I love building <Span>Products and exploring new technologies.</Span>
      </Intro>
    </HomeContainer>
  );
};

export default Home;
