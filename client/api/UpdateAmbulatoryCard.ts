import { gql } from '@apollo/client';

export default gql`
    mutation UpdateAmbulatoryCard($id: String!, $input: AmbulatoryCardInput!) {
        ambulatoryCardUpdate(id: $id, input: $input) {
            id
            name
            surname
            patronymic
            fullName
            profession
            createdAt
            updatedAt
        }
    }
`