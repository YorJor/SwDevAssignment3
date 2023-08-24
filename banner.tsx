import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Vaccine Registeration</h1>   
                <h3>for more information please click below</h3>
                <a href="click.html">Click Here</a>           
            </div>
        </div>
    );
}