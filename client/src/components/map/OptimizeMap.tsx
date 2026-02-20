import React, { useRef } from 'react';
import { MapContainer, TileLayer, FeatureGroup, GeoJSON, LayersControl } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useMapStore } from '../../store/useStore';
import { HeatmapLayer } from './HeatmapLayer';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';

// Fix for default marker icons in leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const OptimizeMap: React.FC = () => {
    const { boundary, setBoundary, clearBoundary, optimizationResult } = useMapStore();
    const featureGroupRef = useRef<L.FeatureGroup>(null);

    const onCreated = (e: any) => {
        const { layerType, layer } = e;
        if (layerType === 'polygon') {
            const geojson = layer.toGeoJSON();
            setBoundary(geojson);

            // Remove previously drawn layers so we only have one polygon
            if (featureGroupRef.current) {
                const layers = featureGroupRef.current.getLayers();
                layers.forEach((l) => {
                    if (l !== layer) {
                        featureGroupRef.current?.removeLayer(l);
                    }
                });
            }
        }
    };

    const onDeleted = () => {
        clearBoundary();
    };

    const center: [number, number] = [20.5937, 78.9629]; // Center of India

    return (
        <div className="w-full h-full min-h-[400px] bg-slate-100 rounded relative flex flex-col">
            <div className="flex-grow min-h-[400px]">
                <MapContainer
                    center={center}
                    zoom={5}
                    style={{ height: '100%', width: '100%', minHeight: '400px', borderRadius: '0.5rem', zIndex: 0 }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    <FeatureGroup ref={featureGroupRef}>
                        <EditControl
                            position="topright"
                            onCreated={onCreated}
                            onDeleted={onDeleted}
                            draw={{
                                rectangle: false,
                                circle: false,
                                circlemarker: false,
                                marker: false,
                                polyline: false,
                                polygon: {
                                    allowIntersection: false,
                                    drawError: {
                                        color: '#e1e100',
                                        message: '<strong>Error:</strong> shape edges cannot cross!'
                                    },
                                    shapeOptions: {
                                        color: '#3b82f6'
                                    }
                                }
                            }}
                        />
                    </FeatureGroup>

                    {optimizationResult && (
                        <LayersControl position="topright">
                            <LayersControl.Overlay checked name="Bus Stops">
                                <FeatureGroup>
                                    {optimizationResult.stops && <GeoJSON data={optimizationResult.stops} />}
                                </FeatureGroup>
                            </LayersControl.Overlay>
                            <LayersControl.Overlay checked name="Bus Routes">
                                <FeatureGroup>
                                    {optimizationResult.routes && (
                                        <GeoJSON
                                            data={optimizationResult.routes}
                                            style={(feature: any) => ({
                                                color: feature?.properties?.color || '#3b82f6',
                                                weight: 4,
                                                opacity: 0.8
                                            })}
                                        />
                                    )}
                                </FeatureGroup>
                            </LayersControl.Overlay>
                            <LayersControl.Overlay checked name="Coverage Heatmap">
                                <FeatureGroup>
                                    {optimizationResult.coverage && <HeatmapLayer points={optimizationResult.coverage} />}
                                </FeatureGroup>
                            </LayersControl.Overlay>
                        </LayersControl>
                    )}
                </MapContainer>
            </div>
            {boundary && (
                <div className="absolute bottom-4 left-4 z-[400] bg-white p-3 rounded shadow-md">
                    <p className="text-sm font-semibold text-green-600 mb-2">Boundary Selected!</p>
                    <button
                        onClick={() => {
                            clearBoundary();
                            if (featureGroupRef.current) {
                                featureGroupRef.current.clearLayers();
                            }
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                    >
                        Reset Boundary
                    </button>
                </div>
            )}
        </div>
    );
};
