import * as React from 'react'
import Form from 'component/ambulatory_card/form'
import SimpleLayout from 'layout/simple'
import CreateAmbulatoryCard from 'api/CreateAmbulatoryCard'

const AmbulatoryCardCreateForm: React.FC = () => {
    return (
        <SimpleLayout
            title='Создание карты пациента'
            breadcrumbs={[
                { label: 'регистратура', url: '/ambulatory-card' },
                { label: 'создание карты пациента' },
            ]}
        >
            <Form mutation={CreateAmbulatoryCard} />
        </SimpleLayout>
    )
}

export default AmbulatoryCardCreateForm