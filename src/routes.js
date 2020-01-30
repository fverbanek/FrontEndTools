import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './pages/Main'
import nfeDestinatario from './pages/NfeDestinatario'

export default function Routes() {

    return (        
        <Switch>
            <Route path="/" exact component={Home}/>            
            <Route path="/destinatarionfe" component={nfeDestinatario}/>
        </Switch>
    )
}