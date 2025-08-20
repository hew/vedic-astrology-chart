import React, { useState } from 'react';
import { VedicChart } from './components/VedicChart';
import { sampleChartData } from './data';
import { ChartStyle, PlanetDisplayMode } from './types';

function App() {
  const [style, setStyle] = useState<ChartStyle>('north');
  const [planetDisplayMode, setPlanetDisplayMode] = useState<PlanetDisplayMode>('symbols');
  const [showHouseLabels, setShowHouseLabels] = useState(true);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Vedic Astrology Chart Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setStyle('north')}
          style={{ 
            margin: '0 10px', 
            padding: '10px 20px',
            backgroundColor: style === 'north' ? '#007bff' : '#f8f9fa',
            color: style === 'north' ? 'white' : 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          North Indian Style
        </button>
        <button 
          onClick={() => setStyle('south')}
          style={{ 
            margin: '0 10px', 
            padding: '10px 20px',
            backgroundColor: style === 'south' ? '#007bff' : '#f8f9fa',
            color: style === 'south' ? 'white' : 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          South Indian Style
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setPlanetDisplayMode('symbols')}
          style={{ 
            margin: '0 10px', 
            padding: '10px 20px',
            backgroundColor: planetDisplayMode === 'symbols' ? '#28a745' : '#f8f9fa',
            color: planetDisplayMode === 'symbols' ? 'white' : 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Planet Symbols (☉♂♃)
        </button>
        <button 
          onClick={() => setPlanetDisplayMode('names')}
          style={{ 
            margin: '0 10px', 
            padding: '10px 20px',
            backgroundColor: planetDisplayMode === 'names' ? '#28a745' : '#f8f9fa',
            color: planetDisplayMode === 'names' ? 'white' : 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Planet Names (Su, Ma, Ju)
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setShowHouseLabels(!showHouseLabels)}
          style={{ 
            margin: '0 10px', 
            padding: '10px 20px',
            backgroundColor: showHouseLabels ? '#6c757d' : '#f8f9fa',
            color: showHouseLabels ? 'white' : 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showHouseLabels ? 'Hide Sign Numbers' : 'Show Sign Numbers'}
        </button>
      </div>

      <VedicChart
        {...sampleChartData}
        style={style}
        planetDisplayMode={planetDisplayMode}
        showHouseLabels={showHouseLabels}
        width={600}
        height={600}
        showNakshatras={true}
      />
    </div>
  );
}

export default App;