import React from "react";
import styles from "./Rating.module.css";

const Rating = (props) => {

  const roundRating = () => {
    let result = 0;
    let { rating } = props;
    if(!rating) return result;
    rating = rating * 100;
    result = (rating - rating % 100) / 100;
    let remain = rating % 100;
    if(remain > 0) {
      if(remain >= 50) {
        if(remain >= 75) {
          result += 0.75;
        } else {
          result += 0.5;
        }
      } else result += 0.25;
    }

    return result;
  };

  return (
    <div className={styles["rating-holder"]}>
      <div
        className={styles["c-rating"] + " " + styles["c-rating--big"]}
        data-rating-value={roundRating()}
      >
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Rating;
