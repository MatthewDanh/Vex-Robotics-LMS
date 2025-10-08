import React, { useState } from 'react';
import { conceptTopics } from '../conceptsData';
import { ConceptTopic } from '../types';

const ConceptsView: React.FC = () => {
    const [selectedTopic, setSelectedTopic] = useState<ConceptTopic | null>(conceptTopics[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 text-amber-400">Core Concepts</h2>
                <ul>
                    {conceptTopics.map((topic) => (
                        <li
                            key={topic.id}
                            onClick={() => setSelectedTopic(topic)}
                            className={`p-3 rounded-md cursor-pointer transition-all duration-200 mb-2 ${selectedTopic?.id === topic.id ? 'bg-amber-600/80 text-white font-semibold' : 'hover:bg-slate-700'}`}
                        >
                            {topic.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:col-span-2 bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-xl overflow-y-auto max-h-[80vh]">
                {selectedTopic ? (
                    <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-amber-400 prose-ul:text-gray-300 prose-strong:text-white">
                        <h2 className="text-3xl font-bold mb-6">{selectedTopic.title}</h2>
                        {selectedTopic.content.map((section, index) => (
                            <div key={index} className="mb-6">
                                {section.heading && <h3 className="text-xl font-semibold">{section.heading}</h3>}
                                <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
                                {section.list && (
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        {section.list.map((item, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full min-h-[400px]">
                        <p className="text-gray-400 text-lg text-center">Select a concept from the list to learn more.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConceptsView;