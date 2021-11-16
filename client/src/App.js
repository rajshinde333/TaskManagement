import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import PageRoutes from "./components/PageRoutes/PageRoutes.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <PageRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
