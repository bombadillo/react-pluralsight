import React from 'react';

import styles from './card.css';

export default (props) => {
    return (
        <div className={'clearfix ' + styles.container}>
            <img className={styles.img} src={props.avatar_url} />
            <div className={styles.card}>
                <div className={styles.name}>{props.name}</div>
                <div>{props.public_repos}</div>
            </div>

        </div>
    )

}