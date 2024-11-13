import React from 'react';
import './styles/KanbanCard.css';
import ProfileIcon from './ProfileIcon'; // Import the ProfileIcon component

const KanbanCard = ({ ticket, users }) => {
  // Find the user associated with the ticket
  const user = users.find(user => user.id === ticket.userId);

  return (
    <div className="kanban-card">
      <span className="ticket-id muted">{ticket.id}</span>
      <h4>{ticket.title}</h4>
      <p>{ticket.description}</p>
      <span className="ticket-tag muted">{ticket.tag}</span>

      {/* Profile icon on the right side */}
      <div className="user-profile">
        {user && <ProfileIcon name={user.name} available={user.available} />}
      </div>
    </div>
  );
};

export default KanbanCard;
