import superagent from 'superagent'
import {variables} from '$lib/variables'

export const get = async (req, _) => {
  const {blogId} = req.params

  const fileUrl = `${variables.blogsBaseUrl}/api/blogs/${blogId}/file`
  console.log(`Fetching blog content with id: ${blogId} from ${fileUrl}`)
  const fileResponse = await superagent(fileUrl)
    .buffer(true)
    .parse(superagent.parse.text)

  return {
    headers: {'Content-Type': 'text/markdown'},
    status: 200,
    body: fileResponse.text,
  }
}
