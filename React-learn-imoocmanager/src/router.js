import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.js'
import Modals from './pages/ui/modals.js'
import Loadings from './pages/ui/loadings.js'
import Notices from './pages/ui/notices.js'
import Message from './pages/ui/messages'
import Tab from './pages/ui/tabs'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import NoMatch from './nomatch'
class IRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notices} />
                  <Route path="/admin/ui/messages" component={Message} />
                  <Route path="/admin/ui/tabs" component={Tab} />
                  <Route path="/admin/form/login" component={FormLogin} />
                  <Route path="/admin/form/reg" component={FormRegister} />
                  <Route path="/admin/table/basic" component={BasicTable} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
        </App>
      </HashRouter>
    )
  }
}

export default IRouter
