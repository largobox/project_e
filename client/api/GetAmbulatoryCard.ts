import { gql } from '@apollo/client';

export default gql`
    query GetAmbulatoryCard($id: String!) {
        result: ambulatoryCard(id: $id) {
            id
            name
            surname
            patronymic
            profession
            fullName
            createdAt
            updatedAt
        }
    }
`