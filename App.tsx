import React, { useState } from 'react';
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
      <Header activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-8 max-w-7xl mx-auto w-full">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
