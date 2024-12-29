import { navbarStyles, footerStyles, contactStyles, media, projectsStyle } from "./generalStyles";
export const styles = `
${navbarStyles}
${projectsStyle}
${contactStyles}
${footerStyles}
${media}
`;



// import React, { useEffect, useState } from "react";

// const Style = ({ addedstyle }) => {
//   const style = addedstyle;
//   useEffect(() => {
//     function addStyle(style) {
//       const styleTag = document.querySelector(".style");
//       styleTag.insertAdjacentHTML("beforeend", style);
//     }

//     addStyle(style);
//   });

//   return null;
// };

// export default Style;
