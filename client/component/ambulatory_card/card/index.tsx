import * as React from 'react'
import { useHistory } from 'react-router'
import { useParams } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import DescriptionIcon from '@material-ui/icons/Description';
import EventNote from '@material-ui/icons/EventNote';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import DescriptionTab from './tab/description';
import FetchWrapper from 'core/fetch_wrapper';
import GET_AMBULATORY_CARD from 'api/GetAmbulatoryCard'

const AmbulatoryCardCard = (): JSX.Element => {
    const history = useHistory()
    const { id, tab } = useParams<{ id: string, tab: string }>()
    const [value, setValue] = React.useState(tab);
    const theme = useTheme();
    const classes = makeStyles({
        paper: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
        indicator: {
            backgroundColor: theme.palette.secondary.light,
        },
        tabPanel: {
            padding: 0,
            paddingTop: theme.spacing(2),
        }
    })();

    const handleChange = (event: React.ChangeEvent, tabName: string) => {
        setValue(tabName);
        history.push(`/ambulatory-card/${id}/${tabName}`)
    };

    return (
        <TabContext value={value}>
            <Paper classes={{ root: classes.paper }}>
                <Tabs
                    classes={{ indicator: classes.indicator }}
                    value={value}
                    onChange={handleChange}
                >
                    <Tab value='description' icon={<DescriptionIcon />} label="данные" />
                    <Tab value='visits' icon={<EventNote />} label="приёмы" />
                </Tabs>
            </Paper>
            <TabPanel classes={{ root: classes.tabPanel }} value="description">
                <FetchWrapper query={GET_AMBULATORY_CARD} queryParams={{ id }}>
                    <DescriptionTab />
                </FetchWrapper>
            </TabPanel>
            <TabPanel classes={{ root: classes.tabPanel }} value="visits">visits</TabPanel>
        </TabContext>
    )
}

export default AmbulatoryCardCard