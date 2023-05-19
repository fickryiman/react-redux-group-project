const fetchRocket = () => {
  const rockets = {
    data: [
      {
        id: 1,
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        reserved: false,
      },
      {
        id: 2,
        name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        reserved: false,
      },
      {
        id: 3,
        name: 'Falcon Heavy',
        description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        reserved: false,
      },
      {
        id: 4,
        name: 'Starship',
        description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        reserved: false,
      },
      {
        id: 5,
        name: 'Rocky Balboa',
        description: 'Street Fighter to become the boxing championship.',
        reserved: false,
      },
    ],
  };
  return rockets.data;
};

export default fetchRocket;
