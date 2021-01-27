import { gql } from '@apollo/client';

export default gql`
    query GetAmbulatoryCard($id: String!) {
        result: ambulatoryCard(id: $id) {
            id
            fullName
            profession
            createdAt
            updatedAt
        }
    }
`