const storage = {
  store: {
    books: [
      {
        author: 'Some Author',
        title: 'Some Title',
        genre: 'Some Genre',
        current: 3,
        chapters: [
          'French Revolution',
          'European Football Marketing',
          'American Civil War',
          'World War II Impacts',
          'Modern Civilization',
        ],
        chapter() {
          return `Chapter ${this.current}: ${this.chapters[this.current - 1]}`;
        },
        progress() {
          return ((this.current - 1) / this.chapters.length) * 100;
        },
      },
    ],
  },
  getItems() {
    return this.store.books;
  },
  setItems(...books) {
    this.store.books = books;
  },
};

export default storage;
