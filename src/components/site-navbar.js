class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav id="nav">
        <div id="navbuttons">
          <!-- i could make this look more like buttons i think-->
          <a href="index.html" class="navbutton">Home</a>
          <a href="aboutme.html" class="navbutton">About Me</a>
          <a href="resume.html" class="navbutton">Resume</a>
          <a href="projects.html" class="navbutton">My Projects</a>
        </div>
      </nav>
        `;
  }
}

customElements.define("site-navbar", SiteNavbar);
