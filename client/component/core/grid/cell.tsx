import * as React from 'react'
import { Grid, GridSize } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles';

type Props = {
    children: any
    xs: GridSize
}

const CellComponent = (props: Props): JSX.Element => {
    const {
        xs,
        children,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })();

    return (
        <Grid
            classes={{ root: classes.root }}
            item
            xs={xs}
        >
            {
                React.Children.map(children, child => React.cloneElement(child))
            }
        </Grid>
    )
}

export default CellComponent