import './App.css';
import {
  Route,
  Switch,
  Redirect,
  Router
} from "react-router-dom"

// history
import history from "./history"

// query string
import qs from 'query-string'

// Components
import MainApp from './components/app/MainApp/MainApp'

// Private Route to App
// If User is authenticated
const PrivateRoute = ({ auth, location, ...rest }) => {
  // get query string for routing
  let queryParams = qs.parse(location.search)
  let path = queryParams.path || null

  return (
    <Route {...rest} render={props =>
      auth === true
        ? <MainApp {...props} path={path} />
        : <Redirect to='/login' />
    }
    />
  )
}

const Login = () => (
  <div>
    This is login component
  </div>
)

// auth is true for test purposes
const auth = true

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route
            path='/login'
            component={Login}
          />

          <PrivateRoute
            path='/'
            auth={auth}
          />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
