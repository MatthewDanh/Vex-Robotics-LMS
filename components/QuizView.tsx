import React, { useState, useCallback } from 'react';
import { QuizQuestion } from '../types';
import { generateQuiz } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

type QuizState = 'not_started' | 'in_progress' | 'finished';

const quizTopics = [
    { sprint: 1, title: "Robotic Fundamentals" },
    { sprint: 2, title: "Robotics with VEX IQ" },
    { sprint: 3, title: "Advanced Robotics with AI Integration" },
    { sprint: 4, title: "3D Modeling" },
    { sprint: 5, title: "Midterm Robotics Project" },
    { sprint: 6, title: "Electrical Engineering with AI insights" },
    { sprint: 7, title: "Electricity II" },
    { sprint: 8, title: "Engineering Design" },
    { sprint: 9, title: "Final Project" },
];

const QuizView: React.FC = () => {
    const [quizState, setQuizState] = useState<QuizState>('not_started');
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const startQuiz = useCallback(async (topic: string) => {
        setIsLoading(true);
        setError(null);
        setSelectedTopic(topic);
        try {
            const quizQuestions = await generateQuiz(topic);
            if (quizQuestions && quizQuestions.length > 0) {
                setQuestions(quizQuestions);
                setQuizState('in_progress');
                setCurrentQuestionIndex(0);
                setScore(0);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setError("Could not load any quiz questions for this topic.");
            }
        } catch (err) {
            setError("Failed to generate the quiz. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }, []);
    
    const handleAnswerSelect = (option: string) => {
        if (selectedAnswer) return; 

        const correct = option === questions[currentQuestionIndex].correctAnswer;
        setSelectedAnswer(option);
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setQuizState('finished');
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setQuizState('not_started');
        setSelectedTopic(null);
        setQuestions([]);
    }

    const renderQuizContent = () => {
        if (isLoading) {
            return (
                <div className="text-center">
                    <LoadingSpinner />
                    <p className="mt-4 text-lg text-gray-300">Generating your quiz for "{selectedTopic}"...</p>
                </div>
            );
        }
        
        if (error) {
            return (
                <div className="text-center">
                    <p className="text-red-400 text-lg mb-4">{error}</p>
                    <button onClick={() => selectedTopic ? startQuiz(selectedTopic) : resetQuiz()} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                        Try Again
                    </button>
                </div>
            )
        }

        switch (quizState) {
            case 'not_started':
                return (
                    <div className="w-full">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2 text-rose-400">Test Your Knowledge!</h2>
                            <p className="text-gray-400 max-w-lg mx-auto">Select a sprint to start the quiz and see how much you've learned.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {quizTopics.map((topic) => (
                                <button
                                    key={topic.sprint}
                                    onClick={() => startQuiz(topic.title)}
                                    className="bg-slate-700 p-4 rounded-lg text-left hover:bg-rose-500/80 hover:scale-105 transition-all duration-200 shadow-md flex flex-col justify-between h-32"
                                >
                                    <span className="text-xs font-bold text-rose-300">Sprint {topic.sprint}</span>
                                    <span className="font-semibold text-gray-100">{topic.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'in_progress':
                const currentQuestion = questions[currentQuestionIndex];
                return (
                    <div>
                        <div className="mb-4">
                           <p className="text-sm font-bold text-rose-400">{selectedTopic}</p>
                           <p className="text-sm font-medium text-gray-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
                        </div>
                        <h3 className="text-2xl font-semibold mb-6">{currentQuestion.question}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentQuestion.options.map((option, index) => {
                                const isSelected = selectedAnswer === option;
                                let buttonClass = "bg-slate-700 hover:bg-slate-600";
                                if (isSelected) {
                                    buttonClass = isCorrect ? "bg-green-600" : "bg-red-600";
                                } else if (selectedAnswer && option === currentQuestion.correctAnswer) {
                                    buttonClass = "bg-green-600/50";
                                }
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(option)}
                                        disabled={!!selectedAnswer}
                                        className={`p-4 rounded-lg text-left transition-all duration-300 w-full ${buttonClass} ${!selectedAnswer ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                );
            case 'finished':
                const percentage = Math.round((score / questions.length) * 100);
                return (
                     <div className="text-center">
                        <h2 className="text-2xl font-bold mb-1 text-rose-400">Quiz Complete!</h2>
                        <p className="text-sm font-semibold text-gray-400 mb-4">{selectedTopic}</p>
                        <p className="text-5xl font-black text-white mb-2">{percentage}%</p>
                        <p className="text-gray-300 text-xl mb-8">You answered {score} out of {questions.length} questions correctly.</p>
                        <button onClick={resetQuiz} className="bg-rose-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-rose-600 transition-transform hover:scale-105 shadow-lg">
                            Choose Another Quiz
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-xl max-w-4xl mx-auto w-full min-h-[400px] flex items-center justify-center">
            {renderQuizContent()}
        </div>
    );
};

export default QuizView;