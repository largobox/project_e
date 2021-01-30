import * as React from 'react'
import { PropsWithChildren } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { InvalidTypeError } from 'error';
import DescriptionAreaComponent from 'core/description/area';
import DescriptionItemComponent from 'core/description/item';

type TProps = {
    Toolbar?: React.FC
    tollbarProps?: object
}

type TColumn = React.FC<{side: 'left' | 'right'}>

const DescriptionComponent: React.FC<PropsWithChildren<TProps>> = (props) => {
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

    const Column: TColumn = (props) => {
        const { side } = props

        return (
            <React.Fragment>
                {
                    React.Children.map(children, (child: React.ReactElement) => {
                        if (child.type !== DescriptionAreaComponent) {
                            throw new InvalidTypeError(DescriptionComponent, DescriptionAreaComponent)
                        }

                        if (child.props.side !== side) return null

                        return (
                            <React.Fragment>
                                <Typography classes={{ root: classes.areaLabel }}>{child.props.label}</Typography>
                                <Divider></Divider>
                                {
                                    React.Children.map(child.props.children, child => {
                                        if (child.type !== DescriptionItemComponent) {
                                            throw new InvalidTypeError(DescriptionComponent, DescriptionItemComponent)
                                        }

                                        return (
                                            <Box className={classes.itemCont}>
                                                <Typography>
                                                    {child.props.label}:
                                                </Typography>
                                                <Typography>
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
                <Toolbar {...tollbarProps} />
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

DescriptionComponent.displayName = 'DescriptionComponent'

export default DescriptionComponent;