const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '38cc5bf868mshb49c4987052300ap1e8192jsn82c8d587100f',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const GEO_API_URL = url;
export const geoApiOptions = options;
