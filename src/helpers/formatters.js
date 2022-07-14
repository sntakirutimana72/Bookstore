export const payloadBeforeDispatch = (item_id, title, author) => ({
  item_id,
  title,
  author,
  category: 'Action',
});

export const payloadWhileDispatch = ({ item_id, ...others }) => ({
  id: item_id,
  current: 0,
  chapters: [],
  ...others,
});
