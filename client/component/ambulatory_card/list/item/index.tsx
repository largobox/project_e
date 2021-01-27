import * as React from 'react'
import { useHistory } from 'react-router'
import { AmbulatoryCardI } from 'shared/type'
import Row from 'core/grid/row'
import Cell from 'core/grid/cell'
import Typography from '@material-ui/core/Typography'
import { prettyDateFrom } from 'helper'

type Props = {
    data: AmbulatoryCardI
}

const AmbulatoryCardItem = (props: Props): JSX.Element => {
    const { data } = props
    const history = useHistory()
    const handleClick = () => history.push(`/ambulatory-card/${data.id}/description`)
    
    return (
        <Row onClick={handleClick}>
            <Cell xs={3}>
                <Typography>{data.id}</Typography>
            </Cell>
            <Cell xs={3}>
                <Typography>{data.name}</Typography>
            </Cell>
            <Cell xs={3}>
                <Typography>{prettyDateFrom(data.createdAt)}</Typography>
            </Cell>
            <Cell xs={3}>
                <Typography>{prettyDateFrom(data.updatedAt)}</Typography>
            </Cell>
        </Row>
    )
}

export default AmbulatoryCardItem