import { gql } from '@apollo/client';

export default gql`
    query GetAmbulatoryCards($queryVariables: QueryVariablesInput) {
        result: ambulatoryCards(queryVariables: $queryVariables) {
            totalCount
            items {
                id
                name
                createdAt
                updatedAt
            }
        }
    }
`