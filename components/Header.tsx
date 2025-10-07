import React from 'react';
import Icon from './Icon';
import { ViewType } from '../types';

interface HeaderProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const navItems: { view: ViewType; label: string; icon: React.ReactNode }[] = [
    { view: 'learn', label: 'Learn', icon: <Icon type="learn" /> },
    { view: 'build', label: 'Build', icon: <Icon type="build" /> },
    { view: 'code', label: 'Code', icon: <Icon type="code" /> },
    { view: 'quiz', label: 'Quiz', icon: <Icon type="quiz" /> },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3">
            <Icon type="logo" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">
            VEX IQ <span className="text-blue-400">EduHub</span>
          </h1>
        </div>

        <nav>
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeView === item.view;
              return (
                <li key={item.view}>
                  <button
                    onClick={() => setActiveView(item.view)}
                    className={`flex items-center gap-2 py-3 border-b-2 transition-all duration-200 font-medium ${
                      isActive
                        ? 'border-blue-500 text-white'
                        : 'border-transparent text-gray-400 hover:border-slate-500 hover:text-white'
                    }`}
                  >
                    <div className="w-5 h-5">{item.icon}</div>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
