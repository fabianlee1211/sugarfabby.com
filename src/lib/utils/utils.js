// Remove whitespaces and new lines from className styles
export const cleanStyles = (styles) => {
  return styles.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
};
