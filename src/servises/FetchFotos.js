import axios from 'axios';

const API_KEY = '36367044-f4fa31148b8b4325aabe9da60';
export const PER_PAGE = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchFotos = async (textSearch, page) => {
  const params = {
    q: textSearch,
    key: API_KEY,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  };

  const response = await axios.get('/', {
    params,
  });

  console.log(response.data);
  return response.data;
};

// простой fetch ========================

// export const FetchFotos = (textSearch, page) => {
//   return fetch(
//     `${BASE_URL}?key=${API_KEY}&q=${textSearch}&page=${page}&${OTHER_PARAMS}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(`Нет фото с названием ${textSearch}`);
//     }
//     return response.json();
//   });
// };
