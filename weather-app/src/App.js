import './App.css';
import { WeatherBox } from './components/WeatherBox';
import { createContext, useState } from 'react';
import { useGeolocation } from './api/useGeolcation';


const CurrentLocationContext = createContext(null);

function App() {
  
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(()=>{
    const initialLocation=useGeolocation();
    setCurrentLocation(initialLocation);
  })

  return (
    <div className="App">
      <h1>Hello World</h1>
      <CurrentLocationContext.Provider 
        value={{
          currentLocation,
          setCurrentLocation,
        }}
      >
        {// <Header/> 
        }
        <WeatherBox currentLocation={currentLocation}/>

      </CurrentLocationContext.Provider>
    </div>
  );
}

export default App;
