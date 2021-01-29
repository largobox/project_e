import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import BreadcrumbComponent, { TBreadcrumb } from 'core/breadcrumb'

type Props = {
    title: string
    children: JSX.Element
    breadcrumbs?: TBreadcrumb[]
}

const SimpleLayout: React.FC<Props> = (props) => {
    const {
        children,
        title,
        breadcrumbs,
    } = props

    const theme = useTheme()
    const classes = makeStyles({
        titleCont: {
            backgroundColor: theme.palette.grey[300],
            borderRadius: theme.shape.borderRadius,
            paddingLeft: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            paddingRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
        }
    })()

    return (
        <Box>
            {
                breadcrumbs && breadcrumbs.length > 0 ?
                    <BreadcrumbComponent items={breadcrumbs} />
                    :
                    null
            }
            <Paper className={classes.titleCont}>
                <Typography variant='h4'>{title}</Typography>
            </Paper>
            {children}
        </Box>
    )
}

export default SimpleLayout