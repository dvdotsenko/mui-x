'use client';
import { useChartDataProviderProps } from '@mui/x-charts/internals';
import { ZoomProviderProps } from '../ZoomProvider';
import type { ChartDataProviderProProps } from './ChartDataProviderPro';

export const useChartContainerProProps = (
  props: ChartDataProviderProProps,
  ref: React.Ref<SVGSVGElement>,
) => {
  const { zoom, onZoomChange, ...baseProps } = props;

  const {
    children,
    drawingAreaProviderProps,
    seriesProviderProps,
    cartesianProviderProps,
    zAxisContextProps,
    highlightedProviderProps,
    chartsSurfaceProps,
    pluginProviderProps,
    animationProviderProps,
    svgRefProviderProps,
    xAxis,
    yAxis,
  } = useChartDataProviderProps(baseProps, ref);

  const zoomProviderProps: Omit<ZoomProviderProps, 'children'> = {
    zoom,
    onZoomChange,
    xAxis,
    yAxis,
  };

  return {
    zoomProviderProps,
    children,
    drawingAreaProviderProps,
    pluginProviderProps,
    seriesProviderProps,
    cartesianProviderProps,
    zAxisContextProps,
    highlightedProviderProps,
    chartsSurfaceProps,
    animationProviderProps,
    svgRefProviderProps,
  };
};
