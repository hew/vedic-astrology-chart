// Planet color mapping based on traditional Vedic astrology
export const getPlanetColor = (planetName: string): string => {
  const colors: { [key: string]: string } = {
    Sun: '#FF0000', // Red
    Mars: '#CC0000', // Dark Red (variation of red)
    Moon: '#000000', // Black
    Mercury: '#008000', // Green
    Venus: '#FF69B4', // Hot Pink
    Jupiter: '#FF8C00', // Orange
    Saturn: '#4B0082', // Indigo (traditional Saturn color)
    Rahu: '#800080', // Purple (traditional Rahu color)
    Ketu: '#8B4513', // Saddle Brown (traditional Ketu color)
    Uranus: '#16a085',
    Neptune: '#2980b9',
    Pluto: '#7f8c8d',
  };
  return colors[planetName] || '#d2691e'; // Default orange fallback
};

export const formatAscendantDegree = (degree: number): string => {
  const wholeDegrees = Math.floor(degree % 30);
  const minutes = Math.floor(((degree % 30) - wholeDegrees) * 60);
  return `${wholeDegrees}°${minutes.toString().padStart(2, '0')}'`;
};

export const getAscendantSign = (degree: number): string => {
  const signs = [
    'Ari',
    'Tau',
    'Gem',
    'Can',
    'Leo',
    'Vir',
    'Lib',
    'Sco',
    'Sag',
    'Cap',
    'Aqu',
    'Pis',
  ];
  const signIndex = Math.floor(degree / 30);
  return signs[signIndex] || 'Ari';
};
