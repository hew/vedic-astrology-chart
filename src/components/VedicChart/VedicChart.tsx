import React from 'react';
import { VedicChartProps } from '../../types';
import NorthIndianChart from './NorthIndianChart';
import SouthIndianChart from './SouthIndianChart';

const VedicChart: React.FC<VedicChartProps> = ({
  planets,
  ascendant,
  ayanamsa,
  style = 'north',
  width = 600,
  height = 600,
  showHouseLabels = true,
  planetDisplayMode = 'symbols',
  allowKetuOverride = false,
}) => {
  const chartProps = {
    planets,
    ascendant,
    ayanamsa,
    width,
    height,
    showHouseLabels,
    planetDisplayMode,
    allowKetuOverride,
  };

  return (
    <div className="vedic-chart">
      {style === 'north' ? (
        <NorthIndianChart {...chartProps} />
      ) : (
        <SouthIndianChart {...chartProps} />
      )}
    </div>
  );
};

export default VedicChart;
