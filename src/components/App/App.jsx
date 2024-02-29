import { useState, useEffect } from "react";

import Description from "../Description/Description";

import Options from "../Options/Option";

import Feedback from "../Feedback/Feedback";

import Notification from "../Notification/Notification";

function App() {
  const [feedbackOptions, setFeedbackOptions] = useState(() => {
    const feedbackLS = window.localStorage.getItem("savedFeedback");
    return feedbackLS !== null
      ? JSON.parse(feedbackLS)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "savedFeedback",
      JSON.stringify(feedbackOptions)
    );
  }, [feedbackOptions]);

  const updateFeedback = (feedbackType) => {
    feedbackType === "reset"
      ? setFeedbackOptions({ good: 0, neutral: 0, bad: 0 })
      : setFeedbackOptions({
          ...feedbackOptions,
          [feedbackType]: feedbackOptions[feedbackType] + 1,
        });
  };

  const totalFeedback =
    feedbackOptions.good + feedbackOptions.neutral + feedbackOptions.bad;

  return (
    <div>
      <Description />
      <Options onFeedbackOptions={updateFeedback} total={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          type={{ ...feedbackOptions }}
          total={totalFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </div>
  );
}
export default App;
