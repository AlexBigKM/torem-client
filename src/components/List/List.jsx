import React from 'react';

import styles from './style.module.css';

const List = ({ title, items = [] }) => {
    return (
        <div className={styles.listWrapper}>
            <div className={styles.listTitle}>{title}</div>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;