import * as superagent from 'superagent';
import { variables } from '$lib/variables'

export const get = async (req, res) => {
    const { blogId, postId } = req.params;

    const fileUrl = `${variables.blogsBaseUrl}/api/blogs/${blogId}/file`;
    console.log(`Fetching blog content with id: ${blogId} from ${fileUrl}`);
    const fileResponse = await superagent
        .get(fileUrl)
        .buffer(true)
        .parse(superagent.parse.text)

    return {
        headers: { 'Content-Type': 'text/markdown' },
        status: 200,
        body: fileResponse.text
    }
}