import React, { useState } from "react";

function EmailReader(props) {
  const [forceUpdate, setForceUptate] = useState(false);

  const handleClick = () => {
    setForceUptate(!forceUpdate);
  };

  return (
    <div>
      <div className="col2 mt-1 pt-1">
        <div>
          <h2 className="title--meidum">{props.subject}</h2>
          <h3 className="title--small">
            <span className="text--bold display-inline-block mr-1">
              {this.props.fromName}
            </span>
            <span className="text-normal display-inline-block">
              &lt;{this.props.fromEmail}&gt;
            </span>
          </h3>
        </div>
        <div className="text-align-right">
          <a href="./">
            <button className="fas fa-times-circle form__btn"></button>
          </a>
          <a href="./">
            <button className="fas fa-trash form__btn"></button>
          </a>
        </div>
      </div>

      <p>{props.body}</p>

      <div className="mt-1">
        <button className="form__btn" onClick={handleClick}>
          <span className="fas fa-reply"></span>
          Responder
        </button>

        <button className="form__btn" onClick={handleClick}>
          <span className="fas fa-reply-all"></span>
          Responder a todos
        </button>

        <button className="form__btn" onClick={handleClick}>
          <span className="fas fa-share"></span>
          Reenviar a todos
        </button>
      </div>
    </div>
  );
}

export default EmailReader;
