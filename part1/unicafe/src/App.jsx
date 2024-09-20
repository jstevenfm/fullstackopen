import { useState } from "react";

const Btn = ({ onClick, title }) => <button onClick={onClick}>{title}</button>;

const StatisticLine = ({ title, counter }) => (
  <p>
    {title} {counter}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good * 100) / 9 : 0;

  if (all === 0) {
    return <p>No Feedback Given</p>;
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine title="Good" />
            </td>
            <td>
              <StatisticLine counter={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine title="Neutral" />
            </td>
            <td>
              <StatisticLine counter={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine title="Bad" />
            </td>
            <td>
              <StatisticLine counter={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine title="All comments" />
            </td>
            <td>
              <StatisticLine counter={all} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine title="Average" />
            </td>
            <td>
              <StatisticLine counter={average} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine title="Positive" />
            </td>
            <td>
              <StatisticLine counter={positive} />
            </td>
          </tr>
        </tbody>
      </table>
      {/* */}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Btn onClick={() => setGood(good + 1)} title="Good" />
      <Btn onClick={() => setNeutral(neutral + 1)} title="Neutral" />
      <Btn onClick={() => setBad(bad + 1)} title="Bad" />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
