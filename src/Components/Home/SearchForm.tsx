export function SearchForm() {
  return (
    <form className="container-sm d-flex align-items-end gap-3 ">
      <div className="container">
        <label htmlFor="search" className="form-label">
          Название города
        </label>
        <input
          required
          pattern={`^[a-zA-Z]{1,10}[\\s\\-]?[a-zA-Z]{1,10}$`}
          type="text"
          className="form-control"
          id="search"
          name="search"
          aria-describedby="искать город"
        />
      </div>
      <button type="submit" className="btn btn-primary align-baseline">
        Поиск
      </button>
    </form>
  );
}
