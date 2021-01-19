import * as React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination'

type Props = {
    value: number
    count: number
    setValue: (value: number) => void
}

const PaginationComponent = (props: Props): JSX.Element => {
    const {
        count,
        value,
        setValue,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        root: {
            display: 'inline-block',
            backgroundColor: theme.palette.grey[400],
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
        },
    })();

    const handleChangePage = (_: any, value: number) => {
        setValue(value)
    }

    return (
        <Pagination
            page={value}
            classes={{ root: classes.root }}
            count={count}
            color='primary'
            onChange={handleChangePage}
        />
    )
}

export default PaginationComponent