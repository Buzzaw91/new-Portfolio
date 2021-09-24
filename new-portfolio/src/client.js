import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"zftb6ov9",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-08-31'
})