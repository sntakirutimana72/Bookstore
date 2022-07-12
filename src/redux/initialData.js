const initialState = {
  books: [
    {
      id: 'book@1',
      author: 'Author 1',
      title: 'Title 1',
      genre: 'Drama',
      current: 1,
      chapters: [
        'French Revolution',
        'European Football Marketing',
        'American Civil War',
        'World War II Impacts',
        'Modern Civilization',
      ],
    },
    {
      id: 'book@2',
      author: 'Author 2',
      title: 'Title 2',
      genre: 'Action',
      current: 4,
      chapters: [
        'French Revolution',
        'European Football Marketing',
        'American Civil War',
        'World War II Impacts',
        'Modern Civilization',
      ],
    },
    {
      id: 'book@3',
      author: 'Author 3',
      title: 'Title 3',
      genre: 'Fantasy',
      current: 3,
      chapters: [
        'French Revolution',
        'European Football Marketing',
        'American Civil War',
        'World War II Impacts',
        'Modern Civilization',
      ],
    },
  ],
  categories: [],
};

export default initialState;
