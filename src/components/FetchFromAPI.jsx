// import axios from 'axios';

// const BASE_URL = 'https://getrit-furniture-store.p.rapidapi.com/https//getrit.com/API/Token';

// const options = {
//   method: 'GET',
//   // url: BASE_URL,
//   params: {
//     Token: 'Demo'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.FURNITURE_RAPID_API_KEY,
//     'X-RapidAPI-Host': '/getrit-furniture-store.p.rapidapi.com'
//   }
// };


// export const fetchFromAPI = async () => {
//   const { apiResponse } = await axios.get(BASE_URL, options)
//   return apiResponse;
// }
// // const apiResponse = () => {
// //     try {
// //         const response = await request(options);
// //         console.log(response.data);
// //     } catch (error) {
// //         console.error(error);
// //     }

// // }

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token',
  params: {Token: 'Demo'},
  headers: {
    'X-RapidAPI-Key': '1467c4bcd6mshc6c8234c697fd66p1380b0jsn8f6c7feee248',
    'X-RapidAPI-Host': 'getrit-furniture-store.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}