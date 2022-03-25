import { urqlClient } from "../../setup/urql";
import { variables } from '$lib/variables'

export const get = async (_, res) => {
    const dataUrl = `${variables.blogsBaseUrl}/api/blogs?sorts=-createdAt`;
    console.log(`Fetching blogs from: ${dataUrl}`)

    let state = {
        endCursor: undefined,
        hasNextPage: true
    }

    let blogs = [];

    do {
        const allBlogsResponse = await urqlClient.query(`
        query ($after: String) {
            blogs(first: 1, after: $after, order: {
                createdAt: DESC
            }) {
                nodes {
                    id
                    title
                    description
                    createdAt
                    approxTimeToRead
                    coverImageUrl
                }

                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    `, { after: state.endCursor }).toPromise()

        blogs = [...blogs, ...(allBlogsResponse.data.blogs.nodes || [])]
        state = {
            hasNextPage: allBlogsResponse.data.blogs.pageInfo.hasNextPage,
            endCursor: allBlogsResponse.data.blogs.pageInfo.endCursor
        }

    } while (state.hasNextPage);

    return {
        body: {
            blogs,
            totalCount: blogs.length
        },
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    }
}