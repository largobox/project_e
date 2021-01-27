import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                ambulatoryCards: {
                    keyArgs: false,
                },
            },
        },
    },
})

export default cache