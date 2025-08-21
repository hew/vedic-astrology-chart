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

const NorthIndianChart: React.FC<ChartProps> = ({
  planets,
  ascendant,
  width = 600,
  height = 600,
  showHouseLabels = true,
  planetDisplayMode = 'symbols',
  allowKetuOverride = false,
}) => {
  const houses = calculateHouses(planets, ascendant, allowKetuOverride);
  const centerX = width / 2;
  const centerY = height / 2;
  const size = Math.min(width, height);

  // Calculate the ascendant sign number (1-12: Aries=1, Taurus=2, ..., Pisces=12)
  const ascendantSignNumber = Math.floor(ascendant / 30) + 1;

  // Helper function to get the sign number for each house
  const getHouseSignNumber = (houseNumber: number): number => {
    const signNumber = ((ascendantSignNumber - 1 + houseNumber - 1) % 12) + 1;
    return signNumber;
  };

  // House number positions (centered in each triangle/diamond)
  const houseNumberPositions = [
    // 1st house
    {
      num: 1,
      x: centerX,
      y: centerY - size * 0.02,
      label: getHouseSignNumber(1).toString(),
    },

    // 2nd house
    {
      num: 2,
      x: centerX - size * 0.2,
      y: centerY - size * 0.22,
      label: getHouseSignNumber(2).toString(),
    },

    // 3rd house
    {
      num: 3,
      x: centerX - size * 0.23,
      y: centerY - size * 0.192,
      label: getHouseSignNumber(3).toString(),
    },

    // 4th house
    {
      num: 4,
      x: centerX - size * 0.03,
      y: centerY + size * 0.008,
      label: getHouseSignNumber(4).toString(),
    },

    // 5th house
    {
      num: 5,
      x: centerX - size * 0.23,
      y: centerY + size * 0.21,
      label: getHouseSignNumber(5).toString(),
    },

    // 6th house
    {
      num: 6,
      x: centerX - size * 0.2,
      y: centerY + size * 0.24,
      label: getHouseSignNumber(6).toString(),
    },

    // 7th house
    {
      num: 7,
      x: centerX,
      y: centerY + size * 0.04,
      label: getHouseSignNumber(7).toString(),
    },

    // 8th house
    {
      num: 8,
      x: centerX + size * 0.2,
      y: centerY + size * 0.24,
      label: getHouseSignNumber(8).toString(),
    },

    // 9th house
    {
      num: 9,
      x: centerX + size * 0.23,
      y: centerY + size * 0.21,
      label: getHouseSignNumber(9).toString(),
    },

    // 10th house
    {
      num: 10,
      x: centerX + size * 0.03,
      y: centerY + size * 0.008,
      label: getHouseSignNumber(10).toString(),
    },

    // 11th house
    {
      num: 11,
      x: centerX + size * 0.23,
      y: centerY - size * 0.192,
      label: getHouseSignNumber(11).toString(),
    },

    // 12th house
    {
      num: 12,
      x: centerX + size * 0.2,
      y: centerY - size * 0.22,
      label: getHouseSignNumber(12).toString(),
    },
  ];

  // Planet centroid positions (invisible anchor points for planets) - same as house numbers
  const planetCentroids = [
    // 1st house
    { num: 1, x: centerX, y: centerY - size * 0.2 },

    // 2nd house
    { num: 2, x: centerX - size * 0.2, y: centerY - size * 0.31 },

    // 3rd house
    { num: 3, x: centerX - size * 0.32, y: centerY - size * 0.192 },

    // 4th house
    { num: 4, x: centerX - size * 0.2, y: centerY + size * 0.008 },

    // 5th house
    { num: 5, x: centerX - size * 0.32, y: centerY + size * 0.21 },

    // 6th house
    { num: 6, x: centerX - size * 0.2, y: centerY + size * 0.32 },

    // 7th house
    { num: 7, x: centerX, y: centerY + size * 0.21 },

    // 8th house
    { num: 8, x: centerX + size * 0.2, y: centerY + size * 0.32 },

    // 9th house
    { num: 9, x: centerX + size * 0.32, y: centerY + size * 0.21 },

    // 10th house
    { num: 10, x: centerX + size * 0.2, y: centerY + size * 0.008 },

    // 11th house
    { num: 11, x: centerX + size * 0.32, y: centerY - size * 0.192 },

    // 12th house
    { num: 12, x: centerX + size * 0.2, y: centerY - size * 0.31 },
  ];

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Outer square */}
      <rect
        x={centerX - size * 0.4}
        y={centerY - size * 0.4}
        width={size * 0.8}
        height={size * 0.8}
        fill="none"
        stroke="#333"
        strokeWidth="2"
      />

      {/* House division lines - only diagonals */}
      <g stroke="#333" strokeWidth="1.5" fill="none">
        {/* Diagonal lines creating the diamond pattern */}
        <line
          x1={centerX - size * 0.4}
          y1={centerY - size * 0.4}
          x2={centerX + size * 0.4}
          y2={centerY + size * 0.4}
        />
        <line
          x1={centerX + size * 0.4}
          y1={centerY - size * 0.4}
          x2={centerX - size * 0.4}
          y2={centerY + size * 0.4}
        />

        {/* Central diamond that touches the square at 4 points */}
        <path
          d={`M ${centerX} ${centerY - size * 0.4}
              L ${centerX + size * 0.4} ${centerY}
              L ${centerX} ${centerY + size * 0.4}
              L ${centerX - size * 0.4} ${centerY}
              Z`}
          fill="none"
          stroke="#333"
          strokeWidth="1.5"
        />
      </g>

      {/* House Numbers (manually positioned) */}
      {showHouseLabels &&
        houseNumberPositions.map(({ num, x, y, label }) => (
          <text
            key={`house-${num}`}
            x={x}
            y={y}
            textAnchor="middle"
            fontSize="12"
            fill="#333"
            fontWeight="bold"
          >
            {label}
          </text>
        ))}

      {/* Planets (positioned at centroids) */}
      {houses.map((house) => {
        const centroid = planetCentroids.find((c) => c.num === house.number);
        if (!centroid || house.planets.length === 0) return null;

        // For house 1, we need to account for the ascendant taking up space
        const isFirstHouse = house.number === 1;
        const totalItems = house.planets.length + (isFirstHouse ? 1 : 0); // Include ascendant in count for house 1
        const itemSpacing = 18;

        return (
          <g key={`planets-${house.number}`}>
            {house.planets.map((planetName, index) => {
              const planetX = centroid.x;
              // Calculate starting Y position so the stack (including ascendant if house 1) is centered on the centroid
              const totalHeight = (totalItems - 1) * itemSpacing;
              const startY = centroid.y - totalHeight / 2;
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
                    fontSize="14"
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
          const firstHouseCentroid = planetCentroids.find((c) => c.num === 1);
          if (!firstHouse || !firstHouseCentroid) return null;

          const totalItems = firstHouse.planets.length + 1; // Include ascendant
          const itemSpacing = 18;
          const totalHeight = (totalItems - 1) * itemSpacing;
          const startY = firstHouseCentroid.y - totalHeight / 2;
          const ascendantY = startY; // Ascendant is the first item (index 0)

          return (
            <text
              x={firstHouseCentroid.x}
              y={ascendantY}
              fontSize="14"
              fill="black"
              fontWeight="bold"
              textAnchor="middle"
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

export default NorthIndianChart;
