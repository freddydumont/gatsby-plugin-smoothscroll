/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 * @param {string} [blockPosition='start'] argument will be used to determine position where will be scrolled to (start, center, end, nearest)
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
const scrollTo = (selector, blockPosition = 'start') => {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: blockPosition,
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
