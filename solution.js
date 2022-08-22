const convertHTML = (str) => {
  const htmlEntity = ["&", "<", ">", '"', "'"];
  const entityMap = {
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
        return entityMap[char];
      } else {
        return char;
      }
    })
    .join("");
};

module.exports = { convertHTML };
