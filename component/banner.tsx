import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.png'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-red'>Looking for Vaccine?</h1>   
                <h3 className='text-lg'>Contact us</h3>          
            </div>
        </div>
    );
}