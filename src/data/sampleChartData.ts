import { VedicChartData } from '../types';

export const sampleChartData: VedicChartData = {
  planets: {
    Sun: 110.2, // Sidereal positions
    Moon: 279.5,
    Mars: 110.1,
    Mercury: 140.1,
    Jupiter: 170.2,
    Venus: 200.3,
    Saturn: 220.5,
    Rahu: 89.1, // North Node
    Ketu: 0.0, // South Node
    Uranus: 300.0, // Optional outer planets
    Neptune: 320.0,
    Pluto: 340.0,
  },
  ascendant: 236.1, // Sidereal ascendant
  ayanamsa: 24.12, // Lahiri ayanamsa
};
