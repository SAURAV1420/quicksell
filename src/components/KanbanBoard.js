import React from 'react';
import KanbanColumn from './KanbanColumn';
import './styles/KanbanBoard.css';

const groupTickets = (tickets, groupBy, users) => {
  // Create a dictionary to map userId to user name
  const userMap = users.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  // Group tickets based on selected criteria, using the user's name if grouped by 'user'
  return tickets.reduce((groups, ticket) => {
    let groupKey;

    if (groupBy === 'user' && ticket.userId) {
      // Get user's name from userMap
      groupKey = userMap[ticket.userId] || 'Unknown User';
    } else {
      groupKey = ticket[groupBy] || 'No Group';
    }

    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(ticket);

    return groups;
  }, {});
};


const sortTickets = (tickets, sortBy) => {
  return [...tickets].sort((a, b) => {
    if (sortBy === 'priority') return b.priority - a.priority;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });
};

const KanbanBoard = ({ tickets, groupBy, sortBy, users }) => {
  const groupedTickets = groupTickets(tickets, groupBy, users);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <KanbanColumn
          key={groupKey}
          title={groupKey}
          tickets={sortTickets(groupedTickets[groupKey], sortBy)}
          users = {users}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
