class marvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/characters';
  _apiKey = '&apikey=87ce7842b3c316a197df94875809486c';
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
  };

  getAllCharacter = () => {
    return this.getResource(`${this._apiBase}?limit=9&offset=210&${this._apiKey}`);
  };

  getCharacter = (id) => {
    return this.getResource(`${adres}/${id}?&${this._apiKey}`);
  };
};

export default marvelService;

