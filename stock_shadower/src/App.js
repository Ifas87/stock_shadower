import './App.css';
import Container from "./components/Container/Container"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Adder from './components/Adder/Adder';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Container></Container>
        </Route>

        <Route path="/add">
          <Adder></Adder>
        </Route>

        <Route>
          
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
