import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from 'components/header'
import Spirograph from 'components/spirograph'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(100vw - 17px);
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

const Spacer = styled.div`
  flex: 1 1 0;
`

class Hero extends React.Component {

  render() {
    return (
      <HeroSection>
        <Spirograph speed={0.012} getGearValues={this.getGearValues} />
        <Header />
        <Spacer />
        {/* <GearValues>
          {this.state.gearA} | {this.state.gearB} | {this.state.ratio}
        </GearValues> */}
      </HeroSection>
    )
  }
}

export default Hero
