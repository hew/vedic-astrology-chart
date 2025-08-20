import React from 'react';

interface ChartControlsProps {
  selectedStyle: 'north' | 'south';
  onStyleChange: (style: 'north' | 'south') => void;
  showNakshatras: boolean;
  onToggleNakshatras: () => void;
}

const ChartControls: React.FC<ChartControlsProps> = ({
  selectedStyle,
  onStyleChange,
  showNakshatras,
  onToggleNakshatras,
}) => {
  return (
    <div>
      <h3>Chart Controls</h3>
      <div>
        <label>
          <input
            type="radio"
            value="north"
            checked={selectedStyle === 'north'}
            onChange={() => onStyleChange('north')}
          />
          North Indian
        </label>
        <label>
          <input
            type="radio"
            value="south"
            checked={selectedStyle === 'south'}
            onChange={() => onStyleChange('south')}
          />
          South Indian
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showNakshatras}
            onChange={onToggleNakshatras}
          />
          Show Nakshatras
        </label>
      </div>
    </div>
  );
};

export default ChartControls;
