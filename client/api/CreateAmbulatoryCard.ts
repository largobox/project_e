import { gql } from '@apollo/client';

export default gql`
    mutation CreateAmbulatoryCard($input: AmbulatoryCardInput) {
        createAmbulatoryCard(input: $input) {
            id
            name
        }
    }
`