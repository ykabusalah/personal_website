import React, { Fragment } from "react";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import Project from "components/project";

import PokemonLogo from "../img/pokemonlogo";

const perihelionMore = <p>Helped SirAquakip design the following Pokemon for the game's initial vision and demo:
    {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Gysteam"
        target="_blank"
        rel="noopener noreferrer"
    > Gysteam

    </a>, {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Magnut"
        target="_blank"
        rel="noopener noreferrer"
    > Magnut

    </a>, {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Magnut"
        target="_blank"
        rel="noopener noreferrer"
    > Magnut

    </a>, {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Magnut"
        target="_blank"
        rel="noopener noreferrer"
    > Magnut

    </a>, {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Magnut"
        target="_blank"
        rel="noopener noreferrer"
    > Magnut

    </a>, {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Magnut"
        target="_blank"
        rel="noopener noreferrer"
    > Magnut

    </a>, {" "}<a
        href="https://ethereal-gates.fandom.com/wiki/Magnut"
        target="_blank"
        rel="noopener noreferrer"
    > Magnut

    </a>Technut, Mechanut, Jinkai, Groufin, and Taggler.
</p>;

const emmttMemory = (
  <p>
    - Designed aspects of the graphic design of the{" "}
    <a
      href="https://tillapp.emmett-till.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      official Emmett Till Memory App
    </a>{" "}
    through the use of C++ <br />- App takes users to the most important sites in the
      Mississippi Delta and beyond while also providing expert-vetted narratives, access
      to relevant archival documents, and a collection of historic and contemporary photographs.
  </p>
);


const websiteMore = (
  <p>
    I built this website utilizing Gatsby and React. I utilized Ziet to deploy this website.
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
