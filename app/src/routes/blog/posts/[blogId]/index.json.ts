import { urqlClient } from "../../../../setup/urql";

import {variables } from '$lib/variables'

export const get = async (req, res) => {
  const { blogId } = req.params;

  const blogByIdUrl = `${variables.blogsBaseUrl}/api/blogs/${blogId}`;
  console.log(`Fetching blog with id: ${blogId} from ${blogByIdUrl}`);
  const blogByIdResponse = await urqlClient.query(`
    {
        blog: blogById(input: {
          id: ${blogId} 
          }) {
          id
          title
          approxTimeToRead
          createdAt
        }
    }`).toPromise()

  return {
    status: 200,
    body: blogByIdResponse.data,
    headers: { 'Content-Type': 'application/json' }
  };
}