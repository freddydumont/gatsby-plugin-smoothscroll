/**
 * Smooth scrolling onClick event handler
 * @param {string} selector argument will be passed to `querySelector`, usually an HTML id
 * @param {string} [blockPosition='start'] argument will be used to determine position where will be scrolled to
 * @param {string} [offsetSelector=''] optional, usually a HTML id, used to determine an offset in the case of a fixed navbar. If present, blockPosition defaults to 'start'
 * @returns {boolean} false if `document.querySelector` doesn't find a match, otherwise true
 */
declare const scrollTo: (
  selector: string,
  blockPosition?: 'start' | 'center' | 'end' | 'nearest',
  offsetSelector?: string,
) => boolean;
export default scrollTo;
