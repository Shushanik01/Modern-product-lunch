import styles from './NavBar.module.css';
import slack from '~/assets/slack.svg'

export function NavBar(){

    return(
        <nav className={` container ${styles.nav}`}>
            <a href="/" className={styles.navbar_logo}>Area</a>
            <ul className={`${styles.nav_links} text-link`}>

                <ul>Benefits</ul>
                <ul>Specifications</ul>
                <ul>How-to</ul>
                <ul>Contact Us</ul>
            </ul>
            <button className='btn-secondary'>Learn More <img src={slack}/></button>
        </nav>
    )
}