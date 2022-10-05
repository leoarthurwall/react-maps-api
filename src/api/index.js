import axios from "axios";

const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    url: URL,
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
    
    }
  };
  

const getPlacesData = async () => {
  try {
    const response = await axios.get(URL, options)
  } catch (error) {
   
  }
};
