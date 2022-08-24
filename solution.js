const convertHTML = (str) => {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map(
      (char) => (char in entityMap ? entityMap[char] : char)
      //   if (char in entityMap) {
      //     return entityMap[char];
      //   } else {
      //     return char;
      //   }
    )
    .join("");
};

module.exports = { convertHTML };
