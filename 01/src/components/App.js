import React from "react";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import emails from '../data/emails.json';
import "../stylesheets/App.css";

const renderEmails = () => {
  return emails.map((email) => {
    return (
      <EmailItem
        key={email.id}
        from={email.fromName}
        subject={email.subject}
        time={email.date}
      />
    );
  });
};

const renderEmailReader = () => {
  return emails.map((email) => {
    return (
      <EmailReader 
        key={email.id}
        subject={email.subject}
        fromName={email.fromName}
        fromEmail={email.fromEmail}
        body={email.body}/>
    )
  })
}

function App() {
  return (
    <div>
      <Header />

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      <div>{renderEmailReader()}</div>
      
    </div>
  );
}

export default App;
