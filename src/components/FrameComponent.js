import styles from "../style/FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.professionalExperienceParent}>
        <div className={styles.professionalExperience}>
          Professional Experience
        </div>
        <img className={styles.frameChild} alt="" src="/vector-14.svg" />
      </div>
      <div className={styles.peoplesoftMarch2021Container}>
        <ul className={styles.peoplesoftMarch2021ToPres}>
          <li>HTC Global Service November 2020 to Present </li>
          <p>Served as the senior point of contact for an insurance-based client, State Farm, ensuring timely delivery of customer 
            information and implementing the latest application versions with optimal UI design to minimize client downtime.</p>
            <div>
            <ul className={styles.peoplesoftMarch2021ToPres}>
          <li>PeopleSoft: March 2021 to Present</li>
          <p>Within the PeopleSoft environment, I focused on providing support for the Purchasing and Travel Expense applications, 
            catering to the needs of State Farm's procurement and expense management processes. The Purchasing application facilitated
            the creation of requisitions,purchase orders, and streamlined processes through automation, while the Travel and Expense application
            enhanced efficiency and control through flexible payment options and integration capabilities.</p>
            </ul>
            </div>
        </ul>
      </div>
      
      {/* <div className={styles.peoplesoftMarch2021Container}>
        <ul className={styles.peoplesoftMarch2021ToPres}>
          <li>Software Engineer HTC Global Service</li>
        </ul>
      </div>
      <div className={styles.peoplesoftMarch2021Container}>
        <ul className={styles.peoplesoftMarch2021ToPres}>
          <li>Vector India | Jul 2019 - Jan 2020</li>
        </ul>
      </div>
      <div className={styles.peoplesoftMarch2021Container}>
        <ul className={styles.peoplesoftMarch2021ToPres}>
          <li>Guvi | Jan 2023 – Jun 2023</li>
        </ul>
      </div> */}
    </div>
  );
};

export default FrameComponent;
