// types
import type { IClientMetadata } from '@types';

// utils
import extractFaviconURL from '@utils/extractFaviconURL/extractFaviconURL';

/**
 * Convenience function to create the client metadata based off of the website.
 *
 * * `description` - This is taken from the `<meta name="description">` tag.
 * * `host` - This is taken from `window.location.host` with the protocol prefixed, i.e. https://example.com.
 * * `name` - This is taken from the `<meta name="application-name">` tag.
 * * `iconURL` - This is taken from the favicon icon URL.
 * @returns {IClientMetadata} The client metadata from the website.
 */
export default function createClientMetadata(): IClientMetadata {
  return {
    description:
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content') || null,
    host: `${window.location.protocol}//${window.location.host}`,
    name:
      document
        .querySelector('meta[name="application-name"]')
        ?.getAttribute('content') || document.title,
    iconURL: extractFaviconURL(),
  };
}
