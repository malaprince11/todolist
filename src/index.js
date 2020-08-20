import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Todo from "./components/Todo";

ReactDOM.render(
<BrowserRouter>

<App />
<Todo />
</BrowserRouter>,
document.getElementById("root"));
