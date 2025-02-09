export function Loader() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      {/* // <div className="position-absolute"> */}
      <div
        className="spinner-border text-primary spinner-border-xl"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
