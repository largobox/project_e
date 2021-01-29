import * as React from 'react'
import { useParams } from 'react-router'
import SimpleLayout from 'layout/simple'
import AmbulatoryCardCard from 'component/ambulatory_card/card'
import { UnprocessedCaseError } from 'error'
import { MTab } from 'constant'

const AmbulatoryCardCardPage: React.FC = () => {
    const { tab } = useParams<{tab: string}>()
    let tabLabel: string

    switch (tab) {
        case MTab.description.name:
            tabLabel = MTab.description.label
            break;
        case MTab.visits.name:
            tabLabel = MTab.visits.label
            break;
        default:
            throw new UnprocessedCaseError('AmbulatoryCardCardPage', tab)
    }

    return (
        <SimpleLayout
            title='Карта пациента'
            breadcrumbs={[
                { label: 'регистратура', url: '/ambulatory-card' },
                { label: `карта пациента "${tabLabel}"` },
            ]}
        >
            <AmbulatoryCardCard />
        </SimpleLayout>
    )
}

export default AmbulatoryCardCardPage