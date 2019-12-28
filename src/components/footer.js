import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.sm`git 
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

function Footer() {
  return (
    <Section>
      <FooterText>
        This page is open source. Check it out on&nbsp;
        <a href="https://github.com/ykabusalah/personal_website">Github!</a>
        <br />Yousef Abu-Salah 2019&nbsp;&nbsp;&nbsp;
      </FooterText>
    </Section>
  )
}

export default Footer
