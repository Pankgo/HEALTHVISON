import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header-bar">
      <h1 className="header-title">{title}</h1>
      <button className="header-action" aria-label="알림">
        <Bell size={20} />
        <span className="notification-dot" />
      </button>
    </header>
  );
};

export default Header;
