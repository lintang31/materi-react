import logo from "./logo.svg";
import "./App.css";
import NavbarCom from "./components/navbar";
// import Intro from "./components/intro";
// import Event from "./components/Event";
import List from "./components/list";
import TesJson from "./page/json";
import Tampilan from "./page/tampilan";

import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Profilee from "./page/Profilee";

function App() {
  return (
    <>
      <NavbarCom />
      <TesJson />
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Tampilan} exact />
            <Route path="/data_diri" component={Profilee} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
