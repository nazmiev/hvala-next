import styles from './AuthModal.module.scss'

export default function AuthModal() {
    return (
        <div className={styles.authModal}>
            <div className={styles.sampleName}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
                <h4>hvala.<span>tips</span></h4>
            </div>
            <div className={styles.LoginButtons}>
                <a href="https://www.hvala.tips/officiant/auth">User</a>
                <a href="https://www.hvala.tips/restaurant/connect_page">Manager</a>
            </div>
        </div>
    )
}