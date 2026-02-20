

import { OptimizeMap } from '../components/map/OptimizeMap';
import { OptimizeForm } from '../components/optimize/OptimizeForm';
import { AnalyticsPanel } from '../components/optimize/AnalyticsPanel';

const Optimize = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-1 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <h2 className="text-xl font-semibold mb-4 text-slate-800">Configuration</h2>
                <OptimizeForm />
                <AnalyticsPanel />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2 h-[600px]">
                <h2 className="text-xl font-semibold mb-4">Map View</h2>
                <OptimizeMap />
            </div>
        </div>
    );
};

export default Optimize;
