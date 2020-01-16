import React, { Fragment } from "react";
import Link from "gatsby-link";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";
import Project from "components/project";


const hadoopMore = <p>Have made commits for various issues on JIRA</p>;

const emmettMore = (
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


function Portfolio() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Portfolio</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo="port_thumblr.png"
            title="Thmblr"
            abstract="Description goes here"
            // more={hadoopMore}
            srcType="image"
          />
          <Project
            logo="port_emmett_till.png"
            title="Emmett Till Interpretive Center"
            abstract="Web Development and Media Intern"
            // more={emmettMore}
            srcType="image"
          />

        </Fragment>
      }
    />
  );
}

export default Portfolio;
