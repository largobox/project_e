import * as React from 'react'
import Item from './item'
import Toolbar from './toolbar'
import Grid from 'core/grid'
import FetchWrapper from 'core/fetch_wrapper'
import GET_AMBULATORY_CARDS from 'api/GetAmbulatoryCards'

const AmbulatoryCardList = (): JSX.Element => {
    return (
        <FetchWrapper query={GET_AMBULATORY_CARDS}>
            <Grid
                baseSort={[{field: 'name', direction: 1}]}
                headers={
                    [
                        { label: 'ID', size: 3 },
                        { label: 'Имя', size: 3 },
                        { label: 'Дата создания', size: 3 },
                        { label: 'Дата редактирования', size: 3 },
                    ]
                }
                Item={Item}
                Toolbar={Toolbar}
            />
        </FetchWrapper>
    )
}

export default AmbulatoryCardList