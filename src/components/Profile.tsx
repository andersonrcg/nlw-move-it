import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/andersonrcg.png" alt="Anderson Gabriel" />
            <div>
                <strong>Anderson Gabriel</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 01
                </p>
            </div>
        </div>
    );
}