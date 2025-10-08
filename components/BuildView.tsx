
import React, { useState } from 'react';
import ContentDisplay from './ContentDisplay';

// Define the structure for a build topic
interface BuildTopic {
  name: string;
  embedId: string;
}

// Define a structure for build categories
interface BuildCategory {
  title: string;
  topics: BuildTopic[];
}

// Updated data structure with categories
const buildData: BuildCategory[] = [
  {
    title: "Robot Builds",
    topics: [
      { name: "Basebot 2.0", embedId: "4093-VEX_IQ_Basebot_2.0" },
      { name: "Basebot with Sensors 2.0", embedId: "4093-VEX_IQ_Basebot_with_sensors_2.0" },
      { name: "Clawbot 2.0", embedId: "4063-iq_clawbot_2.0" },
      { name: "Clawbot with Sensors", embedId: "4063-iq_clawbot_with_sensors" },
      { name: "Simple Clawbot 2.0", embedId: "4093-VEX_IQ_Simple_Clawbot_2.0" },
      { name: "Speed Bot", embedId: "4090-iqg2%20speed" },
    ],
  },
  {
    title: "IQ Mechanisms",
    topics: [
        { name: "Fork", embedId: "4063-IQ_activity_series-fork" },
        { name: "Spatula", embedId: "4063-IQ_activity_series-spatula" },
        { name: "Fork & Spatula", embedId: "4063-iq_activity_series-spatula_fork" },
        { name: "Wheel Grabber", embedId: "4063-iq_activity_series-wheel_grabber" },
        { name: "Plow", embedId: "4063-IQ_activity_series-plow" },
    ],
  },
];


const BuildView: React.FC = () => {
    const [selectedBuild, setSelectedBuild] = useState<BuildTopic | null>(null);

    const handleTopicSelect = (topic: BuildTopic) => {
        setSelectedBuild(topic);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Build Guides</h2>
                {buildData.map((category) => (
                    <div key={category.title} className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-300 mb-2 border-b border-slate-600 pb-1">{category.title}</h3>
                        <ul>
                            {category.topics.map((topic, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleTopicSelect(topic)}
                                    className={`p-3 rounded-md cursor-pointer transition-all duration-200 mb-2 ${selectedBuild?.name === topic.name ? 'bg-fuchsia-600 text-white font-semibold' : 'hover:bg-slate-700'}`}
                                >
                                    {topic.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="md:col-span-2">
                <ContentDisplay 
                    title={selectedBuild?.name || "Select a Build Guide"} 
                    content=""
                    isLoading={false} 
                    error={null}>
                    {selectedBuild ? (
                        <div className="w-full h-[600px] rounded-lg overflow-hidden border-2 border-slate-600 bg-gray-900">
                            <iframe
                                title={selectedBuild.name}
                                src={`https://instructions.online/?id=${selectedBuild.embedId}`}
                                className="w-full h-full"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full min-h-[300px]">
                            <p className="text-gray-400 text-lg">Choose a guide from the left to view the 3D model.</p>
                        </div>
                    )}
                </ContentDisplay>
            </div>
        </div>
    );
};

export default BuildView;