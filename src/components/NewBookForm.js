const NewBookForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input type="text" name="title" placeholder="Book Title" required />
      <input type="text" name="author" placeholder="Book Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default NewBookForm;
