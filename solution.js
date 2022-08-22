const convertHTML = (str) => {
  const htmlEntity = ["&", "<", ">", '"', "'"];
  const codeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((char) => {
      if (htmlEntity.includes(char)) {
        return codeMap[char];
      } else {
        return char;
      }
    })
    .join("");
};

module.exports = { convertHTML };
