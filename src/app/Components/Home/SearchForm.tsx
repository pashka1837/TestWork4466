type SearchFormProps = {
  searchAction: (payload: FormData) => void;
  pending: boolean;
};

export function SearchForm({ searchAction, pending }: SearchFormProps) {
  return (
    <form
      action={searchAction}
      className="container d-flex align-items-end justify-content-center gap-3"
    >
      <div className={`vstack `}>
        <label htmlFor="search" className="form-label">
          Название города
        </label>
        <input
          required
          pattern={`^[a-zA-Z\u0401\u0451\u0410-\u044f]{1,10}[\\s\\-]?[a-zA-Z\u0401\u0451\u0410-\u044f]{1,10}$`}
          type="text"
          className="form-control"
          id="search"
          name="search"
          aria-describedby="искать город"
        />
      </div>
      <button
        disabled={pending}
        type="submit"
        className={`btn btn-outline-primary align-baseline d-flex ${
          pending ? "justify-content-between" : "justify-content-center"
        }  align-items-center`}
        style={{ width: "100px" }}
      >
        {pending && (
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
        )}
        <span role="status">Поиск</span>
      </button>
    </form>
  );
}
