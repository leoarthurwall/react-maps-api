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
      'X-RapidAPI-Key': 'e0d2821039mshc0f6204214b6301p1c640bjsn377ae7a3b52e',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  

const getPlacesData = async () => {
  try {
    const {data: {data}} = await axios.get(URL, options)

    return data
  } catch (error) {
   console.log(error)
  }
};
