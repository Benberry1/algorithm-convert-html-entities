const convertHTML = (str) => {
  const htmlEntity = ["&", "<", ">", '"', "'"];
  const codeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  const newStr = str.split("").map((char) => {
    if (htmlEntity.includes(char)) {
      return codeMap[char];
    } else {
      return char;
    }
  });

  return newStr.join("");
};

module.exports = { convertHTML };
