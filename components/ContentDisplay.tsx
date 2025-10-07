
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ContentDisplayProps {
  title: string;
  content: string;
  isLoading: boolean;
  error: string | null;
  children?: React.ReactNode;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, content, isLoading, error, children }) => {
  const formatContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.trim().startsWith('1.') || paragraph.trim().startsWith('2.') || paragraph.trim().startsWith('3.') || paragraph.trim().startsWith('4.') || paragraph.trim().startsWith('5.') || paragraph.trim().startsWith('Step')) {
        return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
      }
      return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
    });
  };

  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl min-h-[400px]">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b-2 border-slate-600 pb-2">{title}</h2>
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
            <LoadingSpinner />
            <p className="mt-4 text-gray-400">Gemini is thinking...</p>
        </div>
      )}
      {error && <div className="text-red-400 bg-red-900/50 p-4 rounded-md">{error}</div>}
      {!isLoading && !error && content && (
        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-gray-100">
            {formatContent(content)}
        </div>
      )}
       {!isLoading && !error && !content && children}
    </div>
  );
};

export default ContentDisplay;
