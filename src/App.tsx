import * as React from "react";
import Home from "pages/Home";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
