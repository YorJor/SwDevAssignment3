import styles from "./topMenu.module.css";
import Image from "next/image";
import TopMenuItem from './TopMenuItem';
import Link from "next/link";

export default function TopMenu() {
  return (
    <div className={styles.menucontainer}>
      <div className={styles.logocontainer}>
        <Image src={'/img/logo.png'} className={styles.logoimg}
         alt='logo' layout="fixed" width={0} height={0} sizes="100%"/>
      </div>
        <div><TopMenuItem title= 'Bookings' pageRef='/bookings'/></div>
    </div>
  );
}