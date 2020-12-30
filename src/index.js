/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 * @param {string} [blockPosition='start'] argument will be used to determine position where will be scrolled to (start, center, end, nearest)
 * @param {string} [offsetSelector=''] optional, usually a HTML id, used to determine an offset in the case of a fixed navbar. If present, blockPosition defaults to 'start'
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
const scrollTo = (selector, blockPosition, offsetSelector) => {
  const element = document.querySelector(selector);

  if (offsetSelector !== '') {
    const offsetElement = document.querySelector(offsetSelector);
  }
 
  if (element && !offsetElement) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: blockPosition
    });
    return true;
  }
  else if (element && offsetElement) {
    const top = element.getBoundingClientRect().top - offsetElement.clientHeight;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
    return true;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn("gatsby-plugin-smoothscroll:\n The selector: '%s' wasn't found in the document.\n Make sure you pass in a valid CSS selector string.", selector);
  }

  return false;
};

export default scrollTo;
