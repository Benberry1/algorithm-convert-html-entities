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
    .map((char) => (char in entityMap ? entityMap[char] : char))
    .join("");
};

module.exports = { convertHTML };
