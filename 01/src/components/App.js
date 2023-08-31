import React, {useState} from "react";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import apiEmails from "../data/emails.json";
import "../stylesheets/App.css";

function App() {
  const [emails, setEmails] = useState(apiEmails);
  const [inboxFilter, setInboxFilter] = useState('');

  const handleInboxFilter = () => {
    console.log("App: Me han clickado en Recibidos");
  };

  const handleDeleteFilter = () => {
    console.log("App: Me han clickado en Papelera");
  };

  const handleTextFilter = data => {
    console.log("App: Han escrito en el campo de texto", data.value);
    setInboxFilter(data.value.toLowerCase());
  };

  const filteredEmails = emails.filter((email) => {
    return (
      email.fromName.toLowerCase().includes(inboxFilter) ||
      email.subject.toLowerCase().includes(inboxFilter) ||
      email.body.toLowerCase().includes(inboxFilter)
    )
  });

  const renderEmails = () => {
    return filteredEmails.map((email) => {
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

  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      />

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      <EmailReader
        fromName={emails[0].fromName}
        fromEmail={emails[0].fromEmail}
        subject={emails[0].subject}
        body={emails[0].body}
      />

    </div>
  );
}

export default App;
