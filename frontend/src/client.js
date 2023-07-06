import sanityClient, { createClient } from '@sanity/client';


const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
    perspective: 'published'
})

export default client;


