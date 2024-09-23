import React from "react";
import styles from "./Investors.module.css";
import { bridgeslogo, IClogo, rcorp } from "../../assets";
import { useNavigate } from "react-router-dom";

const Investors = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects/rcorp");
  };
  return (
    <>
      <h1 className={styles.h1text}>PROJECTS</h1>
      <div className={styles.invest_container}>
        <div className={styles.grid1}>
          <div className={styles.innovative_container}>
            <img src={rcorp} className={styles.innovative_image} />
            <p>
              <strong>
                Empowering Rural Communities for Holistic Healing:
              </strong>
              <br />
              Our BRIDGES & Innovative Pathway programs address Substance Use
              Disorder (SUD), Opioid Use Disorder (OUD), and Co-Occurring
              Disorders (COD) by leveraging Community Health Workers (CHWs) and
              Peer Recovery Coaches. Through outreach, emotional support, and
              crisis intervention, we build a supportive network that fosters
              lasting recovery. By integrating cultural competency and family
              involvement, the program aims to reduce stigma, improve mental
              health outcomes, and create resilient communities.
            </p>
            <button onClick={handleClick} className={styles.btn_info}>
              View Info
            </button>
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.bridges_container}>
            <img src={IClogo} className={styles.bridges_img} />
            <p>
              <strong>Rural Health Care Services Outreach Program:</strong>
              <br /> The Innovative Communities program is a transformative
              initiative under the Rural Health Care Services Outreach Program,
              aimed at improving healthcare delivery in rural areas. By
              integrating systematic screening, referral services, and community
              navigation, the program addresses both medical and social
              determinants of health. Through this holistic approach, it
              connects Medicare and Medicaid beneficiaries to essential
              community services, reducing healthcare costs and improving
              outcomes. With a focus on care coordination, workforce
              development, and enhanced data sharing, the program is creating
              sustainable healthcare solutions for vulnerable populations in
              rural communities.
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
