/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
const scrollTo = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    return true;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      "gatsby-plugin-smoothscroll:\n The selector: '%s' wasn't found in the document.\n Make sure you pass in a valid CSS selector string.",
      selector
    );
  }

  return false;
};

export default scrollTo;
