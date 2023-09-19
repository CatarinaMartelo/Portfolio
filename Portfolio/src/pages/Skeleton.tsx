import LaptopApp from "./Laptop";

import Skills from "./Skills";
import Chrono from "./Chrono";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Skeleton = () => {
  return (
    <div className="website-container">
      <section className="hero-div" id="hero">
        <div className="hero-container">
          <LaptopApp />
        </div>

        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,0L48,8C96,16,192,32,288,53.3C384,74.7,480,101.5,576,96C672,90.3,768,53,864,37.3C960,21.7,1056,32,1152,32C1248,32,1344,21.7,1392,16L1440,8L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
          ></path>
        </svg>
      </section>

      <section className="about-div" id="about">
        <Chrono />
        <div className="custom-shape-divider-bottom-1694216505">
          <svg
            className="svg"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="skills-div" id="skills">
        <Skills />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1150 100"
          className="svg-container"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,60
       C50,20,150,20,300,60
       C450,100,650,100,800,60
       C950,20,1050,20,1150,60
       L1150,120
       L0,120
       Z"
          ></path>
        </svg>
      </section>

      <section className="projects-container" id="projects">
        <h1>&lt;My Projects&#47;&gt;</h1>
        <Projects />
        <a
          href="https://github.com/CatarinaMartelo"
          className="github"
          target="_blank"
        >
          <i
            className="fa-brands fa-github"
            style={{ color: "#000000", fontSize: "10vh" }}
          ></i>
        </a>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 300">
        <path
          fill="#000000"
          fillOpacity="1"
          d="M0,224L80,213.3C160,203,320,100,480,111.7C640,123,800,203,960,208.7C1120,214,1280,144,1360,128L1440,112L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section className="contacts" id="contacts">
        <Contacts />
      </section>
    </div>
  );
};

export default Skeleton;
