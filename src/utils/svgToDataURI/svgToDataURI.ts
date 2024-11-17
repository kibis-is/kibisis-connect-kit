/**
 * Convenience function to convert a raw SVG string to an SVG data URI.
 * @param {string} svgString - A raw SVG string.
 * @returns {string} An encoded data URI SVG.
 */
export default function svgToDataURI(svgString: string): string {
  const encodedSvg = encodeURIComponent(svgString)
    .replace(/'/g, '%27') // escape single quotes
    .replace(/"/g, '%22'); // escape double quotes

  // Create the Data URI
  return `data:image/svg+xml,${encodedSvg}`;
}
