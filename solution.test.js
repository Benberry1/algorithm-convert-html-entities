// Create a function that accepts a string
// Search through the string and find if the character is equal to &, <, >, ", '
// If one of the characters is equal to the above then replace that character
// with the html entity. E.g., replace & with &amp;

const { convertHTML } = require("./solution");

describe("Convert HTML entity function", () => {
  test("WHEN a string is passed to convertHTML THEN a string is returned", () => {
    const result = convertHTML("This is a string!");
    expect(typeof result === "string").toBe(true);
  });

  test.each([
    ["Dolce & Gabbana", "Dolce &amp; Gabbana"],
    ["Hamburgers < Pizza < Tacos", "Hamburgers &lt; Pizza &lt; Tacos"],
    ["Sixty > twelve", "Sixty &gt; twelve"],
    ['Stuff in "quotation marks"', "Stuff in &quot;quotation marks&quot;"],
    ["Schindler's List", "Schindler&apos;s List"],
    ["<>", "&lt;&gt;"],
    ["abc", "abc"],
  ])(
    'WHEN a string of "%s" is passed to convertHTML THEN "%s" is returned',
    (str, expected) => {
      const result = convertHTML(str);
      expected(result).toBe(expected);
    }
  );
});
