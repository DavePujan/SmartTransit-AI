import { create } from 'zustand';

interface MapState {
    boundary: any | null;
    setBoundary: (boundary: any) => void;
    clearBoundary: () => void;

    optimizationResult: any | null;
    isOptimizing: boolean;
    optimizationError: string | null;
    setOptimizationResult: (result: any) => void;
    setIsOptimizing: (loading: boolean) => void;
    setOptimizationError: (error: string | null) => void;

    scenarios: any[];
    saveScenario: (scenario: any) => void;
}

export const useMapStore = create<MapState>((set) => ({
    boundary: null,
    setBoundary: (boundary) => set({ boundary }),
    clearBoundary: () => set({ boundary: null }),

    optimizationResult: null,
    isOptimizing: false,
    optimizationError: null,
    setOptimizationResult: (result) => set({ optimizationResult: result }),
    setIsOptimizing: (loading) => set({ isOptimizing: loading }),
    setOptimizationError: (error) => set({ optimizationError: error }),

    scenarios: [],
    saveScenario: (scenario) => set((state) => ({ scenarios: [...state.scenarios, scenario] }))
}));
