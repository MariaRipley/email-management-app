import React from "react";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import "../stylesheets/App.css";

function App() {
  return (
    <div>
      <Header />

      <table className="table">
        <tbody>
          <EmailItem
            from="Front Fest"
            subject="Entradas ya a la venta"
            time="15:27"
          />

          <EmailItem
            from="GitHub"
            subject="Adalab/project-promo-i Local store #23"
            time="13:51"
          />

          <EmailItem from="Node Weekly" subject="Node News" time="20:41" />
        </tbody>
      </table>

      <EmailReader />
    </div>
  );
}

export default App;
