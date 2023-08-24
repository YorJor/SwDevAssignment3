import styles from './productCard.module.css'
import Image from 'next/image';

export default function ProductCrad() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card.jpg'}
                    alt='product'
                    fill={true}
                    objectFit='cover'
                />
            </div>
            <div className={styles.cardtext}>
                <div>Vaccine available : Pfizer</div>
                <div>Approved in 149 countries</div>
                <div>100 trials in 31 countries</div>
            </div>
        </div>
    );
}
