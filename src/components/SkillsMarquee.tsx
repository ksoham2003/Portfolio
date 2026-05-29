'use client';

import React from 'react';
import styles from './SkillsMarquee.module.css';

interface SkillsMarqueeProps {
  skills: string[];
  title?: string;
}

export default function SkillsMarquee({ skills, title }: SkillsMarqueeProps) {
  // Double the skills array for seamless looping
  const doubledSkills = [...skills, ...skills];

  return (
    <div className={styles.marqueeWrapper}>
      {title && <h3 className={styles.marqueeTitle}>{title}</h3>}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {doubledSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <span className={styles.skillText}>{skill}</span>
              <span className={styles.dot}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
