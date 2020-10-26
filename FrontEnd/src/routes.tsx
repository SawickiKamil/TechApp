import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import IntrotudctionPage from './componets/introductionPage'
import Technology from './componets/technologyPage'

export function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={IntrotudctionPage} />
            <Route exact path='/technologies' component={Technology} />
        </Switch>
    )
}