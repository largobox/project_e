import * as React from 'react'
import { useParams } from "react-router";
import TabContent from 'core/card/tab_content';
import Card from 'core/card';
import DescriptionIcon from '@material-ui/icons/Description';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionTab from './tab/description';
import GET_AMBULATORY_CARD from 'api/GetAmbulatoryCard'
import { MTab } from 'constant'

type TParams = {
    id: string
}

const AmbulatoryCardCard: React.FC = () => {
    const { id } = useParams<TParams>()

    return (
        <Card
            baseUrl={`/ambulatory-card/${id}`}
        >
            <TabContent
                label={MTab.description.label}
                name={MTab.description.name}
                Icon={DescriptionIcon}
                query={GET_AMBULATORY_CARD}
                queryParams={{ id }}
                Content={DescriptionTab}
            />
            <TabContent
                label={MTab.visits.label}
                name={MTab.visits.name}
                Icon={EventNoteIcon}
                query={GET_AMBULATORY_CARD}
                queryParams={{ id }}
                Content={() => <span>Visists</span>}
            />
        </Card>
    )
}

export default AmbulatoryCardCard