/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
declare const scrollTo: (selector: string) => boolean;
export default scrollTo;
