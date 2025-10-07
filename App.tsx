
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import LearnView from './components/LearnView';
import BuildView from './components/BuildView';
import CodeView from './components/CodeView';
import QuizView from './components/QuizView';
import Header from './components/Header';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('learn');

  const renderView = () => {
    switch (activeView) {
      case 'learn':
        return <LearnView />;
      case 'build':
        return <BuildView />;
      case 'code':
        return <CodeView />;
      case 'quiz':
        return <QuizView />;
      default:
        return <LearnView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-gray-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
