import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                ambulatoryCardsConnection: {
                    keyArgs: false,
                },
            },
        },
    },
})

export default cache