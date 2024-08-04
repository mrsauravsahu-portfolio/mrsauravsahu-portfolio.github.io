import { urqlClient } from '../../../../setup/urql.js';

export const load = async ({ params, fetch }) => {
  // console.log(`Running Load Function for /blog/posts/${params.blogId}`)

  let blogContentRespose = await fetch(`http://localhost:30001/api/blogs/${params.blogId}/file`)
  let blogContent = await blogContentRespose.text()

  let blogResponse = await urqlClient
    .query(
      `
    		query ($blogId: Int!) {
    		blogById(input: {
    			id: $blogId
    		}) {
    			id
    			title
    			description
    			createdAt
    			approxTimeToRead
    			coverImageUrl
    		}
    		}`,
      { blogId: +params.blogId }
    )
    .toPromise();

    let blog = blogResponse.data.blogById;

  return {
    blog,
    blogId: params.blogId,
    blogContent
  }
}
