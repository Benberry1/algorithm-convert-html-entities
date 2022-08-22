const convertHTMLTwo = (str) => {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/(&|<|>|"|')/g, (value) => entityMap[value]);
};

module.exports = { convertHTMLTwo };
