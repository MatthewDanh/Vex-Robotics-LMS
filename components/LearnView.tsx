import React, { useState, useCallback, useMemo, useEffect } from 'react';
import ContentDisplay from './ContentDisplay';
import { generateContent } from '../services/geminiService';
import { Lesson } from '../types';
import LoadingSpinner from './LoadingSpinner';
import { curriculum } from '../curriculumData';

const LessonList: React.FC<{
    lessons: Lesson[];
    selectedLesson: Lesson | null;
    onClick: (lesson: Lesson) => void;
}> = ({ lessons, selectedLesson, onClick }) => (
    <ul>
        {lessons.map((lesson, index) => (
            <li
                key={`${lesson.title}-${index}`}
                onClick={() => onClick(lesson)}
                className={`p-3 rounded-md cursor-pointer transition-all duration-200 mb-2 ${selectedLesson?.title === lesson.title ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-slate-700'}`}
            >
                {lesson.title}
            </li>
        ))}
    </ul>
);

const LearnView: React.FC = () => {
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [elaboration, setElaboration] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleLessonClick = (lesson: Lesson) => {
        setSelectedLesson(lesson);
        setElaboration('');
        setError(null);
    }

    const fetchElaboration = useCallback(async () => {
        if (!selectedLesson) return;

        setIsLoading(true);
        setError(null);
        setElaboration('');

        const prompt = `In simple terms for a 10-year-old, please elaborate on the VEX IQ lesson: "${selectedLesson.title}". Specifically explain the key concepts: ${selectedLesson.concepts.join(', ')}. Use analogies and provide a simple, practical example of how a robot would use these concepts.`;

        try {
            const content = await generateContent(prompt);
            setElaboration(content);
        } catch (err) {
            setError('Failed to fetch the AI elaboration. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedLesson]);

    const filteredCurriculum = useMemo(() => {
        if (!debouncedSearchTerm) {
            return curriculum;
        }
        return curriculum.filter(lesson =>
            lesson.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            lesson.concepts.some(concept => concept.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
        );
    }, [debouncedSearchTerm]);

    const pacingGuideLessons = filteredCurriculum.filter(item => item.type === 'Lesson');
    const activityLessons = filteredCurriculum.filter(item => item.type === 'Activity');

    const beginnerPacing = pacingGuideLessons.filter(l => l.level === 'Beginner');
    const intermediatePacing = pacingGuideLessons.filter(l => l.level === 'Intermediate');
    const beginnerActivities = activityLessons.filter(l => l.level === 'Beginner');
    const intermediateActivities = activityLessons.filter(l => l.level === 'Intermediate');

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Curriculum</h2>
                
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search lessons..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                
                {filteredCurriculum.length === 0 && (
                    <p className="text-center text-gray-400 mt-6">No lessons found matching your search.</p>
                )}

                {pacingGuideLessons.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-300 my-2">Pacing Guide</h3>
                        {beginnerPacing.length > 0 && (
                            <>
                                <h4 className="text-md font-medium text-gray-400 mt-2 mb-1 pl-2">Beginner</h4>
                                <LessonList lessons={beginnerPacing} selectedLesson={selectedLesson} onClick={handleLessonClick} />
                            </>
                        )}
                        {intermediatePacing.length > 0 && (
                            <>
                                <h4 className="text-md font-medium text-gray-400 mt-4 mb-1 pl-2">Intermediate</h4>
                                <LessonList lessons={intermediatePacing} selectedLesson={selectedLesson} onClick={handleLessonClick} />
                            </>
                        )}
                    </div>
                )}
                
                {activityLessons.length > 0 && (
                    <div>
                        <h3 className="text-xl font-semibold text-gray-300 my-2 pt-4 border-t border-slate-600">Activities</h3>
                        {beginnerActivities.length > 0 && (
                            <>
                                <h4 className="text-md font-medium text-gray-400 mt-2 mb-1 pl-2">Beginner</h4>
                                <LessonList lessons={beginnerActivities} selectedLesson={selectedLesson} onClick={handleLessonClick} />
                            </>
                        )}
                        {intermediateActivities.length > 0 && (
                            <>
                                <h4 className="text-md font-medium text-gray-400 mt-4 mb-1 pl-2">Intermediate</h4>
                                <LessonList lessons={intermediateActivities} selectedLesson={selectedLesson} onClick={handleLessonClick} />
                            </>
                        )}
                    </div>
                )}
            </div>
            <div className="md:col-span-2">
                <ContentDisplay 
                    title={selectedLesson?.title || "Select a Lesson"} 
                    content=""
                    isLoading={false} 
                    error={null}
                >
                    {selectedLesson ? (
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${selectedLesson.level === 'Beginner' ? 'bg-green-600/30 text-green-300' : 'bg-yellow-600/30 text-yellow-300'}`}>{selectedLesson.level}</span>
                                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-slate-700 text-gray-300">{selectedLesson.type}</span>
                            </div>
                            <p className="mb-4 text-gray-300">{selectedLesson.description}</p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-100 mb-2">Key Concepts:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedLesson.concepts.map(c => <span key={c} className="bg-slate-700 px-2.5 py-1 text-xs font-medium rounded-md text-gray-300">{c}</span>)}
                                </div>
                            </div>

                            <button onClick={fetchElaboration} disabled={isLoading} className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed">
                                {isLoading ? 'Thinking...' : 'Elaborate with AI'}
                            </button>

                            {isLoading && (
                                <div className="flex items-center justify-center mt-6 p-4 bg-slate-900/50 rounded-lg">
                                    <LoadingSpinner />
                                </div>
                            )}
                            {error && <div className="mt-6 text-red-400 bg-red-900/50 p-4 rounded-md">{error}</div>}
                            {elaboration && (
                                <div className="mt-6 pt-6 border-t border-slate-700">
                                     <h3 className="text-2xl font-bold text-blue-300 mb-4">AI Deep Dive</h3>
                                     <div className="prose prose-invert max-w-none prose-p:text-gray-300">
                                        {elaboration.split('\n').map((p, i) => <p key={i}>{p}</p>)}
                                     </div>
                                </div>
                            )}

                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full min-h-[300px]">
                            <p className="text-gray-400 text-lg">Please select a lesson from the left to start learning!</p>
                        </div>
                    )}
                </ContentDisplay>
            </div>
        </div>
    );
};

export default LearnView;