import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ViniciusMDuarte.png" alt="Vinicius Duarte"/>
            <div>
                <strong>Vinicius Duarte</strong>
                <p>
                    <img src="icons/level.svg" alt="icone level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}