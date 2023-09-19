const Navbar = () => {
  // Function to update the navbar color based on the section's background
  function updateNavbarColor() {
    const sections = document.querySelectorAll(
      ".hero-div, .about-div, .skills-div, .projects-container, .contacts"
    );

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      const sectionBackgroundColor = getComputedStyle(section).backgroundColor;

      const navbarLinks = document.querySelectorAll(".navbar a");
      const headerLink = document.querySelector(".header a") as HTMLElement;
      const menuIcon = document.querySelector("#menu-icon") as HTMLElement; // Explicitly cast to HTMLElement

      navbarLinks.forEach((link) => {
        const linkElement = link as HTMLElement; // Explicitly cast to HTMLElement
        if (
          sectionRect.top <= linkElement.clientHeight &&
          sectionRect.bottom >= linkElement.clientHeight
        ) {
          linkElement.style.color =
            sectionBackgroundColor === "rgb(0, 0, 0)" ? "white" : "black";
        }
      });

      if (
        sectionRect.top <= headerLink.clientHeight &&
        sectionRect.bottom >= headerLink.clientHeight
      ) {
        headerLink.style.color =
          sectionBackgroundColor === "rgb(0, 0, 0)" ? "white" : "black";
      }

      if (
        sectionRect.top <= menuIcon.clientHeight &&
        sectionRect.bottom >= menuIcon.clientHeight
      ) {
        menuIcon.style.color =
          sectionBackgroundColor === "rgb(0, 0, 0)" ? "white" : "black";
      }
    });
  }

  // Initial call to set the navbar color based on the first section
  updateNavbarColor();

  // Add event listener for scroll events to update the navbar color
  window.addEventListener("scroll", updateNavbarColor);

  return (
    <header className="header">
      <a href="#" className="logo">
        CM
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <a href="#" id="navbar1">
          Home
        </a>
        <a href="#about" id="navbar2">
          About
        </a>
        <a href="#skills" id="navbar3">
          Tech Kit
        </a>
        <a href="#projects" id="navbar4">
          {" "}
          Projects
        </a>
        <a href="#contacts" id="navbar5">
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
