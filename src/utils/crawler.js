/**
 * string parser html
 * @param {String} html
 * @returns
 */
export const parserHtml = (html) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
};

/**
 * html find class
 * @param {Document} name
 * @param {String} option
 */
export const findClass = (html, className) => {
  return Array.from(html.getElementsByClassName(className));
};

/**
 *  html find tag
 * @param {Document} html
 * @param {String} tag
 */
export const findTag = (html, tag) => {
  return Array.from(html.getElementsByTagName(tag));
};
