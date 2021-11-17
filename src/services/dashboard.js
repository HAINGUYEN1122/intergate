import { apiBase } from './instance';

function getNews() {
  return apiBase({
    url: 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc',
    method: 'GET',
  });
}

const dashboardService = {
  getNews,
};

export default dashboardService;
