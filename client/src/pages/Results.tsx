

const Results = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Optimization Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-semibold text-slate-500">Coverage</h3>
                    <p className="text-2xl font-bold">85%</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-semibold text-slate-500">Efficiency</h3>
                    <p className="text-2xl font-bold">High</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-semibold text-slate-500">Cost</h3>
                    <p className="text-2xl font-bold">$1.2M</p>
                </div>
            </div>
        </div>
    );
};

export default Results;
