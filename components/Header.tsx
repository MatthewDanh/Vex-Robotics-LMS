
import React from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="flex items-center p-4 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
      <div className="w-10 h-10 mr-3">
        <Icon type="logo" />
      </div>
      <h1 className="text-2xl font-black tracking-tighter text-white">
        VEX IQ <span className="text-blue-400">EduHub</span>
      </h1>
    </header>
  );
};

export default Header;
