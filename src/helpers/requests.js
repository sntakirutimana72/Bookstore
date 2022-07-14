import axios from 'axios';

const post = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

const remove = (url) => axios.delete(url);

export default {
  post,
  delete: remove,
};
