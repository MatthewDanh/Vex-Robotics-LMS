
import React from 'react';
import { ViewType } from '../types';
import Icon from './Icon';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const NavItem: React.FC<{
  view: ViewType;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ view, label, icon, isActive, onClick }) => {
  return (
    <li
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-400 hover:bg-slate-700 hover:text-white'
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 mr-3">{icon}</div>
      <span className="font-medium">{label}</span>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems: { view: ViewType; label: string; icon: React.ReactNode }[] = [
    { view: 'learn', label: 'Learn', icon: <Icon type="learn" /> },
    { view: 'build', label: 'Build', icon: <Icon type="build" /> },
    { view: 'code', label: 'Code', icon: <Icon type="code" /> },
    { view: 'quiz', label: 'Quiz', icon: <Icon type="quiz" /> },
  ];

  return (
    <aside className="w-64 bg-slate-800 p-4 border-r border-slate-700 flex-shrink-0">
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavItem
              key={item.view}
              view={item.view}
              label={item.label}
              icon={item.icon}
              isActive={activeView === item.view}
              onClick={() => setActiveView(item.view)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
