const fetchMission = () => {
  const missions = {
    data: [
      {
        id: 1,
        name: 'Thaicom',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: false,
      },
      {
        id: 2,
        name: 'Telstar',
        description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        reserved: false,
      },
      {
        id: 3,
        name: 'Iridium NEXT',
        description: 'In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares.',
        reserved: false,
      },
      {
        id: 4,
        name: 'Commercial Resupply Services"',
        description: 'Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft.Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        reserved: false,
      },
    ],
  };
  return missions.data;
};

export default fetchMission;
