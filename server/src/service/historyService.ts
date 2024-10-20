import fs from 'fs';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
};

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    fs.readFile('../../db/searchHistory.json', 'utf8', (err, data) => {
      if (err) {console.log(`${err}`)};
      return JSON.parse(data);
    });
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    fs.writeFile('../../db/searchHistory.json', JSON.stringify(cities), (err) => {
      if (err) {console.log(`${err}`)};
    });
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    const storedCities = this.read();
    return storedCities;
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: City) {
    const storedCities = await this.read();
    storedCities.push(city);
    return await this.write(storedCities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
