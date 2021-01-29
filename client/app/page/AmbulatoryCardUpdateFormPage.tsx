import * as React from 'react'
import FormUpdate from 'component/ambulatory_card/form/update'
import FetchWrapper from 'core/fetch_wrapper'
import { useParams } from "react-router-dom";
import GET_AMBULATORY_CARD from "api/GetAmbulatoryCard";

const AmbulatoryCardUpdateFormPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    return (
        <FetchWrapper query={GET_AMBULATORY_CARD} queryParams={{ id }}>
            <FormUpdate />
        </FetchWrapper>
    )
}

export default AmbulatoryCardUpdateFormPage