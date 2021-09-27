import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Alert from "./components/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";
import TextForm from "./components/TextForm/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = (e) => {
    e.preventDefault();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2f3542";
      displayAlert("Dark mode enabled", "light");
      setTimeout(() => {
        document.title = "TF Changer | Dark";
      }, 1000);
      setTimeout(() => {
        document.title = "Text Formation Changer";
      }, 3500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      displayAlert("Light mode enabled", "dark");
      setTimeout(() => {
        document.title = "TF Changer | Light";
      }, 1000);
      setTimeout(() => {
        document.title = "Text Formation Changer";
      }, 3500);
    }
  };
  return (
    <Router>
      <Navbar aboutText="About this App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
          <TextForm
            heading="Enter the text to analyze"
            mode={mode}
            alert={alert}
            displayAlert={displayAlert}
          />
        </Route>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
