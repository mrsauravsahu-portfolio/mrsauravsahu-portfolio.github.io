import superagent from 'superagent'

import {variables } from '$lib/variables'

export const get = async (req, res) => {
  const urls = [`${variables.blogsBaseUrl}/`];

  const healthRequestPromises = urls.map((url) => superagent(url))
  const responses = await Promise.all(healthRequestPromises)

  return {
    status: 200,
    body: responses.map(response => response.body),
    headers: { 'Content-Type': 'application/json' }
  };
}