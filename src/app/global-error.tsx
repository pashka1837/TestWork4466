"use client";

import "bootstrap/dist/css/bootstrap.css";
import styles from "@/Styles/Base.module.scss";

type GlobalErrorProps = {
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div
          className={`${styles.outer} container-fluid p-2 p-md-3 p-lg-4 text-center`}
        >
          <h4>Что-то пошло не так!</h4>
          <button className="btn btn-warning" onClick={() => reset()}>
            Попробовать еще раз
          </button>
        </div>
      </body>
    </html>
  );
}
