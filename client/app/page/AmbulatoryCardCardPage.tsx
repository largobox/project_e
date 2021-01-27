import * as React from 'react'
import SimpleLayout from 'layout/simple'
import AmbulatoryCardCard from 'component/ambulatory_card/card'

const AmbulatoryCardCardPage: React.FC = () => {
    return (
        <SimpleLayout title='Карта пациента'>
            <AmbulatoryCardCard />
        </SimpleLayout>
    )
}

export default AmbulatoryCardCardPage