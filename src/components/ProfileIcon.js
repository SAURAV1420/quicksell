import React from 'react';
import './styles/ProfileIcon.css';

const ProfileIcon = ({ name, available }) => {
  const initial = name ? name.charAt(0).toUpperCase() : 'U';

  return (
    <div className="profile-icon-container">
      <div className="profile-icon">
        {initial}
      </div>
      <span className={`status-dot ${available ? 'online' : 'offline'}`}></span>
    </div>
  );
};

export default ProfileIcon;
