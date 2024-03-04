import css from "./Feedback.module.css";

const Feedback = ({ type, total, positive }) => {
  return (
    <>
      <ul className={css.list}>
        <li>Good: {type.good}</li>
        <li>Neutral: {type.neutral}</li>
        <li>Bad: {type.bad}</li>
      </ul>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Positive: {positive}%</p>
    </>
  );
};
export default Feedback;
