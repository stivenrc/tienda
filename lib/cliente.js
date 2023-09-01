import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'a65r9km3',
    dataset: 'production',
    apiVersion: '2023-09-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);