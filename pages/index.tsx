import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
const Home: NextPage = () => {
  const [workingDays, setWorkingDays] = useState(0);
  const [absences, setAbsences] = useState(0);
  const [attendance, setAttendance] = useState(0);

  const handleWorkingDaysChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkingDays(parseInt(event.target.value, 10));
  };

  const handleAbsencesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAbsences(parseInt(event.target.value, 10));
  };

  const calculateAttendance = () => {
    const totalDays = workingDays * 0.75;
    const attendedDays = workingDays - absences;
    setAttendance((attendedDays / totalDays) * 100);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Attendance Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Attendance Calculator</h1>
        <h1>Attendance Calculator</h1>
        <label>
          Total Working Days:
          <input
            type="number"
            value={workingDays}
            onChange={handleWorkingDaysChange}
          />
        </label>
        <br />
        <label>
          Total Absences:
          <input
            type="number"
            value={absences}
            onChange={handleAbsencesChange}
          />
        </label>
        <br />
        <p>Attendance: {attendance.toFixed(2)}%</p>
        <button onClick={calculateAttendance}>Calculate Attendance</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
