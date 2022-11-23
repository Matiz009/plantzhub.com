import React from "react";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
const Projects = () => {
  return (
    <div>
      <section id="project">
        <Typography
          variant="h3"
          component="h3"
          className="text-white"
          style={{ backgroundColor: "red" }}
        >
          TEN BILLION TREES TSUNAMI PROGRAMME
        </Typography>
        <br />
        <span className="text-justify font-italic">
          The Billion Tree Tsunami was a tree plantation drive launched in 2014,
          by the government of Khyber Pakhtunkhwa, Pakistan, in response to the
          challenge of global warming. Pakistan's Billion Tree Tsunami restores
          350,000 hectares of forests and degraded land to surpass its Bonn
          Challenge commitment.The project aimed at improving the ecosystems of
          classified forests, as well as privately owned waste and farm lands,
          and therefore entails working in close collaboration with concerned
          communities and stakeholders to ensure their meaningful participation
          through effectuating project promotion and extension services.The
          project was completed in August 2017, ahead of schedule.
          <br />
          <strong>
            We as a company are proud of being a part of this excellent
            initiative.
          </strong>
        </span>

        <br />
        <br />
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/C44ecuPMvFo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};

export default Projects;
