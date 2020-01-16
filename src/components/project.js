import React from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import { fontSize } from "styles/theme";

import Logo from "components/projectlogo";
import LearnMore from "./learn-more";

const ProjectWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  @media (max-width: 660px) {
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
  ${media.sm`
flex-wrap: wrap;
margin-bottom: 68px;
`}
`;

const Description = styled.div`
  @media (max-width: 660px) {
    margin-top: 32px;
  }
`;

const Title = styled.h3`
  font-size: ${fontSize.f6};
  font-weight: 700;
  ${media.md`
font-size: ${fontSize.f6};
`}
  margin: 0 0 16px 0;
`;

const Abstract = styled.div`
  margin-bottom: 16px;
`;

const MainLogo = styled.div`
  background: white;
  flex: 0 0 100px;
  height: 100px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
    margin-bottom: 20px;
  `}
`;

function Project(props) {
  return (
    <>
      <ProjectWrapper>
        {props.logo && <Logo srcType={props.srcType}>{props.logo}</Logo>}
        {props.mainLogo && <MainLogo> {props.mainLogo} </MainLogo>}
        <Description>
          <Title>{props.title}</Title>
          <Abstract>{props.abstract}</Abstract>
          {props.link}
          {props.more && <LearnMore more={props.more} moreText={props.moreText ? props.moreText : null} />}
        </Description>
      </ProjectWrapper>
    </>
  );
}

export default Project;
