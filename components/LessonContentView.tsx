import React from 'react';
import { LessonContent } from '../types';

interface LessonContentViewProps {
  content: LessonContent;
  videoId?: string;
}

const LessonContentView: React.FC<LessonContentViewProps> = ({ content, videoId }) => {
  return (
    <div className="text-gray-300">
      {videoId && (
        <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-slate-600 bg-gray-900 mb-6">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Sprint Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
      )}
      <h1 className="text-3xl font-black text-cyan-300 mb-2">{content.title}</h1>
      {content.subtitle && <h2 className="text-xl font-bold text-gray-300 mb-6">{content.subtitle}</h2>}
      <p className="text-gray-400 mb-8 leading-relaxed">{content.description}</p>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 border-b-2 border-slate-600 pb-2">Step by Step</h3>
        <ol className="list-decimal list-inside space-y-4 text-gray-300 leading-relaxed">
          {content.stepByStep.map((step, index) => <li key={index} dangerouslySetInnerHTML={{ __html: step }}></li>)}
        </ol>
      </div>

      {content.codeSnippet && (
        <div className="my-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-2">Example Code:</h4>
            <pre className="bg-slate-900 text-sm text-cyan-300 p-4 rounded-md overflow-x-auto">
                <code>{content.codeSnippet.code}</code>
            </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-lime-400 mb-3">{content.levelUp.title}</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-400">
            {content.levelUp.points.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-amber-400 mb-3">{content.proTips.title}</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-400">
            {content.proTips.points.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </div>
      </div>
      
      {content.standards && (
        <div className="mt-8 pt-4 border-t border-slate-700">
            <h4 className="font-semibold text-gray-400">Standards:</h4>
            <p className="text-sm text-gray-500 mt-1">{content.standards}</p>
        </div>
      )}
    </div>
  );
};

export default LessonContentView;