import { Bus, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900/50 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-primary/10 p-2 rounded-xl">
                                <Bus className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-bold text-lg text-slate-900 dark:text-white">
                                SmartTransit<span className="text-primary">.AI</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-xs">
                            AI-powered city bus deployment planner for emerging districts and growing cities.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#features" className="text-sm text-slate-500 hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#preview" className="text-sm text-slate-500 hover:text-primary transition-colors">Live Demo</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">API Reference</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} SmartTransit AI. All rights reserved.
                    </p>
                    <div className="flex gap-2 items-center text-sm text-slate-500">
                        <span>Built for modern cities.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
