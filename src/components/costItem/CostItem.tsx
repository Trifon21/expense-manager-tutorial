// import React from 'react';
import styles from './CostItem.module.scss'

function CostItem() {
  return (<div className={styles.costItem}>
      <div>март 2021 12</div>
      <div className={styles.description}>
        <div className={styles.price}>$999.99</div>
        <h2 className={styles.title}>Холодильник</h2>
      </div>
    </div>
  );
}

export default CostItem;