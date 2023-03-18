import React from 'react';
import styles from './StarField.module.css';

interface Props {
  x: number;
  y: number;
}

const Star: React.FC<Props> = ({ x, y }) => {
  const style = {
    transform: `translate(${x}px, ${y}px)`
  };

  return (
    <div className={styles.star} style={style} />
  );
};

export default Star;

