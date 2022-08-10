import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {IoMdSunny,IoMdRainy,IoMdCloudy,IoMdSnow,IoMdThunderstorm,IoMdSearch} from 'react-icons/io';
import {BsCloudHaze2Fill,BsCloudDrizzleFill,BsEye,BsWater,BsThermometer,BsWind} from 'react-icons/bs';
import {TbTemperatureCelsius} from 'react-icons/tb';
import {ImSpinner8} from 'react-icons/im';

//Api Key
const API_KEY = 'f5221c5190cefef49d00220e8ddcf494';

const App = () => {
  const [data,setData] = useState(null);
  const [location,setLocation] = useState('Bucharest');

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    
    axios.get(url).then((res) => {
      setData(res.data);
    });
  },[location]);

  // console.log(data);

  if(!data){
    return(
      <div>
        <div>
          <ImSpinner8 className='text-5xl animate-spin'/>
        </div>
      </div>
    )
  }

  let icon;
  console.log(data.weather[0].main);

  switch(data.weather[0].main){
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy />;
      break;
    case 'Clear':
      icon = <IoMdSunny />;
      break;
    case 'Dizzle':
      icon = <BsCloudDrizzleFill />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }

  return <div className='text-6x1'>{icon}</div>;
};

export default App;
