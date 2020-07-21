/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 * @param {string} [blockPosition='start'] argument will be used to determine position where will be scrolled to
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
declare const scrollTo: (
  selector: string,
  blockPosition?: 'start' | 'center' | 'end' | 'nearest'
) => boolean;
export default scrollTo;
