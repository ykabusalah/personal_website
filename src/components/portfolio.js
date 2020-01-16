import React, { Fragment } from "react";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import Project from "components/project";

import PokemonLogo from "../img/pokemonlogo";

const perihelionMore = <p>Have made commits for various issues on JIRA</p>;

const emmttMemory = (
  <p>
    - Designed various aspects of the{" "}
    <a
      href="https://www.emmett-till.org/?fbclid=IwAR3Km-uo9YkONG1oqiKibQYNxe44BkrqLLpZN_JjPhu8bG6cdc4C86Nsv5Q"
      target="_blank"
      rel="noopener noreferrer"
    >
      official website
    </a>{" "}
    through the use of Javascript <br />- Currently working on acquiring funding for an
    app project centered around activism and exploration of the various Civil
    Rights memorial sites around the state
  </p>
);


const websiteMore = (
  <p>
    websiteMore
  </p>
);

function Portfolio() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Portfolio</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo="port_thumblr.png"
            title="Perihelion Productions"
            abstract="Pokemon and General Interface Designer"
            more={perihelionMore}
            srcType="image"
          />
          <Project
            logo="port_emmett_till.png"
            title="Emmett Till Memory Project"
            abstract="Assistant Designer for Official App"
            more={emmttMemory}
            srcType="image"
          />
          <Project
            logo="port_self.png"
            title="My Personal Portfolio Website"
            abstract="The Front-End, Back-End, and Everything Else!"
            more={websiteMore}
            moreText="Learn More"
            srcType="image"
          />
        </Fragment>
      }
    />
  );
}

export default Portfolio;
