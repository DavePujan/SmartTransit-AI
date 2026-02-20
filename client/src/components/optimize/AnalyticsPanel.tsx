import React, { useState } from 'react';
import { useMapStore } from '../../store/useStore';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const chartData = [
    { time: '06:00', utilization: 40 },
    { time: '08:00', utilization: 85 },
    { time: '10:00', utilization: 65 },
    { time: '12:00', utilization: 50 },
    { time: '14:00', utilization: 60 },
    { time: '17:00', utilization: 90 },
    { time: '20:00', utilization: 45 },
];

export const AnalyticsPanel: React.FC = () => {
    const { optimizationResult, saveScenario, boundary } = useMapStore();
    const [saved, setSaved] = useState(false);

    if (!optimizationResult || !optimizationResult.metrics) {
        return null;
    }

    const handleSave = () => {
        const scenario = {
            id: Date.now(),
            date: new Date().toISOString(),
            metrics: optimizationResult.metrics,
            boundary,
            result: optimizationResult
        };
        saveScenario(scenario);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const { metrics } = optimizationResult;

    return (
        <div className="mt-6 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Deployment Metrics</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 mb-1">Total Distance</p>
                    <p className="text-2xl font-bold text-blue-900">{metrics.total_km} km</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-green-600 mb-1">Avg Wait Time</p>
                    <p className="text-2xl font-bold text-green-900">{metrics.avg_wait_time} min</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-purple-600 mb-1">Utilization</p>
                    <p className="text-2xl font-bold text-purple-900">{metrics.utilization_rate}%</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-orange-600 mb-1">Coverage</p>
                    <p className="text-2xl font-bold text-orange-900">{metrics.coverage_percent}%</p>
                </div>
            </div>

            <div className="h-48 w-full mt-4">
                <p className="text-sm font-medium mb-2 text-slate-600">Estimated Utilization Timeline</p>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis hide />
                        <Tooltip />
                        <Area type="monotone" dataKey="utilization" stroke="#3b82f6" fill="#bfdbfe" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <button
                onClick={handleSave}
                disabled={saved}
                className={`mt-6 w-full py-2 px-4 rounded font-semibold text-white transition ${saved ? 'bg-green-500' : 'bg-slate-800 hover:bg-slate-900'
                    }`}
            >
                {saved ? 'Saved!' : 'Save Scenario'}
            </button>
        </div>
    );
};
