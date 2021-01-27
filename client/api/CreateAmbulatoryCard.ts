import { gql } from '@apollo/client';

export default gql`
    mutation CreateAmbulatoryCard($input: AmbulatoryCardInput) {
        ambulatoryCardCreate(input: $input) {
            id
            name
            patronymic
        }
    }
`