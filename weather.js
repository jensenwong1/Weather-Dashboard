class Weather {
    constructor(city, state) {
      this.apiKey = 'ef2b9604dbb81a334cd7415cbf47d7e1';
      this.city = city;
      this.state = state;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},&appid=${this.apiKey}`);
  
      const responseData = await response.json();
  
      return responseData.current_observation;
    }
  
    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }