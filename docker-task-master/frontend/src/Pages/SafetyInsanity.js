import React, { useState, useEffect } from "react";

import UserService from "../Services/UserService";
import EventBus from "../Services/EventBus";

const SafetyInsanity = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUsers().then(
      (response) => {
        setContent(response.data.message);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default SafetyInsanity;
