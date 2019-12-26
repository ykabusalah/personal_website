import React, { Fragment } from "react";
import Link from "gatsby-link";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import Project from "components/project";

import PokemonLogo from "../img/pokemonlogo";
import ExtraCurricLogo from "../img/extracurriclogo";
import HadoopLogo from "../img/hadooplogo";
import FutureLogo from "../img/futurelogo";
import EmmettLogo from "../img/emmettlogo";

const hadoopMore = <p>Some of my commits include:</p>;

const emmettMore = (
  <p>
    Designed various aspects of the{" "}
    <a
      href="https://www.emmett-till.org/?fbclid=IwAR3Km-uo9YkONG1oqiKibQYNxe44BkrqLLpZN_JjPhu8bG6cdc4C86Nsv5Q"
      target="_blank"
      rel="noopener noreferrer"
    >
      official website
    </a>{" "}
    through the use of Javascript Currently working on acquiring funding for an
    app project centered around activism and exploration of the various Civil
    Rights memorial sites around the state
  </p>
);

const pokemonMore = (
  <p>
    Assisted Aaron Schmitz under pseudonym "DRaB" in Programming and Animations
    direction for Pokemon Ethereal Gates Utilized Ruby for programming events
    in-game and sprite animations Analyzed design drawings, animation render
    flaws, and debugging issues Demo for Pokemon Ethereal Gates generated over
    90,000 views on YouTube for game trailer and over 50,000 downloads
  </p>
);

const projectsMore = (
  <p>
    Duis sed finibus nulla. Nam fermentum non massa vel sollicitudin. Aenean
    dictum, diam vel consequat iaculis, nunc odio scelerisque magna, vehicula
    pulvinar ex nisl et mauris. Etiam ullamcorper congue accumsan. Nullam
    consequat erat sed ex tincidunt, ac vehicula mi venenatis. Donec consectetur
    nulla et mauris volutpat faucibus. Praesent faucibus rhoncus risus, nec
    feugiat magna imperdiet vitae. Nullam pharetra convallis nisi non semper.
    Donec pretium eleifend rutrum.
  </p>
);

const extraCurric = (
  <p>
    President and Founder of the Dores for Support of Palestine Secretary of the
    Middle-Eastern Student Association Web Developer for the Vanderbilt Tech and
    Society Club First-Year Resident Advisor at North House
  </p>
);

function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work / Extra-curriculars</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={HadoopLogo()}
            title="Hadoop"
            abstract="Official Contributer (~5 commits)"
            more={hadoopMore}
          />
          <Project
            logo={EmmettLogo()}
            title="Emmett Till Interpretive Center"
            abstract="Web Development and Media Intern"
            more={emmettMore}
          />
          <Project
            logo={PokemonLogo()}
            title="Pokemon Ethereal Gates"
            abstract="A custom Pokemon game composed of an original region, Pokemon, and story."
            more={pokemonMore}
          />
          <Project
            logo={FutureLogo()}
            title="Projects of the Future"
            abstract="Playing around with AWS, Splunk, and Unity"
          />
          <Project
            logo={ExtraCurricLogo()}
            title="Extracurriculars"
            abstract="A Few of my Responsibilities Around Campus"
            more={extraCurric}
          />
        </Fragment>
      }
    />
  );
}

export default Work;
