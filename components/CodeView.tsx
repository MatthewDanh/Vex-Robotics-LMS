import React from 'react';
import Icon from './Icon';

const CodePlatformCard: React.FC<{ title: string; description: string; url: string; buttonText: string;}> = ({ title, description, url, buttonText }) => {
    return (
        <div className="flex flex-col items-center text-center bg-slate-900/50 p-8 rounded-xl border border-slate-700 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-8 flex-grow">
                {description}
            </p>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-emerald-600 transition-transform hover:scale-105 shadow-md"
            >
                <div className="w-6 h-6">
                   <Icon type="code" />
                </div>
                <span>{buttonText}</span>
            </a>
        </div>
    );
};


const CodeView: React.FC = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center p-4">
             <div className="text-center mb-10">
                <h2 className="text-4xl font-black tracking-tight text-emerald-400">Choose Your Coding Environment</h2>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
                    Select between programming a physical VEX IQ robot or experimenting in a fully virtual environment.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
               <CodePlatformCard 
                    title="VEXcode IQ"
                    description="The official platform for programming your physical VEX IQ robot. Connect directly to your robot's brain to download and run your code."
                    url="https://codeiq.vex.com/"
                    buttonText="Launch VEXcode IQ"
               />
               <CodePlatformCard 
                    title="VEXcode VR"
                    description="A virtual robotics environment where you can code a robot without needing any physical hardware. Perfect for learning concepts and competing."
                    url="https://vr.vex.com/"
                    buttonText="Launch VEXcode VR"
               />
            </div>
        </div>
    );
};

export default CodeView;