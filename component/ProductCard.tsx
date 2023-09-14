import styles from './productCard.module.css'
import Image from 'next/image';

export default function ProductCard({ vacName, imgSrc } : { vacName: string, imgSrc: string }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                    alt='Product Picture' 
                    fill={true} 
                    className='object-cover rounded-t-lg'/>
            </div> 
            <div className={styles.cardtext}>{vacName}</div>
        </div>
    );
}