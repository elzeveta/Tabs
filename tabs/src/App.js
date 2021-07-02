import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./components/History";
import Goals from "./components/Goals";
import Vision from "./components/Vision";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="main-image">
            <img
              src="https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg"
              alt="images"
            />
          </div>
          <div className="main">
            <Navbar />
            <Switch>
              <Route exact path="/" component={History} />
              <Route path="/vision" component={Vision} />
              <Route path="/goals" component={Goals} />
              <Route />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
