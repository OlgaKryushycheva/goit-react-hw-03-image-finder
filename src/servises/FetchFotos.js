const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36367044-f4fa31148b8b4325aabe9da60';
const OTHER_PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';
export const per_page = 12;

export const FetchFotos = (textSearch, page) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${textSearch}&page=${page}&${OTHER_PARAMS}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(`Нет фото с названием ${textSearch}`);
    }
    return response.json();
  });
};
