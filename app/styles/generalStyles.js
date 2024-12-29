const heroStyles = `
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
}

main h1 {
  font-weight: 800;
  font-size: clamp(40px, 8vw, 80px);
  color: var(--Name);
  line-height: 1;
  margin-bottom: 1rem
}

main p:first-of-type {
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  color: var(--job);
  margin-bottom: 1rem
}

.job {
  font-size: clamp(40px, 8vw, 80px);
  line-height: 1;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--job);
}

.description {
  color: var(--text-color);
}
`;

const navbarStyles = `
header {
  position: fixed;
  width: 100%;
  padding: 0.5rem 0;
  backdrop-filter: blur(10px);
  background-color: var(--nav-bg);
  z-index: 50;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
nav {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.navLogo {
  height: 3rem;
  width: 3rem;
}

.navlinks {
  display: flex;
  gap: 1rem;
}

.navlink {
  font-size: 1.2rem;
  font-weight: 600;
}

.showNav {
  transform: translateY(0px);
}
.hideNav {
  transform: translateY(-100%);
}

.navigationContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.themeIcon {
  color: var(--foreground);
  height: 1.5rem;
  width: 1.5rem;
}

`;

const footerStyles = `
footer {
  background-color: var(--background);
  padding: 1rem 0;
  border-top: 2px solid var(--grid-color);
}
.centerFooter {
  width: 80%;
  margin: 0 auto;
}

.footerLogo {
  height: 3rem;
  width: 3rem;
}

.logoContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 0.8rem;
}
.footerLinks {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.footerLink {
  display: flex;
  align-items: center;
  justify-content: center;
}

.star {
  color: var(--text-color);
}

.star:hover {
  color: white;
}
`;

const aboutStyles = `
.aboutSection {
  background-color: var(--background);
}

.aboutContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
}

.mich {
  border-radius: 1rem;
  object-fit: cover;
  height: 16rem;
}
  .mich {
    border-radius: 1rem;
    width: 16rem;
    height: 16rem;
    object-fit: cover;
  }


.aboutDescription {
  color: var(--text-color);
}

`;

const contactStyles = `
.contact {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.contactText {
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contactBtnContainer {
  display: flex;
  justify-content: center;
}

`;

const sectionStyles = `
.sectionHeading {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}

.centerSection {
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
}
`;

const projectsStyle = `
.cardContainerGrid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 2rem 0
}
`;

const card = `
.cardContainer {
  border-radius: 0.75rem;
  padding: 2rem;
  background: var(--card-bg);
  box-shadow: 0 0 10px 0 var(--card-shadow);
  display: grid;
  gap: 1rem;
  text-align: center;
}
.cardTitle {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
}

.cardDescription {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
}

.cardIconContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.cardIcon {
  font-size: 2.25rem;
  line-height: 2.5rem;
  border-radius: 9999px;
  padding: 0.25rem;
  border: 2px solid #737373;
}

`;

const button = `
.btn {
  background-color: #ffffff;
  color: #0a0a0a;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  user-select: none;
}

.centerBtnItems {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
`;

const responsiveStyles = `
@media (min-width: 640px) {
  .cardContainerGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 768px) {
  main p:first-of-type {
    font-size: 1.5rem;
  }
   .job {
    font-size: 4rem;
    line-height: 1;
  }

  .description {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    width: 80%;
  }

  .sectionHeading {
    font-size: 4rem;
  }

  .contactText {
    font-weight: 700;
    font-size: 2rem;
  }

  .contact {
    height: 100vh;
  }

  .aboutContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    font-size: large;
    justify-content: space-between;
  }
}

@media (min-width: 900px) {

  /* about */
  .mich {
    border-radius: 1rem;
    width: 24rem;
    height: 24rem;
    object-fit: cover;
  }

  /* footer */
  .logoContainer {
    flex-direction: row;
    font-size: 1rem;
    margin-bottom: 0;
  }

  .centerFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
   /* hero */
   .description {
    width: 60%;
  }

@media (min-width: 1280px) {
  .cardContainerGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
}

@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
@media (min-width: 1536px) {
}

@media (prefers-color-scheme: dark) {
}
`;

export const styles = `
${sectionStyles}
${card}
${button}

${navbarStyles}
${heroStyles}
${aboutStyles}
${projectsStyle}
${contactStyles}
${footerStyles}
${responsiveStyles}
`;
