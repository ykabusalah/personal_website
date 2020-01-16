import React from "react";
import styled from "styled-components";
import media from "utils/media-queries";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const size = 150;

const Image = styled.div`
  background: white;
  flex: 0 0 ${size}px;
  height: ${size}px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
  `}
  ${media.sm`
    margin-bottom: -20px;
  `}
`;



function ProjectLogo(props) {
  if (!props.srcType || props.srcType === "svg") {
    return (
      <Image>
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {props.children}
        </svg>
      </Image>
    );
  } else {
    return (
      <Image          
        width={size}
        height={size}>
        <img src={props.children} style={{width: '120px', maxHeight: '120px', marginTop: '30px', marginLeft: '15px' }}></img>
      </Image>
    );
  }
}

export default ProjectLogo;
