import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <div>
    {mailboxes.map((mailbox) => (
      <div className="mail-box" key={mailbox._id}>
        <Link to={`/mailboxes/${mailbox._id}`}>Box #{mailbox._id}</Link>
      </div>
    ))}
  </div>
);

export default MailboxList;
