# Vedic Astrology Chart

## Overview

A beautiful React component for rendering Vedic (Jyotish) astrology charts. Supports both North Indian and South Indian chart formats with accurate whole sign house system calculations.

## Features

- **Dual Chart Formats**: North Indian (diamond) and South Indian (grid) styles
- **Whole Sign System**: Accurate Vedic astrology house calculations
- **Flexible Planet Display**: Choose between traditional astronomical symbols or abbreviated names
- **Sidereal Positions**: Works with sidereal planetary positions
- **Ascendant Display**: Shows ascendant with exact degrees in both chart formats
- **Smart Stacking**: Automatic vertical stacking when multiple planets occupy the same house
- **Rahu-Ketu Synchronization**: Ensures North and South nodes are exactly 180° apart
- **Dynamic House Labels**: Shows zodiac sign numbers (1-12) based on ascendant position
- **Customizable**: Adjustable dimensions, house numbers, zodiac labels
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
  };

  return (
    <VedicChart
      {...birthChart}
      style="north" // or "south"
      width={600}
      height={600}
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

| Prop                | Type                   | Default      | Description                                                      |
| ------------------- | ---------------------- | ------------ | ---------------------------------------------------------------- |
| `planets`           | `PlanetaryPositions`   | **required** | Sidereal positions of all 9 planets (0-360°)                     |
| `ascendant`         | `number`               | **required** | Sidereal ascendant position (0-360°)                             |
| `style`             | `'north' \| 'south'`   | `'north'`    | Chart style format                                               |
| `width`             | `number`               | `600`        | Chart width in pixels                                            |
| `height`            | `number`               | `600`        | Chart height in pixels                                           |
| `showHouseLabels`   | `boolean`              | `true`       | Show zodiac sign numbers in chart                                |
| `planetDisplayMode` | `'symbols' \| 'names'` | `'symbols'`  | Display planets as symbols (☉♂♃) or names (Su Ma Ju)            |
| `allowKetuOverride` | `boolean`              | `false`      | Allow custom Ketu position instead of auto-calculating from Rahu |

### PlanetaryPositions

```tsx
interface PlanetaryPositions {
  // Traditional Vedic planets (required)
  Sun: number; // 0-360 degrees
  Moon: number; // 0-360 degrees
  Mars: number; // 0-360 degrees
  Mercury: number; // 0-360 degrees
  Jupiter: number; // 0-360 degrees
  Venus: number; // 0-360 degrees
  Saturn: number; // 0-360 degrees
  Rahu: number; // 0-360 degrees (North Node)
  Ketu: number; // 0-360 degrees (South Node - automatically synchronized with Rahu)

  // Optional outer planets (modern astrology)
  Uranus?: number; // 0-360 degrees (optional)
  Neptune?: number; // 0-360 degrees (optional)
  Pluto?: number; // 0-360 degrees (optional)
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

Traditional and modern astronomical symbols:

**Traditional Vedic Planets:**

- **☉** Ari 15°30' (Sun in Aries)
- **☽** Tau 22°15' (Moon in Taurus)
- **♂** Gem 8°45' (Mars in Gemini)
- **☿** Can 28°12' (Mercury in Cancer)
- **♃** Leo 5°20' (Jupiter in Leo)
- **♀** Vir 19°35' (Venus in Virgo)
- **♄** Lib 14°48' (Saturn in Libra)
- **☊** Sco 7°22' (Rahu in Scorpio)
- **☋** Tau 7°22' (Ketu in Taurus)

**Optional Outer Planets:**

- **♅** Aqu 12°45' (Uranus in Aquarius)
- **♆** Pis 5°18' (Neptune in Pisces)
- **♇** Cap 28°33' (Pluto in Capricorn)

### Names Mode (`planetDisplayMode="names"`)

**Traditional Planets:** Su, Mo, Ma, Me, Ju, Ve, Sa, Ra, Ke

**Outer Planets:** Ur, Ne, Pl

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

### Styling

- **Responsive**: SVG-based rendering scales to any size
- **Customizable Dimensions**: Set width and height as needed
- **Clean Typography**: Optimized font sizes for readability
- **Color Coding**: Different colors for planets, ascendant, and house labels

## Advanced Usage

### Custom Ketu Position (Divisional Charts)

For divisional charts where Ketu might not be exactly opposite to Rahu:

```tsx
const divisionalChartData = {
  planets: {
    Sun: 95.5,
    Moon: 145.2,
    Mars: 310.7,
    Mercury: 108.8,
    Jupiter: 85.2,
    Venus: 200.3,
    Saturn: 270.5,
    Rahu: 42.3,
    Ketu: 180.5, // Custom position - not exactly opposite to Rahu
  },
  ascendant: 15.5,
};

<VedicChart
  {...divisionalChartData}
  allowKetuOverride={true} // Allow custom Ketu position
  style="north"
  width={600}
  height={600}
/>;
```

### Default Behavior (Birth Charts)

For standard birth charts where Ketu should be exactly 180° from Rahu:

```tsx
<VedicChart
  {...birthChartData}
  allowKetuOverride={false} // Auto-calculate Ketu from Rahu (default)
  style="north"
/>
```

### Including Outer Planets

```tsx
const modernVedicChart = {
  planets: {
    // Traditional planets (always required)
    Sun: 95.5,
    Moon: 145.2,
    Mars: 310.7,
    Mercury: 108.8,
    Jupiter: 85.2,
    Venus: 200.3,
    Saturn: 270.5,
    Rahu: 42.3,
    Ketu: 222.3,

    // Optional outer planets
    Uranus: 15.8,
    Neptune: 340.2,
    Pluto: 275.6,
  },
  ascendant: 15.5,
};

<VedicChart {...modernVedicChart} style="north" width={600} height={600} />;
```

### Traditional Vedic Chart (Without Outer Planets)

```tsx
const traditionalChart = {
  planets: {
    // Only the 9 traditional planets
    Sun: 95.5,
    Moon: 145.2,
    Mars: 310.7,
    Mercury: 108.8,
    Jupiter: 85.2,
    Venus: 200.3,
    Saturn: 270.5,
    Rahu: 42.3,
    Ketu: 222.3,
    // Uranus, Neptune, Pluto are omitted
  },
  ascendant: 15.5,
};
```

### Partial Outer Planet Inclusion

```tsx
const partialModernChart = {
  planets: {
    // Traditional planets
    Sun: 95.5,
    Moon: 145.2,
    Mars: 310.7,
    Mercury: 108.8,
    Jupiter: 85.2,
    Venus: 200.3,
    Saturn: 270.5,
    Rahu: 42.3,
    Ketu: 222.3,

    // Include only some outer planets
    Pluto: 275.6,
    // Uranus and Neptune are omitted
  },
  ascendant: 15.5,
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and TypeScript
- SVG-based rendering for crisp, scalable charts
- Follows traditional Vedic astrology principles
- Accurate whole sign house system implementation
