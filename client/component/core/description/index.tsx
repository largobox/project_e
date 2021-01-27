import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import { useTheme, makeStyles } from '@material-ui/core/styles';

type Props = {
    children: JSX.Element | JSX.Element[]
    Toolbar?: React.FC
    tollbarProps?: object
}

const DescriptionComponent = (props: Props): JSX.Element => {
    const {
        children,
        Toolbar,
        tollbarProps,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        areaLabel: {
            textTransform: 'uppercase',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            fontWeight: theme.typography.fontWeightBold,
        },
        itemCont: {
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: theme.shape.borderRadius,
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5),
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),

            '&:nth-child(2n)': {
                backgroundColor: theme.palette.grey[300]
            }
        },
    })();

    const Column = (props: { side: 'left' | 'right' }): JSX.Element => {
        const { side } = props

        return (
            <React.Fragment>
                {
                    React.Children.map(children, child => {
                        if (child.type.name !== 'DescriptionAreaComponent') {
                            throw new Error('Error in DescriptionComponent. Child must be "DescriptionAreaComponent"')
                        }

                        if (child.props.side !== side) return null

                        return (
                            <React.Fragment>
                                <Typography variant='subtitle2' classes={{ root: classes.areaLabel }}>{child.props.label}</Typography>
                                <Divider></Divider>
                                {
                                    React.Children.map(child.props.children, child => {
                                        if (child.type.name !== 'DescriptionItemComponent') {
                                            throw new Error('Error in DescriptionComponent. Child must be "DescriptionItemComponent"')
                                        }

                                        return (
                                            <Box className={classes.itemCont}>
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {child.props.label}:
                                                </Typography>
                                                <Typography
                                                    variant='body2'
                                                >
                                                    {
                                                        child.props.value === null ?
                                                            '\u2014'
                                                            :
                                                            child.props.value
                                                    }
                                                </Typography>
                                            </Box>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Box textAlign='right'>
                <Toolbar {...tollbarProps}/>
            </Box>
            <Grid spacing={6} container>
                <Grid xs={6} item>
                    <Column side='left' />
                </Grid>
                <Grid xs={6} item>
                    <Column side='right' />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DescriptionComponent;