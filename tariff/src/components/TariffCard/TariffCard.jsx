import React from "react";
import styles from './tariffCard.module.css';

function TariffCard({name, rate, speed, content, color, nextcolor, isSelected, onSelect}) {
    const handleClick = () => {
        onSelect(name);
    };
    return (
        <div className={`${styles.tariff} ${isSelected ? styles.selected :""}`}
        onClick = {handleClick}>
            <div className={styles.tariff_name} style={{backgroundColor:color}}><h1>{name}</h1></div>
            <div className={styles.tariff_rate} style={{backgroundColor:nextcolor}}>{rate} руб в месяц</div>
            <div className={styles.tariff_speed}>до {speed} Мбит/сек</div>
            <div className={styles.tariff_content}>{content}</div>
        </div>
    )
}
export default TariffCard;