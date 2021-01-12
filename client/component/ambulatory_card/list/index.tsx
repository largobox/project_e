import * as React from 'react'
import Item from './item'
import Grid from 'core/grid'
import FetchWrapper from 'core/fetch_wrapper'
import GET_AMBULATORY_CARDS from 'api/GetAmbulatoryCards'

const AmbulatoryCardList = (): JSX.Element => {
    return (
        <FetchWrapper query={GET_AMBULATORY_CARDS}>
            <Grid
                headers={
                    [
                        {label: 'ID', size: 6},
                        {label: 'Имя', size: 6}
                    ]
                }
                Item={Item}
            />
        </FetchWrapper>
    )
}

export default AmbulatoryCardList