import * as React from 'react'
import Area from 'component/core/description/area'
import Description from 'component/core/description'
import Item from 'core/description/item'
import { AmbulatoryCardI } from 'shared/type'
import { prettyDateFrom } from 'helper'
import CommonToolbar from 'component/common/card/tab/description/toolbar'
import DELETE_AMBULATORY_CARD from 'api/DeleteAmbulatoryCard'

type Props = {
    fetchData?: AmbulatoryCardI
}

const DecriptionTab: React.FC<Props> = (props) => {
    const { fetchData } = props

    return (
        <Description
            Toolbar={CommonToolbar}
            tollbarProps={{
                baseUrl: 'ambulatory-card',
                deleteQuery: DELETE_AMBULATORY_CARD,
                alertTitle: 'Удалить данную карту пациента?',
                alertText: 'После удаления данная карта будет помещена в архив.',
            }}
        >
            <Area label='данные' side='left'>
                <Item label='ФИО' value={fetchData.fullName} />
                <Item label='Профессия' value={fetchData.profession} />
            </Area>
            <Area label='дополнительно' side='right'>
                <Item label='Дата создания' value={prettyDateFrom(fetchData.createdAt)} />
                <Item label='Дата последнего редактирования' value={prettyDateFrom(fetchData.updatedAt)} />
            </Area>
        </Description>
    )
}

export default DecriptionTab