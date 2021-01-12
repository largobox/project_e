import * as React from 'react'
import { AmbulatoryCardOutputI } from 'type'
import Row from 'core/grid/row'
import Cell from 'core/grid/cell'
import Typography from '@material-ui/core/Typography'

type Props = {
    data: AmbulatoryCardOutputI
}

const AmbulatoryCardItem = (props: Props): JSX.Element => {
    const { data } = props

    return (
        <Row>
            <Cell xs={6}>
                <Typography>{data.id}</Typography>
            </Cell>
            <Cell xs={6}>
                <Typography>{data.name}</Typography>
            </Cell>
        </Row>
    )
}

export default AmbulatoryCardItem