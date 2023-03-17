import React from 'react';
import { Copy } from 'react-feather';
import styles from './TwitterPage.module.css';
function TwitterPage() {
  return (
    <div className={styles.container}>
    <div className={styles.mainLeft}>
      <div className={styles.topSection}>
        <label>What's in your mind today ?</label>
        <textarea placeholder="Writer here..."/>
        <button>Generate Prompts</button>
        </div>
        <div className={styles.prompts}>
        <div className={styles.prompt}>
         <p className={styles.text}>This is some text.</p>
         <div className={styles.bottom}>
          <div className='icon'>
            <Copy/>
          </div>
          </div> 
        </div>
        </div>
        </div>
        <div className={styles.mainRight}></div>
 </div>
  );
}

export default TwitterPage;
