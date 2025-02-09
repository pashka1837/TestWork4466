import { useEffect } from "react";

type ErrorToastProps = {
  formState: {
    errorMsg: string | null;
    data: any;
  };
};

export function ErrorToast({ formState }: ErrorToastProps) {
  useEffect(() => {
    async function showToast() {
      const { Toast } = await import("bootstrap");
      const myToast = new Toast("#errorToast");
      myToast.show();
    }
    showToast();
  }, [formState]);
  return (
    <div className="toast-container position-absolute top-0 start-50 translate-middle-x pt-4">
      <div
        id="errorToast"
        className="toast text-bg-danger"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{formState.errorMsg}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}
