import styles from "@/styles/Base.module.scss";

export default function NotFound() {
  return (
    <div
      className={`${styles.outer} container-fluid p-2 p-md-3 p-lg-4 text-center`}
    >
      <h4>Такой старницы не существует</h4>
    </div>
  );
}
