import React from "react";
import styles from './tariffCard.module.css';

function TariffCard(props) {
    const {name, rate, speed, content} = props;
    return (
        <div className= {styles.tariff}>
            <div className={styles.tariff_name}><h1>{name}</h1></div>
            <div className={styles.tariff_rate}>{rate} руб в месяц</div>
            <div className={styles.tariff_speed}>до {speed} Мбит/сек</div>
            <div className={styles.tarif_content}>{content}</div>
        </div>
    )
}
export default TariffCard;