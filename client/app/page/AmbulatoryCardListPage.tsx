import * as React from 'react'
import AmbulatoryCardList from 'component/ambulatory_card/list'
import SimpleLayout from 'layout/simple'

const AmbulatoryCardListPage: React.FC = () => {
    return (
        <SimpleLayout title='Регистратура'>
            <AmbulatoryCardList />
        </SimpleLayout>
    )
}

export default AmbulatoryCardListPage