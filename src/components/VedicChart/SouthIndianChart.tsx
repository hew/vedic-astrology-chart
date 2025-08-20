import React from 'react';
import { VedicChartProps } from '../../types';
import {
  calculateHouses,
  getPlanetDegree,
  getPlanetDisplay,
} from '../../utils';
import {
  formatAscendantDegree,
  getAscendantSign,
  getPlanetColor,
} from './utils/helpers';

type ChartProps = Omit<VedicChartProps, 'style'>;

const SouthIndianChart: React.FC<ChartProps> = ({
  planets,
  ascendant,
  width = 600,
  height = 600,
  showHouseLabels = true,
  planetDisplayMode = 'symbols',
  allowKetuOverride = false,
}) => {
  const houses = calculateHouses(planets, ascendant, allowKetuOverride);
  const cellWidth = width / 4;
  const cellHeight = height / 4;

  // Calculate the ascendant sign number (1-12: Aries=1, Taurus=2, ..., Pisces=12)
  const ascendantSignNumber = Math.floor(ascendant / 30) + 1;

  // Helper function to get the sign number for each house
  const getHouseSignNumber = (houseNumber: number): number => {
    const signNumber = ((ascendantSignNumber - 1 + houseNumber - 1) % 12) + 1;
    return signNumber;
  };

  // South Indian chart - 1st house at bottom-right, anti-clockwise progression
  const getHousePosition = (houseNum: number) => {
    const positions = {
      1: { row: 3, col: 3 }, // Bottom-right corner (1st house/Ascendant)
      2: { row: 3, col: 2 }, // Left adjacent to 1st house
      3: { row: 3, col: 1 }, // Continue left
      4: { row: 3, col: 0 }, // Bottom-left corner
      5: { row: 2, col: 0 }, // Left column, up from 4th
      6: { row: 1, col: 0 }, // Continue up left column
      7: { row: 0, col: 0 }, // Top-left corner
      8: { row: 0, col: 1 }, // Top row, right from 7th
      9: { row: 0, col: 2 }, // Continue right top row
      10: { row: 0, col: 3 }, // Top-right corner
      11: { row: 1, col: 3 }, // Right column, down from 10th
      12: { row: 2, col: 3 }, // Continue down right column, adjacent up from 1st
    };
    return positions[houseNum as keyof typeof positions] || { row: 3, col: 3 };
  };

  const getCellCenter = (row: number, col: number) => ({
    x: col * cellWidth + cellWidth / 2,
    y: row * cellHeight + cellHeight / 2,
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Grid lines */}
      <g stroke="#666" strokeWidth="1" fill="none">
        {/* Horizontal lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * cellHeight}
            x2={width}
            y2={i * cellHeight}
          />
        ))}
        {/* Vertical lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`v-${i}`}
            x1={i * cellWidth}
            y1={0}
            x2={i * cellWidth}
            y2={height}
          />
        ))}
        {/* Diagonal lines for corner houses */}
        <line x1={0} y1={0} x2={cellWidth} y2={cellHeight} /> {/* House 7 */}
        <line
          x1={3 * cellWidth}
          y1={0}
          x2={4 * cellWidth}
          y2={cellHeight}
        />{' '}
        {/* House 10 */}
        <line
          x1={3 * cellWidth}
          y1={3 * cellHeight}
          x2={4 * cellWidth}
          y2={4 * cellHeight}
        />{' '}
        {/* House 1 */}
        <line
          x1={0}
          y1={3 * cellHeight}
          x2={cellWidth}
          y2={4 * cellHeight}
        />{' '}
        {/* House 4 */}
      </g>

      {/* House content */}
      {houses.map((house) => {
        const pos = getHousePosition(house.number);
        const center = getCellCenter(pos.row, pos.col);

        // For house 1, we need to account for the ascendant taking up space
        const isFirstHouse = house.number === 1;
        const totalItems = house.planets.length + (isFirstHouse ? 1 : 0); // Include ascendant in count for house 1
        const itemSpacing = 18;

        return (
          <g key={house.number}>
            {/* House number (controlled by showHouseLabels) */}
            {showHouseLabels && (
              <text
                x={center.x - cellWidth * 0.3}
                y={center.y - cellHeight * 0.3}
                fontSize="12"
                fill="#666"
                fontWeight="bold"
              >
                {getHouseSignNumber(house.number)}
              </text>
            )}

            {/* Planets in house */}
            {house.planets.map((planetName, index) => {
              const planetX = center.x;
              // Calculate starting Y position so the stack (including ascendant if house 1) is centered on the center
              const totalHeight = (totalItems - 1) * itemSpacing;
              const startY = center.y - totalHeight / 2;
              // For house 1, planets start after the ascendant (index + 1)
              const planetIndex = isFirstHouse ? index + 1 : index;
              const baseY = startY + planetIndex * itemSpacing;

              return (
                <g key={planetName}>
                  {/* Planet symbol/name with sign and degree */}
                  <text
                    x={planetX}
                    y={baseY}
                    textAnchor="middle"
                    fontSize="16"
                    fill={getPlanetColor(planetName)}
                  >
                    <tspan fontWeight="bold">
                      {getPlanetDisplay(planetName, planetDisplayMode)}
                    </tspan>
                    <tspan fontWeight="normal" fill="#666">
                      {' '}
                      {house.sign.substring(0, 3)}{' '}
                      {getPlanetDegree(planetName, planets, allowKetuOverride)}
                    </tspan>
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Ascendant marker - positioned as first item in house 1 stack */}
      <g>
        {(() => {
          const firstHouse = houses.find((h) => h.number === 1);
          const firstHousePos = getHousePosition(1);
          const firstHouseCenter = getCellCenter(
            firstHousePos.row,
            firstHousePos.col
          );
          if (!firstHouse) return null;

          const totalItems = firstHouse.planets.length + 1; // Include ascendant
          const itemSpacing = 18;
          const totalHeight = (totalItems - 1) * itemSpacing;
          const startY = firstHouseCenter.y - totalHeight / 2;
          const ascendantY = startY; // Ascendant is the first item (index 0)

          return (
            <text
              x={firstHouseCenter.x}
              y={ascendantY}
              textAnchor="middle"
              fontSize="16"
              fill="black"
            >
              <tspan fontWeight="bold">ASC</tspan>
              <tspan fontWeight="normal" fill="#666">
                {' '}
                {getAscendantSign(ascendant)} {formatAscendantDegree(ascendant)}
              </tspan>
            </text>
          );
        })()}
      </g>
    </svg>
  );
};

export default SouthIndianChart;
