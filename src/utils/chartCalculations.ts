import { PlanetaryPositions, HouseInfo, PlanetDisplayMode } from "../types";
import { degreeToSign, degreeToNakshatra, normalizeDegree } from "./astroUtils";

// Helper function to normalize Rahu-Ketu opposition
export function normalizePlanetaryPositions(
  planets: PlanetaryPositions
): PlanetaryPositions {
  const normalized = { ...planets };

  if (normalized.Rahu !== undefined) {
    // Ensure Ketu is exactly 180° opposite to Rahu
    normalized.Ketu = (normalized.Rahu + 180) % 360;
  }

  return normalized;
}

export function calculateHouses(
  planets: PlanetaryPositions,
  ascendant: number
): HouseInfo[] {
  // Normalize planetary positions first
  const normalizedPlanets = normalizePlanetaryPositions(planets);

  const houses: HouseInfo[] = [];

  // Whole sign system: each house is exactly 30 degrees starting from ascendant sign
  const ascendantSignStart = Math.floor(ascendant / 30) * 30;

  // Initialize all 12 houses using whole sign system
  for (let i = 1; i <= 12; i++) {
    const houseSignStart = normalizeDegree(ascendantSignStart + (i - 1) * 30);
    houses.push({
      number: i,
      sign: degreeToSign(houseSignStart),
      planets: [],
    });
  }

  // Place planets in houses using whole sign system
  Object.entries(normalizedPlanets).forEach(([planetName, degree]) => {
    const planetSignStart = Math.floor(degree / 30) * 30;
    const ascendantSignIndex = Math.floor(ascendantSignStart / 30);
    const planetSignIndex = Math.floor(planetSignStart / 30);

    // Calculate house number based on sign difference
    let houseNumber = ((planetSignIndex - ascendantSignIndex + 12) % 12) + 1;

    const house = houses.find((h) => h.number === houseNumber);
    if (house) {
      house.planets.push(planetName);
    }
  });

  return houses;
}

export function getPlanetSymbol(planetName: string): string {
  const symbols: { [key: string]: string } = {
    Sun: "☉",
    Moon: "☽",
    Mars: "♂",
    Mercury: "☿",
    Jupiter: "♃",
    Venus: "♀",
    Saturn: "♄",
    Rahu: "☊",
    Ketu: "☋",
  };
  return symbols[planetName] || planetName.substring(0, 1);
}

export function getPlanetName(planetName: string): string {
  const names: { [key: string]: string } = {
    Sun: "Su",
    Moon: "Mo",
    Mars: "Ma",
    Mercury: "Me",
    Jupiter: "Ju",
    Venus: "Ve",
    Saturn: "Sa",
    Rahu: "Ra",
    Ketu: "Ke",
  };
  return names[planetName] || planetName.substring(0, 1);
}

export function getPlanetDisplay(
  planetName: string,
  mode: PlanetDisplayMode = "symbols"
): string {
  return mode === "symbols"
    ? getPlanetSymbol(planetName)
    : getPlanetName(planetName);
}

export function formatDegree(degree: number): string {
  const degreeWithinSign = degree % 30;
  const wholeDegrees = Math.floor(degreeWithinSign);
  // Round to nearest minute to avoid floating-point precision issues
  const minutes = Math.round((degreeWithinSign - wholeDegrees) * 60);

  // Handle the case where rounding gives us 60 minutes
  if (minutes >= 60) {
    return `${wholeDegrees + 1}°00'`;
  }

  return `${wholeDegrees}°${minutes.toString().padStart(2, "0")}'`;
}

export function getPlanetDegree(
  planetName: string,
  planets: PlanetaryPositions
): string {
  // Normalize planets first to ensure Rahu-Ketu are exactly opposite
  const normalizedPlanets = normalizePlanetaryPositions(planets);
  let degree = normalizedPlanets[planetName as keyof PlanetaryPositions];

  // Special handling for Rahu-Ketu to ensure identical degree/minute display
  if (planetName === "Ketu" && normalizedPlanets.Rahu !== undefined) {
    const rahuDegree = normalizedPlanets.Rahu;
    // Calculate Ketu's degree using Rahu's exact position
    degree = (rahuDegree + 180) % 360;
  }

  return formatDegree(degree);
}
