# Vedic Astrology Chart 🕉️

Beautiful, interactive SVG-based Vedic (Jyotish) astrology chart component for React applications. Renders traditional North Indian and South Indian style charts with accurate planetary positions.

![Vedic Chart Example](https://via.placeholder.com/600x400?text=Vedic+Astrology+Chart)

## Features

- 🎨 **Traditional Styles** - North Indian (diamond) and South Indian (square) formats
- 🪐 **Navagraha** - All nine Vedic planets including Rahu/Ketu
- ♈ **Sidereal Zodiac** - Accurate Lahiri ayanamsa calculations
- 🏠 **Bhava System** - Equal house or Bhava Chalit options
- ✨ **Divisional Charts** - D1 (Rashi), D9 (Navamsa), D10 (Dashamsa), etc.
- 🌙 **Nakshatras** - 27 lunar mansion overlays with pada divisions
- 📊 **Dasha Periods** - Vimshottari dasha timeline display
- 🎯 **Yogas** - Automatic detection of important planetary combinations
- 📱 **Responsive** - Scales perfectly on any device

## Installation

```bash
npm install vedic-astrology-chart
# or
yarn add vedic-astrology-chart
```

## Quick Start

```tsx
import { VedicChart } from 'vedic-astrology-chart';

function MyChart() {
  const birthChart = {
    planets: {
      Sun: 95.5,      // Sidereal positions
      Moon: 145.2,    
      Mars: 310.7,
      Mercury: 108.8,
      Jupiter: 85.2,
      Venus: 200.3,
      Saturn: 270.5,
      Rahu: 42.3,     // North Node
      Ketu: 222.3     // South Node
    },
    ascendant: 15.5,  // Sidereal ascendant
    ayanamsa: 24.12   // Lahiri ayanamsa
  };

  return (
    <VedicChart
      {...birthChart}
      style="north"  // or "south"
      width={600}
      height={600}
      showNakshatras={true}
    />
  );
}
```

## Chart Styles

### North Indian Style (Diamond)
Traditional diamond-shaped chart with houses in fixed positions and signs rotating based on ascendant.

### South Indian Style (Square)
Square chart with signs in fixed positions and house numbers rotating based on ascendant.

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | number | 600 | Chart width in pixels |
| `height` | number | 600 | Chart height in pixels |
| `style` | string | 'north' | 'north' or 'south' Indian style |
| `planets` | PlanetData | required | Sidereal planet positions (0-360) |
| `ascendant` | number | required | Sidereal ascendant degree |
| `ayanamsa` | number | 24.12 | Ayanamsa value for calculations |
| `showNakshatras` | boolean | false | Display nakshatra divisions |
| `showDegrees` | boolean | true | Show exact degrees |
| `colorScheme` | string | 'traditional' | Color theme |
| `divisionalChart` | string | 'D1' | Which divisional chart to show |

### Planet Input Format

```typescript
interface VedicPlanetData {
  Sun: number;     // Surya - 0-360 sidereal degrees
  Moon: number;    // Chandra
  Mars: number;    // Mangal/Kuja
  Mercury: number; // Budha
  Jupiter: number; // Guru/Brihaspati
  Venus: number;   // Shukra
  Saturn: number;  // Shani
  Rahu: number;    // North Node (always retrograde)
  Ketu: number;    // South Node (always retrograde)
}
```

## Nakshatras (Lunar Mansions)

The 27 nakshatras are automatically calculated and can be displayed:

- Ashwini, Bharani, Krittika, Rohini...
- Each nakshatra = 13°20' 
- 4 padas (quarters) per nakshatra
- Special muhurta calculations

## Divisional Charts (Vargas)

Support for all 16 main divisional charts:

- **D1** - Rashi (Main birth chart)
- **D9** - Navamsa (Marriage & dharma)
- **D10** - Dashamsa (Career)
- **D12** - Dwadashamsa (Parents)
- **D16** - Shodashamsa (Vehicles)
- **D20** - Vimshamsa (Spiritual progress)
- **D24** - Chaturvimshamsa (Education)
- **D27** - Saptavimshamsa (Strengths)
- **D30** - Trimshamsa (Misfortunes)
- **D60** - Shashtiamsa (Past karma)

## Contributing 🤝

We welcome contributions to improve Vedic astrology calculations and visualizations!

### Areas We Need Help With

- 🔢 **Calculation Accuracy** - Improve astronomical calculations
- 🎨 **Traditional Designs** - Authentic chart styles from different regions
- 📚 **Yoga Detection** - Add more planetary combination detections
- 🌐 **Internationalization** - Support for Hindi, Sanskrit, Tamil, etc.
- 📊 **Dasha Systems** - Add Chara, Yogini, Ashtottari dashas
- 🏛️ **House Systems** - Implement Sripati, KP system
- 📖 **Documentation** - Add more examples and explanations
- 🧪 **Testing** - Verify calculations against ephemeris

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/yoga-detection`)
3. Commit your changes (`git commit -m 'Add Raj Yoga detection'`)
4. Push to the branch (`git push origin feature/yoga-detection`)
5. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/vedic-astrology-chart.git
cd vedic-astrology-chart

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

### Calculation Resources

- Swiss Ephemeris for accurate planetary positions
- Lahiri ayanamsa standard (or custom)
- Traditional texts: BPHS, Jataka Parijata, Phaladeepika

## Examples

### Basic Rashi Chart
```tsx
<VedicChart 
  planets={siderealPositions} 
  ascendant={lagna}
  style="north"
/>
```

### Navamsa with Nakshatras
```tsx
<VedicChart 
  planets={navamsaPositions}
  divisionalChart="D9"
  showNakshatras={true}
  style="south"
/>
```

### Transit Overlay
```tsx
<VedicChart 
  planets={natalPlanets}
  transits={currentTransits}
  showTransitRing={true}
/>
```

## Traditional Calculations

All calculations follow traditional Vedic astrology principles:
- Sidereal zodiac (not tropical)
- Whole sign houses standard
- True nodes (not mean nodes)
- Traditional planetary dignities

## License

MIT - Use freely in your projects!

## Support

- 🐛 [Report bugs](https://github.com/hew/vedic-astrology-chart/issues)
- 💬 [Ask questions](https://github.com/hew/vedic-astrology-chart/discussions)
- ⭐ [Star the repo](https://github.com/hew/vedic-astrology-chart) if you like it!

## Resources

- [Vedic Astrology Basics](https://www.vedic-astrology.net)
- [Swiss Ephemeris](https://www.astro.com/swisseph/)
- [Lahiri Ayanamsa](https://www.astro.com/swisseph/ayanamsha.htm)

---

**ॐ असतो मा सद्गमय** - Lead us from ignorance to truth

Made with 🕉️ and ❤️ for the Jyotish community