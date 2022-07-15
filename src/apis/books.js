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
    return response.json();
  }
  throw Error;
};

export default {
  create,
  getAll,
  delete: remove,
};
