import { Network, Route, Map, BusFront, Calculator, GitCompare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { AnimatedSection } from '../animations/AnimatedSection';

export const FeatureGrid = () => {
    const features = [
        {
            icon: <Network className="h-6 w-6 text-indigo-500" />,
            title: "Geospatial Clustering",
            description: "AI groups high-density residential nodes dynamically, defining optimal core coverage areas.",
            delay: 0
        },
        {
            icon: <Route className="h-6 w-6 text-emerald-500" />,
            title: "Route Optimization",
            description: "Generates turn-by-turn bus routes that minimize travel time while maximizing accessibility.",
            delay: 0.1
        },
        {
            icon: <Map className="h-6 w-6 text-orange-500" />,
            title: "Coverage Heatmaps",
            description: "Visualize pedestrian walking distances (400m/800m) to proposed stops in real-time.",
            delay: 0.2
        },
        {
            icon: <BusFront className="h-6 w-6 text-blue-500" />,
            title: "Fleet Allocation",
            description: "Determines the exact number of standard or articulated buses needed for peak and off-peak.",
            delay: 0.3
        },
        {
            icon: <Calculator className="h-6 w-6 text-pink-500" />,
            title: "Cost Estimation",
            description: "Predicts CAPEX and OPEX based on total route kilometers, fleet size, and fuel estimates.",
            delay: 0.4
        },
        {
            icon: <GitCompare className="h-6 w-6 text-purple-500" />,
            title: "Scenario Comparison",
            description: "A/B test different constraints (e.g., high budget vs. high coverage) to find the perfect balance.",
            delay: 0.5
        }
    ];

    return (
        <section id="features" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">

                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Capabilities</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Everything you need. <br /> Nothing you don't.
                    </h3>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} delay={feature.delay}>
                            <Card className="h-full border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
};
