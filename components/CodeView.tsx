import React from 'react';

const CodeView: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-emerald-400">VEXcode IQ Blocks</h2>
                <p className="text-gray-400 mt-2">
                    Code your VEX IQ robot directly in the official VEXcode platform embedded below.
                </p>
            </div>
            <div className="flex-1 w-full h-[75vh] bg-slate-800 rounded-lg border-2 border-slate-700 shadow-xl overflow-hidden">
                <iframe
                    title="VEXcode IQ"
                    src="https://codeiq.vex.com/"
                    className="w-full h-full"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default CodeView;
