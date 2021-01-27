import * as React from 'react'
import AmbulatoryCardForm from 'component/ambulatory_card/form'
import SimpleLayout from 'layout/simple'

const AmbulatoryCardCreateFormPage: React.FC = () => {
    return (
        <SimpleLayout title='Добавить карту пациента'>
            <AmbulatoryCardForm />
        </SimpleLayout>
    )
}

export default AmbulatoryCardCreateFormPage