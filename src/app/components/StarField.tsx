import React from 'react';
import styles from './StarField.module.css';

interface Props {
  children: React.ReactNode;
}

const StarField: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.starField}>
      {children}
    </div>
  );
};

export default StarField;
