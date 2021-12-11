import { createClient } from '@urql/core';
import {variables} from '$lib/variables'

export const urqlClient = createClient({ url: `${variables.blogsBaseUrl}/graphql`})
