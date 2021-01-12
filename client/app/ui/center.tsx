import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import RegistryPage from 'page/RegistryPage'
import ServiceListPage from 'page/ServiceListPage'

const Right = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/registry'>
                <RegistryPage />
            </Route>
            <Route exact path='/services'>
                <ServiceListPage />
            </Route>
        </Switch>
    )
}

export default Right