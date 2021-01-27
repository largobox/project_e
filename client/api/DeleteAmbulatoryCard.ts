import { gql } from '@apollo/client';

export default gql`
    mutation DeleteAmbulatoryCard($id: String!) {
        ambulatoryCardDelete(id: $id)
    }
`