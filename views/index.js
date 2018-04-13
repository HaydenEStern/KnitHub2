import React from "react";
import ReactDOM from "react-dom";

const Footer = () => (
  <footer>
    <hr />
    <p className="pull-right">
      <i className="fa fa-github" aria-hidden="true" /> Knithub c Hayden Stern 2018
    </p>
  </footer>
);




ReactDOM.render(<Footer />, document.getElementById("root"));
