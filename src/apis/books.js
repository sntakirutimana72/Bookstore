import requests from '../helpers/requests';

const API_BASE_URL = (
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi'
  + '/apps/zvvNaAVSIEXCyYVENkt7/books/'
);

const create = async (meta) => {
  const { status } = await requests.post(API_BASE_URL, meta);
  return status === 201;
};

const remove = async (id) => {
  const { status } = await requests.delete(`${API_BASE_URL}${id}`);
  return status === 201;
};

const getAll = async () => {
  const response = await fetch(API_BASE_URL);
  if (response.ok) {
    try {
      const result = await response.json();
      if (Object.keys(result).length === 0) {
        throw Error;
      }
      return result;
    } catch {
      throw new Error('Not Found');
    }
  }
  throw new Error('Not Found');
};

export default {
  create,
  getAll,
  delete: remove,
};
