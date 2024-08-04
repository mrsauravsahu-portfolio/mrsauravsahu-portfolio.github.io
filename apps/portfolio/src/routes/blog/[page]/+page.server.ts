import { redirect, type Load } from '@sveltejs/kit';
import { urqlClient } from '../../../setup/urql'
import type { Blog } from '../../../types/Blog';


export const load: Load = async ({ params }) => {
	console.log(`Running Load Function for /blog/${params.page}`, Number.isNaN(params.page))

	if (Number.isNaN(params.page))
		redirect(301, '1')

	let pageNumber = Number(params.page);
	pageNumber = Number.isNaN(pageNumber) ? 1 : pageNumber;

	let blogs: Blog[] = []

	let skip = (pageNumber - 1) * 6
	console.log('getting blogs')

	const allBlogsResponse = await urqlClient.query(`
        query ($skip: Int) {
            blogsPaginated(skip: $skip, take: 6, order: {
                createdAt: DESC
            }) {
                items {
                    id
                    title
                    description
                    createdAt
                    approxTimeToRead
                    coverImageUrl
                }

                pageInfo {
                    hasNextPage
                }
            }
        }
    	`, { skip }).toPromise();

	blogs = [...blogs, ...(allBlogsResponse?.data?.blogsPaginated?.items || [])]
	console.log('got blogs', blogs.length)

	let data = {
		blogs,
		totalCount: 49,
	}

	const lastPage = Math.floor(data.totalCount / 6) + (data.totalCount % 6 === 0 ? 0 : 1);
	let startIndex = 6 * (pageNumber - 1);

	return { ...data, currentPage: pageNumber, lastPage, blogs }
}
