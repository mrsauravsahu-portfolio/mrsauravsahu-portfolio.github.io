import { urqlClient } from '../setup/urql'

export const load = async () => {
  console.log(`Fetching blogs from: ${urqlClient.url}`)

  let state = {
    endCursor: undefined,
    hasNextPage: true,
  }

  let blogs: any[] = []

  do {
    // eslint-disable-next-line no-await-in-loop
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

    // console.log(allBlogsResponse?.data)
    blogs = [...blogs, ...(allBlogsResponse?.data?.blogs?.nodes || [])]
    state = {
      hasNextPage: allBlogsResponse?.data?.blogs?.pageInfo?.hasNextPage || false,
      endCursor: allBlogsResponse?.data?.blogs?.pageInfo?.endCursor || undefined,
    }
  } while (state.hasNextPage)

  return {
    blogs,
    totalCount: blogs.length,
  }
}
