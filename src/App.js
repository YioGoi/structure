import './App.css';
import {
  Route,
  Switch,
  Redirect,
  Router
} from "react-router-dom"

// history
import history from "./history"

// Components
import MainApp from './components/app/MainApp/MainApp'

// Private Route to App
// If User is authenticated
const PrivateRoute = ({ auth, ...rest }) => {
  return (
    <Route {...rest} render={props =>
      auth === true
        ? <MainApp {...props} />
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
