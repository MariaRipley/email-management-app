import React, { useState } from "react";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import apiEmails from "../data/emails.json";
import "../stylesheets/App.css";

function App() {
  const [emails, setEmails] = useState(apiEmails);
  const [inboxFilter, setInboxFilter] = useState("");
  const [showInbox, setShowInbox] = useState(true);

  const handleInboxFilter = () => {
    console.log("App: Me han clickado en Recibidos");
    setShowInbox(true);
  };

  const handleDeleteFilter = () => {
    console.log("App: Me han clickado en Papelera");
    setShowInbox(false);
  };

  const handleTextFilter = (data) => {
    console.log("App: Han escrito en el campo de texto", data.value);
    setInboxFilter(data.value.toLowerCase());
  };

  function renderFilters() {
    const emailType = showInbox ? "recibidos" : "borrados";
    const filterText =
      inboxFilter === "" ? (
        "y sin filtrar"
      ) : (
        <span>
          y filtrando por <span className="text--bold"> {inboxFilter} </span>.
        </span>
      );

    return (
      <p className="mb-1">
        La usuaria está visualizando los emails{" "}
        <span className="text--bold"> {emailType} </span> {""} {filterText}
      </p>
    );
  }

  //Filtered by inbox vs deleted
//   const filteredEmails = emails.filter((email) => {
//     if (showInbox === true) {
//       if (email.deleted === true) {
//         return false;
//       } else {
//         return true;
//       } else {
//         if (email.deleted === true) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//   }
// });

  //   return (
  //     email.fromName.toLowerCase().includes(inboxFilter) ||
  //     email.subject.toLowerCase().includes(inboxFilter) ||
  //     email.body.toLowerCase().includes(inboxFilter)
  //   );

  //Filtered by inboxFilter text

  const renderEmails = () => {
    return filteredEmails.map((email) => {
      return (
        <EmailItem
          key={email.id}
          from={email.fromName}
          subject={email.subject}
          time={email.date}
          read={email.read}
          deleted={email.deleted}
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

      {renderFilters()}

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
