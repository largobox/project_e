import { gql } from '@apollo/client';

export default gql`
    query GetAmbulatoryCards {
        items: ambulatoryCards {
            id
            name
        }
    }
`