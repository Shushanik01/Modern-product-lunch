import styles from './NavBar.module.css';
import slack from '~/assets/slack.svg'

export function NavBar(){

    return(
        <nav className={` container ${styles.nav}`}>
            <a href="/" className={styles.navbar_logo}>Area</a>
            <ul className={`${styles.nav_links} text-link`}>

                <li>Benefits</li>
                <li>Specifications</li>
                <li>How-to</li>
                <li>Contact Us</li>
            </ul>
            <button className='btn btn-secondary'>Learn More <img src={slack}/></button>
        </nav>
    )
}