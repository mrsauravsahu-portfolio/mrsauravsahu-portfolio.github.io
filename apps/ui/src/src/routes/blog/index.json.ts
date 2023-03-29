import {urqlClient} from '../../setup/urql'
import {variables} from '$lib/variables'

export const get = async () => {
  console.log(`Fetching blogs`)

  let state = {
    endCursor: null,
    hasNextPage: true,
  }

  let blogs = []

  do {
    // eslint-disable-next-line no-await-in-loop
    const gqlQuery = `
        query Blog($after: String) {
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
    `;
    const allBlogsResponse = await urqlClient.query(gqlQuery, {after : state.endCursor}).toPromise()

    blogs = [...blogs, ...(allBlogsResponse.data.blogs.nodes || [])]
    state = {
      hasNextPage: allBlogsResponse.data.blogs.pageInfo.hasNextPage,
      endCursor: allBlogsResponse.data.blogs.pageInfo.endCursor,
    }
  } while (state.hasNextPage)

  return {
    body: {
      blogs,
      totalCount: blogs.length,
    },
    status: 200,
    headers: {'Content-Type': 'application/json'},
  }
}
