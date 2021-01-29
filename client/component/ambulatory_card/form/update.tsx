import * as React from 'react'
import { useParams } from 'react-router'
import SimpleLayout from 'layout/simple'
import { AmbulatoryCardI } from 'shared/type'
import Form from './index'
import UpdateAmbulatoryCard from 'api/UpdateAmbulatoryCard'
import { MTab } from 'constant'

type Props = {
    fetchData?: AmbulatoryCardI
}

const AmbulatoryCardUpdateForm: React.FC<Props> = (props) => {
    const { fetchData } = props
    const { id } = useParams<{ id: string }>()

    return (
        <SimpleLayout
            title={`Редактирование карты пациента: ${fetchData.fullName}`}
            breadcrumbs={[
                { label: 'регистратура', url: '/ambulatory-card' },
                { label: `карта пациента "${MTab.description.label}"`, url: `/ambulatory-card/${id}/${MTab.description.name}` },
                { label: 'редактирование карты пациента' },
            ]}
        >
            <Form initialData={fetchData} mutation={UpdateAmbulatoryCard} />
        </SimpleLayout>
    )
}

export default AmbulatoryCardUpdateForm