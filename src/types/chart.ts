import { PlanetaryPositions } from './planets';

export type ChartStyle = 'north' | 'south';
export type PlanetDisplayMode = 'symbols' | 'names';

export interface VedicChartData {
  planets: PlanetaryPositions;
  ascendant: number; // degrees 0-360
  ayanamsa?: number; // degrees - optional since it's not used in calculations
}

export interface VedicChartProps extends VedicChartData {
  style?: ChartStyle;
  width?: number;
  height?: number;
  showHouseLabels?: boolean;
  planetDisplayMode?: PlanetDisplayMode;
  allowKetuOverride?: boolean;
}

export interface HouseInfo {
  number: number; // 1-12
  sign: string;
  planets: string[];
}
