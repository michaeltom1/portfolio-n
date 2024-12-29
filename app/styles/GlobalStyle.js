import { variables } from "./variables";
import { styles } from "./generalStyles";

const GlobalStyle = () => {
  return (
    <style className="style">{`
${variables}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: inter, "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
      to right,
      var(--grid-color) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
  background-size: 70px 70px;
  background-color: var(--background);
  color: var(--foreground);
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
}

${styles}
`}</style>
  );
};

export default GlobalStyle;
