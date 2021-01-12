import * as React from 'react'
import AmbulatoryList from 'component/ambulatory_card/list'
import SimpleLayout from 'layout/simple'

const RegistryPage = (): JSX.Element => {
    return (
        <SimpleLayout title='Регистратура'>
            <AmbulatoryList />
        </SimpleLayout>
    )
}

export default RegistryPage