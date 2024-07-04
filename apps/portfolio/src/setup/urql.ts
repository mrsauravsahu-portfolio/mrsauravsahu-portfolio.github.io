import {createClient} from '@urql/core'

export const urqlClient = createClient({url: '/graphql' })
