import React from 'react';
import Icon from './Icon';

const ClassroomView: React.FC = () => {
    const classroomUrl = "https://classroom.google.com/c/NzkxMTc2MTUxNDcz?cjc=lh6q3mjs";
    const classCode = "lh6q3mjs";

    return (
        <div className="flex flex-col h-full items-center justify-center p-4">
             <div className="text-center mb-10">
                <h2 className="text-4xl font-black tracking-tight text-green-400">Google Classroom</h2>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
                    All course assignments, announcements, and resources are managed through our Google Classroom. Use the button below to access the class page directly.
                </p>
            </div>
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center text-center bg-slate-900/50 p-8 rounded-xl border border-slate-700 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 mb-4 text-green-400">
                        <Icon type="classroom" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">VEX IQ EduHub Class</h3>
                    <p className="text-gray-400 mb-2">Join our class to stay up-to-date.</p>
                    <div className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 my-4">
                        <span className="text-gray-400 text-sm">Class Code: </span>
                        <span className="text-white font-mono text-lg tracking-widest">{classCode}</span>
                    </div>
                    <a
                        href={classroomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition-transform hover:scale-105 shadow-md mt-4"
                    >
                        <span>Open Google Classroom</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClassroomView;