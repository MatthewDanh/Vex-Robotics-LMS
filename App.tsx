import React, { useState } from 'react';
import LearnView from './components/LearnView';
import BuildView from './components/BuildView';
import CodeView from './components/CodeView';
import VideosView from './components/VideosView';
import ConceptsView from './components/ConceptsView';
import ClassroomView from './components/ClassroomView';
import Header from './components/Header';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('learn');

  const views: Record<ViewType, React.ReactElement> = {
    learn: <LearnView />,
    build: <BuildView />,
    code: <CodeView />,
    videos: <VideosView />,
    concepts: <ConceptsView />,
    classroom: <ClassroomView />,
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