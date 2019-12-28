import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React, { Fragment } from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import { color, fontSize } from "styles/theme";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;
  margin: 3vw auto 10vmin;
  text-align: center;
  border-radius: 100%;
  background: #434343;
`;

const PortraitWrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  -webkit-clip-path: circle(50% at 50% 10%);
  clip-path: circle(50% at 50% 50%);
`;

function About() {
  const aboutData = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <TwoColumns
      leftColumn={
        <>
          <SectionHeading>About</SectionHeading>
          <Circle>
            <PortraitWrapper>
              <Img
                style={{ width: "105%", height: "105%" }}
                fluid={aboutData.portraitImage.childImageSharp.fluid}
              />
            </PortraitWrapper>
          </Circle>
        </>
      }
      rightColumn={
        <Fragment>
          <Big>
            Hey! My name is Yousef Abu-Salah. I'm a sophomore at Vanderbilt
            University, and I'm majoring in Computer Science, Public Policy, and Education.
          </Big>
          <p>
            Exploring the intersections between these disciplines, as well as
            the technological future of the world, makes me happy!
          </p>
          <p>
            Currently, I'm designing a curriculum to target the growing gap in
            Mississippi computer science education and exploring game design
            principles.
          </p>
          <p style={{ marginBottom: 0 }}>
            Other than that, I love playing with animals, art (specifically animation!) of all
            kinds, and trying my hardest to be a somewhat healthy person.
          </p>
        </Fragment>
      }
    />
  );
}

export default About;
