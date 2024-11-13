import React from 'react';
import KanbanCard from './KanbanCard';
import './styles/KanbanColumn.css';

// Import SVG icons from the assets folder
import todoIcon from '../assets/To-do.svg';
import inProgressIcon from '../assets/in-progress.svg';
import doneIcon from '../assets/Done.svg';
import addIcon from '../assets/add.svg';
import moreIcon from '../assets/addMore.svg';
import backlogIcon from '../assets/Backlog.svg'
import cancelledIcon from '../assets/Cancelled.svg'
import lowPriorityIcon from '../assets/lowPriority.svg'
import mediumPriorityIcon from '../assets/mediumPriority.svg'
import highPriorityIcon from '../assets/highPriority.svg'
import urgentPriorityIcon from '../assets/urgentPriorityColor.svg'
import noPriorityIcon from '../assets/noPriority.svg'
import ProfileIcon from './ProfileIcon';
const iconMap = {
  "Todo": todoIcon,
  "In progress": inProgressIcon,
  "Backlog": backlogIcon,
  "Cancelled": cancelledIcon,
  "Done": doneIcon,
  "1": lowPriorityIcon,
  "2": mediumPriorityIcon,
  "3": highPriorityIcon,
  "4": urgentPriorityIcon,
  "No Group": noPriorityIcon
};

const KanbanColumn = ({ title, tickets, users }) => {
  const user = users.find(user => user.name === title); 
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <div className="title-container">
          
          <div>
            {(user && <ProfileIcon name={user.name} available={user.available}/>) || <img src={iconMap[title]} alt={`${title} icon`} className="column-icon" />}
          </div>
          <h4>{title} </h4>  <span style={{marginLeft: "1em"}}>{tickets.length}</span>
        </div>
        <div className="header-icons">
          <img src={addIcon} alt="Add" className="action-icon" />
          <img src={moreIcon} alt="More options" className="action-icon" />
        </div>
      </div>
      {tickets.map(ticket => (
        <KanbanCard key={ticket.id} ticket={ticket} users = {users}/>
      ))}
    </div>
  );
};

export default KanbanColumn;
