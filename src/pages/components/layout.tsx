import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNav from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const hideBottomNavPaths = ['/signup'];
  const shouldHide = hideBottomNavPaths.includes(location.pathname);

  return (
    <div className="layout-container">
      <div className={`layout-scroll ${shouldHide ? 'fullscreen' : 'with-bottom-nav'}`}>
        {children}
      </div>

      {!shouldHide && (
        <BottomNav 
          currentPath={location.pathname} 
          onNavigate={(path: string) => navigate(path)} 
        />
      )}
    </div>
  );
};

export default Layout;
