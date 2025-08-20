# Vedic Astrology Chart

## Overview

A beautiful React component for rendering Vedic (Jyotish) astrology charts. Supports both North Indian and South Indian chart formats with accurate whole sign house system calculations.

## Features

- **Dual Chart Formats**: North Indian (diamond) and South Indian (grid) styles
- **Whole Sign System**: Accurate Vedic astrology house calculations
- **Flexible Planet Display**: Choose between traditional astronomical symbols or abbreviated names
- **Sidereal Positions**: Works with sidereal planetary positions and ayanamsa
- **Ascendant Display**: Shows ascendant with exact degrees in both chart formats
- **Smart Stacking**: Automatic vertical stacking when multiple planets occupy the same house
- **Rahu-Ketu Synchronization**: Ensures North and South nodes are exactly 180° apart
- **Dynamic House Labels**: Shows zodiac sign numbers (1-12) based on ascendant position
- **Customizable**: Adjustable dimensions, house numbers, zodiac labels, and nakshatra display
- **TypeScript**: Full type safety and IntelliSense support

## Installation

```bash
npm install vedic-astrology-chart
# or
bun add vedic-astrology-chart
# or
yarn add vedic-astrology-chart
```

## Quick Start

```tsx
import { VedicChart } from 'vedic-astrology-chart';

function MyChart() {
  const birthChart = {
    planets: {
      Sun: 95.5, // Sidereal positions in degrees
      Moon: 145.2,
      Mars: 310.7,
      Mercury: 108.8,
      Jupiter: 85.2,
      Venus: 200.3,
      Saturn: 270.5,
      Rahu: 42.3, // North Node
      Ketu: 222.3, // South Node (automatically synchronized to be 180° from Rahu)
    },
    ascendant: 15.5, // Sidereal ascendant in degrees
    ayanamsa: 24.12, // Lahiri ayanamsa
  };

  return (
    <VedicChart
      {...birthChart}
      style="north" // or "south"
      width={600}
      height={600}
      showNakshatras={true}
      showHouseNumbers={true}
      showHouseLabels={true}
      planetDisplayMode="symbols" // or "names"
    />
  );
}
```

## Development

To run the demo locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/hew/vedic-astrology-chart.git
   cd vedic-astrology-chart
   ```

2. Install dependencies:

   ```bash
   bun install
   # or npm install
   ```

3. Start the development server:

   ```bash
   bun run dev
   # or npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## API Reference

### VedicChart Props

| Prop                | Type                   | Default      | Description                                           |
| ------------------- | ---------------------- | ------------ | ----------------------------------------------------- |
| `planets`           | `PlanetaryPositions`   | **required** | Sidereal positions of all 9 planets (0-360°)          |
| `ascendant`         | `number`               | **required** | Sidereal ascendant position (0-360°)                  |
| `ayanamsa`          | `number`               | **required** | Ayanamsa value in degrees                             |
| `style`             | `'north' \| 'south'`   | `'north'`    | Chart style format                                    |
| `width`             | `number`               | `600`        | Chart width in pixels                                 |
| `height`            | `number`               | `600`        | Chart height in pixels                                |
| `showNakshatras`    | `boolean`              | `true`       | Show nakshatra information                            |
| `showHouseNumbers`  | `boolean`              | `true`       | Show house numbers (1, 2, 3, etc.)                    |
| `showHouseLabels`   | `boolean`              | `true`       | Show zodiac sign numbers in chart                     |
| `planetDisplayMode` | `'symbols' \| 'names'` | `'symbols'`  | Display planets as symbols (☉♂♃) or names (Su Ma Ju) |

### PlanetaryPositions

```tsx
interface PlanetaryPositions {
  Sun: number; // 0-360 degrees
  Moon: number; // 0-360 degrees
  Mars: number; // 0-360 degrees
  Mercury: number; // 0-360 degrees
  Jupiter: number; // 0-360 degrees
  Venus: number; // 0-360 degrees
  Saturn: number; // 0-360 degrees
  Rahu: number; // 0-360 degrees (North Node)
  Ketu: number; // 0-360 degrees (South Node - automatically synchronized with Rahu)
}
```

## Chart Styles

### North Indian Style

- Diamond-shaped layout with triangular houses
- Traditional format used in North India
- Houses arranged in clockwise sequence starting from ascendant
- Kendra houses (1, 4, 7, 10) in diamond positions
- Ascendant and planets stack vertically when in same house
- Dynamic house labels show zodiac sign numbers based on ascendant

### South Indian Style

- Square grid layout (4x4)
- Traditional format used in South India
- Fixed house positions regardless of ascendant
- Corner houses with diagonal divisions
- Ascendant appears in house 1 (bottom-right corner)
- Dynamic house labels show zodiac sign numbers based on ascendant

## Planet Display Options

### Symbols Mode (`planetDisplayMode="symbols"`)

Traditional astronomical symbols with sign and degree:

- **☉** Ari 15°30' (Sun in Aries at 15 degrees 30 minutes)
- **☽** Tau 22°15' (Moon in Taurus)
- **♂** Gem 8°45' (Mars in Gemini)
- **☿** Can 28°12' (Mercury in Cancer)
- **♃** Leo 5°20' (Jupiter in Leo)
- **♀** Vir 19°35' (Venus in Virgo)
- **♄** Lib 14°48' (Saturn in Libra)
- **☊** Sco 7°22' (Rahu in Scorpio)
- **☋** Tau 7°22' (Ketu in Taurus - exactly opposite Rahu)

### Names Mode (`planetDisplayMode="names"`)

Abbreviated planet names with sign and degree:

- **Su** Ari 15°30'
- **Mo** Tau 22°15'
- **Ma** Gem 8°45'
- **Me** Can 28°12'
- **Ju** Leo 5°20'
- **Ve** Vir 19°35'
- **Sa** Lib 14°48'
- **Ra** Sco 7°22'
- **Ke** Tau 7°22'

### Ascendant Display

The ascendant (ASC) is displayed with its sign and exact degree:

- **ASC** Ari 15°30' (Ascendant in Aries at 15 degrees 30 minutes)

## House System

This component uses the **Whole Sign House System**, where:

- Each house occupies exactly one zodiac sign (30°)
- House boundaries align with sign boundaries
- Planets are placed based on the sign they occupy
- Traditional Vedic approach to house division
- First house always starts with the ascendant's sign

## Dynamic House Labels

House labels show zodiac sign numbers (1-12) that correspond to the actual signs in each house:

- **Sign Numbers**: Aries=1, Taurus=2, Gemini=3, Cancer=4, Leo=5, Virgo=6, Libra=7, Scorpio=8, Sagittarius=9, Capricorn=10, Aquarius=11, Pisces=12
- **Example**: If ascendant is in Scorpio (8), then house labels will be:
  - 1st house = 8 (Scorpio)
  - 2nd house = 9 (Sagittarius)
  - 3rd house = 10 (Capricorn)
  - ...
  - 12th house = 7 (Libra)

## Smart Features

### Automatic Stacking

When multiple planets occupy the same house:

- Ascendant appears first (in house 1 only)
- Planets stack vertically below ascendant or house number
- Stack is centered within the house area
- Prevents overlapping text

### Rahu-Ketu Synchronization

- Ketu is automatically positioned exactly 180° opposite to Rahu
- Both nodes display identical degrees and minutes
- Eliminates floating-point precision errors
- Maintains traditional astronomical relationship

## Customization Options

### Display Controls

- **House Labels**: Toggle display of zodiac sign numbers (1-12)
- **Planet Display**: Choose between astronomical symbols or abbreviated names
- **Nakshatras**: Optional nakshatra information display

### Styling

- **Responsive**: SVG-based rendering scales to any size
- **Customizable Dimensions**: Set width and height as needed
- **Clean Typography**: Optimized font sizes for readability
- **Color Coding**: Different colors for planets, ascendant, and house labels

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and TypeScript
- SVG-based rendering for crisp, scalable charts
- Follows traditional Vedic astrology principles
- Accurate whole sign house system implementation
