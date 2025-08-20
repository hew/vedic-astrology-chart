export const ZODIAC_SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Moola",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

export function degreeToSign(degree: number): string {
  const signIndex = Math.floor(degree / 30);
  return ZODIAC_SIGNS[signIndex] || ZODIAC_SIGNS[0];
}

export function degreeToHouse(degree: number, ascendant: number): number {
  let house = Math.floor((degree - ascendant + 360) / 30) + 1;
  if (house > 12) house -= 12;
  if (house < 1) house += 12;
  return house;
}

export function degreeToNakshatra(degree: number): string {
  const nakshatraIndex = Math.floor(degree / 13.333333);
  return NAKSHATRAS[nakshatraIndex] || NAKSHATRAS[0];
}

export function normalizeDegree(degree: number): number {
  while (degree < 0) degree += 360;
  while (degree >= 360) degree -= 360;
  return degree;
}
