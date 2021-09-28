import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
  }

  export { builder, urlFor}