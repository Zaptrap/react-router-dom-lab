// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (boxData) => {
    const newBox = { _id: mailboxes.length + 1, ...boxData };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
