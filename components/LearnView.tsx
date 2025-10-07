import React, { useState, useMemo } from 'react';
import { Lesson } from '../types';
import { curriculum } from '../curriculumData';

const sprintTopics = [
    { sprint: 1, title: "Robotic Fundamentals" },
    { sprint: 2, title: "Intro to VEX IQ & Building" },
    { sprint: 3, title: "Intro to Coding & Control" },
    { sprint: 4, title: "Sensors & Simple Logic" },
    { sprint: 5, title: "Midterm Project: Object Manipulation" },
    { sprint: 6, title: "Advanced Sensors & Logic" },
    { sprint: 7, title: "Mechanisms & Physics" },
    { sprint: 8, title: "Engineering Design & Advanced Navigation" },
    { sprint: 9, title: "Final Projects & Creative Applications" },
];

const LearnView: React.FC = () => {
    const [selectedSprint, setSelectedSprint] = useState<number | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    const lessonsBySprint = useMemo(() => {
        return curriculum.reduce((acc, lesson) => {
            (acc[lesson.sprint] = acc[lesson.sprint] || []).push(lesson);
            return acc;
        }, {} as Record<number, Lesson[]>);
    }, []);

    const handleSprintSelect = (sprint: number) => {
        setSelectedSprint(sprint);
        setSelectedLesson(null); // Reset lesson selection when changing sprints
    };
    
    const handleBackToSprints = () => {
        setSelectedSprint(null);
        setSelectedLesson(null);
    };

    const renderSprintSelection = () => (
        <div className="md:col-span-3">
             <div className="text-center mb-10">
                <h2 className="text-4xl font-black tracking-tight text-blue-400">Curriculum Sprints</h2>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
                    Select a sprint to begin your learning journey, from fundamentals to advanced projects.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sprintTopics.map((sprint) => (
                    <div
                        key={sprint.sprint}
                        onClick={() => handleSprintSelect(sprint.sprint)}
                        className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-lg cursor-pointer transform hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <p className="font-bold text-sm text-blue-400 mb-1">Sprint {sprint.sprint}</p>
                            <h3 className="text-xl font-bold text-white">{sprint.title}</h3>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">{lessonsBySprint[sprint.sprint]?.length || 0} Lessons</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderLessonGrid = () => {
        const sprintTitle = sprintTopics.find(s => s.sprint === selectedSprint)?.title || '';
        const lessons = lessonsBySprint[selectedSprint!] || [];
        return (
            <>
                <div className="md:col-span-1 bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl max-h-[80vh] overflow-y-auto">
                    <button
                        onClick={handleBackToSprints}
                        className="text-blue-400 hover:text-blue-300 font-semibold mb-4"
                    >
                        &larr; Back to Sprints
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">{sprintTitle}</h2>
                    <div className="grid grid-cols-1 gap-2">
                        {lessons.map((lesson, index) => (
                           <div
                                key={`${lesson.title}-${index}`}
                                onClick={() => setSelectedLesson(lesson)}
                                className={`p-3 rounded-md cursor-pointer transition-all duration-200 ${selectedLesson?.title === lesson.title ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-slate-700'}`}
                            >
                                {lesson.title}
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="md:col-span-2 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl overflow-hidden">
                    {selectedLesson && selectedLesson.pdfUrl ? (
                         <iframe
                            key={selectedLesson.pdfUrl}
                            src={selectedLesson.pdfUrl}
                            title={selectedLesson.title}
                            className="w-full h-full min-h-[75vh]"
                            frameBorder="0"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full min-h-[300px] p-6">
                            <p className="text-gray-400 text-lg text-center">Please select a lesson from the list to view its PDF.</p>
                        </div>
                    )}
                </div>
            </>
        )
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedSprint === null ? renderSprintSelection() : renderLessonGrid()}
        </div>
    );
};

export default LearnView;