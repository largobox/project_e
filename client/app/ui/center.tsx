import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import AmbulatoryCardListPage from 'page/AmbulatoryCardListPage'
import AmbulatoryCardCardPage from 'page/AmbulatoryCardCardPage'
import AmbulatoryCardCreateFormPage from 'app/page/AmbulatoryCardCreateFormPage'
import AmbulatoryCardUpdateFormPage from 'page/AmbulatoryCardUpdateFormPage'
import ServiceListPage from 'page/ServiceListPage'

const Center: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/ambulatory-card'>
                <AmbulatoryCardListPage />
            </Route>
            <Route exact path='/ambulatory-card/:id/update'>
                <AmbulatoryCardUpdateFormPage />
            </Route>
            <Route exact path='/ambulatory-card/:id/:tab'>
                <AmbulatoryCardCardPage />
            </Route>
            <Route exact path='/ambulatory-card/create'>
                <AmbulatoryCardCreateFormPage />
            </Route>
            <Route exact path='/services'>
                <ServiceListPage />
            </Route>
        </Switch>
    )
}

export default Center