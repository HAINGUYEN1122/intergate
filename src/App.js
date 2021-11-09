import './App.css';
import styled from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import retsetpass from './pages/resetPass';
import DashBoard from './pages/dashboard';
import Header from './pages/header';
import Login from './pages/Login';
import Verification3 from './pages/Verification3';
import Verification from './pages/Verification';
import PrivateRoute from './Route/PrivateRoute';
import PageNotFound from './pages/PageNotFound';
import Forgotpassword from './pages/Forgotpassword';

function App() {
  return (
    <Container className="app">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={Forgotpassword} />
          <Route path="/verification" component={Verification} />
          <Route path="/newpassword" component={retsetpass} />
          <Route path="/verification3" component={Verification3} />
          <Header>
            <Content>
              <Switch>
                <PrivateRoute exact path="/dashboard" component={DashBoard} />
                <PrivateRoute exact path="/" topath="/dashboard" />
                <PrivateRoute component={PageNotFound} />
              </Switch>
            </Content>
          </Header>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  flex: auto;
`;
