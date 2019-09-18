const scrollTo = (selector) => {
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default scrollTo;
