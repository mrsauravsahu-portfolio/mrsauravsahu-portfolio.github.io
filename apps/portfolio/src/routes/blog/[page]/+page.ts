import { urqlClient } from '../../../setup/urql'
import type { Blog } from '../../../types/Blog';

export const load = async ({ params }) => {
	let pageNumber = Number(params.page);
	pageNumber = Number.isNaN(pageNumber) ? 1 : pageNumber;

	console.log(`Fetching current page ${pageNumber} blogs from: ${urqlClient.url}`)

	let state = {
		endCursor: undefined,
		hasNextPage: true,
	}

	let blogs: Blog[] = []

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
    	`, { after: state.endCursor }).toPromise();

		blogs = [...blogs, ...(allBlogsResponse?.data?.blogs?.nodes || [])]
		state = {
			hasNextPage: allBlogsResponse?.data?.blogs?.pageInfo?.hasNextPage || false,
			endCursor: allBlogsResponse?.data?.blogs?.pageInfo?.endCursor || undefined,
		}
	} while (state.hasNextPage)

	let data = {
		blogs,
		totalCount: blogs.length,
	}

	const lastPage = Math.floor(data.totalCount / 6) + (data.totalCount % 6 === 0 ? 0 : 1);
	let startIndex = 6 * (pageNumber - 1);
	let currentPageBlogs = data.blogs.slice(startIndex, startIndex + 6);

	return { ...data, currentPage: pageNumber, lastPage, blogs: currentPageBlogs }
}
