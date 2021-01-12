import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useTheme, makeStyles } from '@material-ui/core/styles';

type Props = {
    children: any
    onClick?: (ev: React.MouseEvent) => void
}

const RowComponent = (props: Props): JSX.Element => {
    const {
        children,
        onClick,
    } = props

    const theme = useTheme();
    const classes = makeStyles({
        root: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            marginTop: theme.spacing(1),

            '&:nth-child(2n - 1)': {
                backgroundColor: theme.palette.grey[100]
            },

            '&:hover': {
                backgroundColor: theme.palette.grey[200],
                cursor: onClick ? 'pointer' : 'auto',
            },
        },
    })();

    return (
        <Paper
            className={classes.root}
            onClick={onClick}
            variant='outlined'
            square
        >
            <Grid container>
                {
                    React.Children.map(children, child => React.cloneElement(child))
                }
            </Grid>
        </Paper>
    )
}

export default RowComponent