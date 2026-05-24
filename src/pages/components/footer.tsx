import React from 'react';
import { Home, Camera, BarChart3, Sparkles } from 'lucide-react';

interface BottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPath, onNavigate }) => {
  const isActive = (path: string) => currentPath.toLowerCase() === path.toLowerCase();

  return (
    <nav className="bottom-nav" aria-label="하단 내비게이션">
      <button className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => onNavigate('/')}>
        <Home size={22} />
        <span className="nav-text">홈</span>
      </button>

      <button className={`nav-item ${isActive('/recommend') ? 'active' : ''}`} onClick={() => onNavigate('/recommend')}>
        <Sparkles size={22} />
        <span className="nav-text">AI 추천</span>
      </button>

      <div className="camera-wrapper">
        <button className="camera-fab" onClick={() => onNavigate('/review')} aria-label="음식 촬영">
          <div className="camera-icon">
            <Camera size={28} strokeWidth={2.5} />
          </div>
        </button>
      </div>

      <button className={`nav-item ${isActive('/statistics') ? 'active' : ''}`} onClick={() => onNavigate('/statistics')}>
        <BarChart3 size={22} />
        <span className="nav-text">통계</span>
      </button>

      <button className={`nav-item ${isActive('/profile') ? 'active' : ''}`} onClick={() => onNavigate('/profile')}>
        <div className="nav-avatar">
          <span>P</span>
        </div>
        <span className="nav-text">내정보</span>
      </button>
    </nav>
  );
};

export default BottomNav;
