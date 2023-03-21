import React, { useEffect } from 'react';
import { Copy } from 'react-feather';
import styles from './TwitterPage.module.css';
import TwitterCard from "../TwitterCard.js/TwitterCard";
import { generateImageForTweet, generatePrompts } from '../../apis/twitter';
function TwitterPage() {
  useEffect(()=>{
   generateImageForTweet('Earth is flat')
  },[]);
  return (
    <div className={styles.container}>
    <div className={styles.mainLeft}>
      <div className={styles.topSection}>
        <label>What's in your mind today ?</label>
        <textarea placeholder="Writer here..."/>
        <button className='button'>Generate Prompts</button>
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
        
        <div className={styles.mainRight}>
        <p className={styles.heading}>Your tweet</p>
        <p className={styles.btn}>+Write a tweet</p>
        <div className={styles.cards}>
          <TwitterCard/>
        <TwitterCard/>
        <TwitterCard/>
        </div>
    </div>
   </div>
  );
}

export default TwitterPage;
