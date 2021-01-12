import * as React from 'react'
import { Typography, Paper, Grid, GridSize } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles';

export type HeaderItemType = {
    label: string
    size: GridSize
}

type Props = {
    items: Array<HeaderItemType>
}

const GridHeaderComponent = (props: Props): JSX.Element => {
    const {
        items
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        headerCont: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderTopRightRadius: theme.shape.borderRadius,
        },
        headerItem: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })();

    return (
        <Paper variant='outlined'>
            <Grid
                container
                classes={{ root: classes.headerCont }}
            >
                {
                    items.map(item =>
                        <Grid
                            item
                            classes={{ root: classes.headerItem }}
                            xs={item.size}
                        >
                            <Typography variant='h6'>{item.label}</Typography>
                        </Grid>
                    )
                }
            </Grid>
        </Paper>
    )
}

export default GridHeaderComponent