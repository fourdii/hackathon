import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import AboutMainBg from "../../images/aboutMain.png";

const AboutSectionContainer = tw(Element)`
w-full
h-auto
    flex
    flex-col
    relative
    // pt-1
    // pb-1
    // xl:pt-2
    // xl:pb-2
    items-center
   
`;

const Title = tw.h1`
text-xl
sm:text-3xl
    text-shadow[#fff 1px 0 10px;]      
    text-white
    font-bold
    text-center
    font-Source
  tracking-wide
 `;



const TitleWrapper = styled.div`
${tw`
flex
flex-col
justify-center
items-center
w-screen
h-full
relative
my-8
`};
`;



const AboutSectionWrapper = tw.div`
w-full
h-auto
relative
flex
flex-col
justify-center
items-center
`;

const AboutMainWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-contain 
bg-top
bg-no-repeat
bg-opacity-100
w-[70vw]
py-6
px-5
sm:py-8
sm:px-14
border-[#30e6ff]
bg-[#20252f]
border-2
rounded
`};
`;

const Paragraph = tw.p`
w-full
h-auto
relative
flex
flex-row
flex-wrap
justify-center
items-center
text-center
text-white
font-bold
text-xs
sm:text-lg
font-Noto

px-2
xs:px-2
sm:px-4
md:px-12
lg:px-24
xl:px-28
`;

const Header = tw.h1`
text-shadow[#02befd 1px 0 10px;]   
w-auto
h-auto
relative
flex
flex-row
flex-wrap
justify-center
items-center
text-white
font-bold
sm:text-2xl
bg-[#02befd]
bg-opacity-80
font-Noto
py-1
px-2
sm:px-6
rounded-md
my-3
sm:my-6
`;

const HeaderEN = tw.h1`
text-shadow[#02befd 1px 0 10px;]   
w-auto
h-auto
relative
flex
flex-row
flex-wrap
justify-center
items-center
text-white
font-bold
sm:text-2xl
bg-[#02befd]
bg-opacity-80
font-Source

py-1
px-2
sm:px-6
rounded-md
my-3
sm:my-6
`;



export function AboutSection() {
  return (
    <AboutSectionContainer name="About">
      <TitleWrapper>
        <Title>About</Title>
      </TitleWrapper>
      <AboutSectionWrapper>
        <AboutMainWrapper>
          <HeaderEN>ONE HAND MADE BARBER</HeaderEN>
          <Paragraph>
            ????????????????????????2017??????JunGold???????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ????????????????????????????????????????????????????????????????????????????????????
            ???????????????????????????????????????????????????????????????????????????????????????
            ?????????????????????????????????:?????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ????????????????????????! ?????????????????????Cocaine Cat OHM
            DAO?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Header>???????????????</Header>
          <Paragraph>
            ?????????DAO?????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Header>??????????????????NFT</Header>
          <Paragraph>
            ?????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Header>????????????</Header>
          <Paragraph>
            ?????????????????????DAO????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Header>????????????</Header>
          <Paragraph>
            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ???????????????????????????????????????????????????NFT?????????????????????
          </Paragraph>
          <br />
          <Paragraph>
            ???????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
        </AboutMainWrapper>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}
