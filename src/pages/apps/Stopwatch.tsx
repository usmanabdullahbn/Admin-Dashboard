import AdminSidebar from "../../components/AdminSidebar";
import { useEffect, useState } from "react";

const formatTIme = (timeInSecond: number) => {
  const hours = Math.floor(timeInSecond / 3600);
  const minutes = Math.floor((timeInSecond % 3600) / 60);
  const seconds = timeInSecond % 60;

  const hoursInString = hours.toString().padStart(2, "0");
  const minutesInString = minutes.toString().padStart(2, "0");
  const secondsInString = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minutesInString}:${secondsInString}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resatHandler =()=>{
    setTime(0)
    setIsRunning(false)
  }
  useEffect(() => {
    let intervalID: number;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalID);
    };
  },[isRunning])
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTIme(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>{isRunning?"Stop":"Start"}</button>
            <button onClick={resatHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
