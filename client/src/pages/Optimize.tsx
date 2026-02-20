

const Optimize = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Configuration</h2>
                {/* Form components will go here */}
                <p>Select City and Parameters...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm h-96">
                <h2 className="text-xl font-semibold mb-4">Map View</h2>
                {/* Map component will go here */}
                <div className="bg-slate-100 w-full h-full rounded flex items-center justify-center">
                    Map Placeholder
                </div>
            </div>
        </div>
    );
};

export default Optimize;
