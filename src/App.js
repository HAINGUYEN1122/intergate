import './App.css';
import styled from 'styled-components/macro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './pages/dashboard';
import Header from './pages/header';
import Login from './pages/Login';
import PrivateRoute from './Route/PrivateRoute';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Container className="app">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
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
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: auto;
`;
