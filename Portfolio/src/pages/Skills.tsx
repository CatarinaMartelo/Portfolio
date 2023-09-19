import React from "react";
import { Tooltip } from "@mui/material";

const Skills = () => {
  return (
    <div className="skills-div" id="skills">
      <h1>&lt;Tech Kit&#47;&gt;</h1>

      <div className="skills-container">
        <div className="frontend">
          <p>Frontend</p>
          <div className="skills">
            <Tooltip
              title="HTML"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/html.png" alt="html" />
            </Tooltip>
            <Tooltip
              title="CSS"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/css.png" alt="css" />
            </Tooltip>
            <Tooltip
              title="Javascript"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/js.png" alt="js" />
            </Tooltip>
            <Tooltip
              title="Sass"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/sass.png" alt="sass" />
            </Tooltip>
            <Tooltip
              title="Styled Components"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img
                className="skill"
                width="20%"
                src="/styled.png"
                alt="styled components"
              />
            </Tooltip>
            <Tooltip
              title="ReactJs"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/react.png" alt="react" />
            </Tooltip>
            <Tooltip
              title="Typescript"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/ts.png" alt="ts" />
            </Tooltip>
          </div>
        </div>

        <div className="backend">
          <p>Backend</p>
          <div className="skills">
            <Tooltip
              title="Node.Js"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/node.png" alt="node" />
            </Tooltip>
            <Tooltip
              title="SQL"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/sql.png" alt="sql" />
            </Tooltip>
            <Tooltip
              title="MySQL"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/mysql.png" alt="mysql" />
            </Tooltip>
          </div>
        </div>

        <div className="others">
          <p>Others</p>
          <div className="skills">
            <Tooltip
              title="Jest"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/jest.png" alt="jest" />
            </Tooltip>
            <Tooltip
              title="React Testing Library"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/rtl.png" alt="rtl" />
            </Tooltip>
            <Tooltip
              title="Git"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img className="skill" width="20%" src="/git.png" alt="git" />
            </Tooltip>
            <Tooltip
              title="Netlify"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img
                className="skill"
                width="20%"
                src="/netlify.png"
                alt="netlify"
              />
            </Tooltip>
            <Tooltip
              title="Vercel"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img
                className="skill"
                width="20%"
                src="/vercel.png"
                alt="vercel"
              />
            </Tooltip>
            <Tooltip
              title="PlanetScale"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img
                className="skill"
                width="20%"
                src="/planetscale.png"
                alt="planetscale"
              />
            </Tooltip>
            <Tooltip
              title="Power BI"
              placement="bottom-end"
              arrow
              enterDelay={200}
              leaveDelay={100}
            >
              <img
                className="skill"
                width="20%"
                src="/powerbi.png"
                alt="power bi"
                title=""
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
