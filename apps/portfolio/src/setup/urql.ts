import {createClient} from '@urql/core'

export const urqlClient = createClient({url: 'http://localhost:30001/graphql' })
