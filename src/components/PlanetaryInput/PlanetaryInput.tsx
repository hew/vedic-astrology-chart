import React, { useState } from 'react';

const PlanetaryInput: React.FC<{ onSubmit: (data: { planetaryPositions: string; ascendant: string; ayanamsa: string }) => void }> = ({ onSubmit }) => {
  const [planetaryPositions, setPlanetaryPositions] = useState('');
  const [ascendant, setAscendant] = useState('');
  const [ayanamsa, setAyanamsa] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ planetaryPositions, ascendant, ayanamsa });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Planetary Positions:
          <input
            type="text"
            value={planetaryPositions}
            onChange={(e) => setPlanetaryPositions(e.target.value)}
            placeholder="e.g. Sun: 10°, Moon: 20°"
          />
        </label>
      </div>
      <div>
        <label>
          Ascendant:
          <input
            type="text"
            value={ascendant}
            onChange={(e) => setAscendant(e.target.value)}
            placeholder="e.g. Aries"
          />
        </label>
      </div>
      <div>
        <label>
          Ayanamsa:
          <input
            type="text"
            value={ayanamsa}
            onChange={(e) => setAyanamsa(e.target.value)}
            placeholder="e.g. 24°"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlanetaryInput;