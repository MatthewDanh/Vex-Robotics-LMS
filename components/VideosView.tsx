import React, { useState } from 'react';
import { videoData } from '../videoData';
import { Video } from '../types';

const VideosView: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Video Library</h2>
                {videoData.map((category) => (
                    <div key={category.title} className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-300 mb-2 border-b border-slate-600 pb-1">{category.title}</h3>
                        <ul>
                            {category.videos.map((video, index) => (
                                <li
                                    key={index}
                                    onClick={() => setSelectedVideo(video)}
                                    className={`p-3 rounded-md cursor-pointer transition-all duration-200 mb-2 ${selectedVideo?.videoId === video.videoId ? 'bg-cyan-600 text-white font-semibold' : 'hover:bg-slate-700'}`}
                                >
                                    {video.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="md:col-span-2 bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl">
                {selectedVideo ? (
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-cyan-300">{selectedVideo.title}</h2>
                         <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-slate-600 bg-gray-900 mb-4">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-gray-400">{selectedVideo.description}</p>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full min-h-[400px]">
                        <p className="text-gray-400 text-lg text-center">Select a video from the library to watch it here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideosView;
