import { gql } from '@apollo/client';

export default gql`
    query GetAmbulatoryCards($pagination: PaginationInput) {
        connection: ambulatoryCardsConnection(pagination: $pagination) {
            count
            items {
                id
                name
            }
        }
    }
`