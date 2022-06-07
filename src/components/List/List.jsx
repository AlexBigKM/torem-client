import React, {useState} from 'react';

import styles from './style.module.css';

const List = ({title, children}) => {
    const [items, setItems] = useState([]);
    return (
        <div className={styles.listWrapper}>
            <div>{title}</div>
            <ul className={styles.list}>
                {items.map(item => (
                    {children}
                ))}
            </ul>
        </div>
    );
};

export default List;