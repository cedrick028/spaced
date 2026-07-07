export const generateIcon = (a = "", b = "") => {
  return a.slice(0, 1).toUpperCase().concat(b.slice(0, 1).toUpperCase());
}