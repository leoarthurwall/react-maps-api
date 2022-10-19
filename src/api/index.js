import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
  // const URL = `https://travel-dvisor.p.rapidapi.com/${type}/list-in-boundary`;
  const URL = "https://travel-dvisor.p.rapidapi.com/attractions/list-in-boundary";
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RESTURANT_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data);    // ***
    console.error(err.response.status);  // ***
    console.error(err.response.headers); // ***
  } 
};
