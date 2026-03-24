import styles from './header.module.css';
import Ipad from '~/assets/Ipad.png'
export function Header() {

    return (
        <div className="container">
            <h1 className="text-display">Browse everything.</h1>
            <div className={styles.wrapper}>
                <div className={styles.bg}></div>
                <img src={Ipad} alt='Area dashboard' className={styles.laptop_img}/>
            </div>
        </div>
    )
}