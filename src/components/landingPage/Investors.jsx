import React from "react";
import styles from "./Investors.module.css";
import { bridgeslogo, IClogo, rcorp } from "../../assets";

const Investors = () => {
  return (
    <>
    <h1 className={styles.h1text}>PROJECTS</h1>
    <div className={styles.invest_container}>
      <div className={styles.grid1}>
        <div className={styles.innovative_container}>
          <img src={rcorp} className={styles.innovative_image} />
          <p>
            <strong>Innovative Pathways:</strong> Offers personalized support for recovery from
            substance use, mental health, and other challenges, combining peer
            support with essential services like housing and healthcare. Success
            stories highlight life stabilization through emotional and practical
            support.
          </p>
          <button className={styles.btn_info}>View Info</button>
        </div>
      </div>
      <div className={styles.grid2}>
        <div className={styles.bridges_container}>
          <img src={IClogo} className={styles.bridges_img} />
          <p>
            <strong>BRIDGES:</strong> Focuses on youth and justice-involved populations, aiding
            successful reentry into the community by addressing social
            determinants of health and providing tailored support.
          </p>
          <button className={styles.btn_info}>View Info</button>
        </div>
      </div>
      {/* <div className={styles.title}>
        <h1 id={styles.h1_year}>2024</h1>
      </div> */}
    </div>
    </>
  );
};

export default Investors;
