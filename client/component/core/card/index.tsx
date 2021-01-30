import * as React from 'react'
import { PropsWithChildren, useState, useEffect } from 'react'
import TabContentComponent from './tab_content'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router'
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import FetchWrapper from 'core/fetch_wrapper';
import { InvalidTypeError } from 'error';

type TProps = {
    baseUrl: string
}

const CardComponent: React.FC<PropsWithChildren<TProps>> = (props) => {
    const {
        baseUrl,
        children,
    } = props
    const { tab } = useParams<{tab: string}>()
    const [value, setValue] = useState(tab);
    const history = useHistory()
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

    useEffect(() => {
        setValue(tab);
    }, [tab])

    const handleChange = (event: React.ChangeEvent, tabName: string) => {
        setValue(tabName);
        history.push(`${baseUrl}/${tabName}`)
    };

    React.Children.map(children, (child: React.ReactElement) => {
        if (child.type !== TabContentComponent) {
            throw new InvalidTypeError(CardComponent, TabContentComponent)
        }
    })

    return (
        <TabContext value={value}>
            <Paper classes={{ root: classes.paper }}>
                <Tabs
                    classes={{ indicator: classes.indicator }}
                    value={value}
                    onChange={handleChange}
                >
                    {
                        React.Children.map(children, (child: React.ReactElement) => {
                            return (
                                <Tab
                                    value={child.props.name}
                                    icon={<child.props.Icon />}
                                    label={child.props.label}
                                />
                            )
                        })
                    }
                </Tabs>
            </Paper>
            {
                React.Children.map(children, (child: React.ReactElement) => {
                    if (child.props.query) {
                        return (
                            <TabPanel
                                classes={{ root: classes.tabPanel }}
                                value={child.props.name}
                            >
                                <FetchWrapper query={child.props.query} queryParams={child.props.queryParams}>
                                    <child.props.Content />
                                </FetchWrapper>
                            </TabPanel>
                        )
                    }

                    return (
                        <TabPanel
                            classes={{ root: classes.tabPanel }}
                            value={child.props.name}
                        >
                            <child.props.Content />
                        </TabPanel>
                    )
                })
            }
        </TabContext>
    )

}

CardComponent.displayName = 'CardComponent'

export default CardComponent;