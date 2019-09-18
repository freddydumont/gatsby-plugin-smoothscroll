/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 */
const scrollTo = (selector) => {
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default scrollTo;
