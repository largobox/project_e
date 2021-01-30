import * as React from 'react'
import Box from '@material-ui/core/Box'
import Top from './ui/top'
import Left from './ui/left'
import Center from './ui/center'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { navMenuIsOpenRV } from 'store'
import { useReactiveVar } from '@apollo/client';

const App = (): JSX.Element => {
    // ToDo. Move navMenuIsOpen var to left UI
    const navMenuIsOpen = useReactiveVar(navMenuIsOpenRV);
    const theme = useTheme()
    console.log('thme: ', theme)
    const classes = makeStyles({
        centerCont: {
            paddingLeft: theme.spacing(4) + (navMenuIsOpen ? 250 : 0),
            paddingRight: theme.spacing(4),
            paddingTop: 59 + theme.spacing(2),
            paddingBottom: theme.spacing(4),
            transitionProperty: 'padding-left',
            transitionDuration: `0.${theme.transitions.duration.standard}s`,
            transitionTimingFunction: theme.transitions.easing.easeOut,
        },
    })();

    return (
        <>
            <Top />
            <Box>
                <Left />
                <Box className={classes.centerCont}>
                    <Center />
                </Box>
            </Box>
        </>
    )
}

export default App