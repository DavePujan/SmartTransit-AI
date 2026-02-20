import api from './api';

export interface OptimizationPayload {
    boundary: any;
    num_buses: number;
    operating_hours: number;
    avg_speed: number;
    depot: { lat: number; lng: number } | null;
}

export const optimizeService = {
    async runOptimization(payload: OptimizationPayload) {
        try {
            // NOTE: In a real scenario, this connects to the backend API.
            // Since this is a frontend sprint mock, if the backend is not available,
            // we can simulate a response after a delay.
            const response = await api.post('/api/optimize', payload);
            return response.data;
        } catch (error) {
            console.error("Optimize error:", error);
            throw error;
        }
    }
};
