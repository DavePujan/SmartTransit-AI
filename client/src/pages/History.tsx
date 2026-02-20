import React from 'react';
import { useMapStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const { scenarios, setOptimizationResult, setBoundary } = useMapStore();
    const navigate = useNavigate();

    const handleLoad = (scenario: any) => {
        setBoundary(scenario.boundary);
        setOptimizationResult(scenario.result);
        navigate('/optimize');
    };

    return (
        <div className="p-8 bg-slate-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">Saved Scenarios</h1>
            {scenarios.length === 0 ? (
                <p className="text-slate-500">No scenarios saved yet. Go to Optimize page to run a simulation.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {scenarios.map((scenario: any) => (
                        <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="font-semibold text-lg mb-2 text-slate-700">Scenario {new Date(scenario.date).toLocaleDateString()}</h3>
                            <p className="text-sm text-slate-500 mb-4">{new Date(scenario.date).toLocaleTimeString()}</p>

                            <div className="grid grid-cols-2 gap-2 mb-6">
                                <div className="bg-slate-100 p-2 rounded">
                                    <p className="text-xs text-slate-500">Distance</p>
                                    <p className="font-semibold text-slate-800">{scenario.metrics.total_km} km</p>
                                </div>
                                <div className="bg-slate-100 p-2 rounded">
                                    <p className="text-xs text-slate-500">Coverage</p>
                                    <p className="font-semibold text-slate-800">{scenario.metrics.coverage_percent}%</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleLoad(scenario)}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition"
                            >
                                Load Scenario
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
