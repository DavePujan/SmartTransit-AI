
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh]">
            <h1 className="text-4xl font-bold mb-4">Welcome to Smart Transit AI</h1>
            <p className="text-xl text-slate-600 mb-8">
                Optimize your city's public transit network with AI-driven insights.
            </p>
            <Link 
                to="/optimize" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Start Optimization
            </Link>
        </div>
    );
};

export default Home;
