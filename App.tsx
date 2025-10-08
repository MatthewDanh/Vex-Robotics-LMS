import React, { useState } from 'react';
import LearnView from './components/LearnView';
import BuildView from './components/BuildView';
import CodeView from './components/CodeView';
import QuizView from './components/QuizView';
import ConceptsView from './components/ConceptsView';
import Header from './components/Header';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('learn');

  const views: Record<ViewType, React.ReactElement> = {
    learn: <LearnView />,
    build: <BuildView />,
    code: <CodeView />,
    quiz: <QuizView />,
    concepts: <ConceptsView />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-gray-900">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-8 max-w-7xl mx-auto w-full">
          {views[activeView] ?? <LearnView />}
        </main>
      </div>
    </div>
  );
};

export default App;
