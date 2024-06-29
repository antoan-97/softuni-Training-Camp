import styles from '../styles/Footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <address className={styles.footer__address}> 
                            <strong>UFC Fighters Training Camp</strong><br />
                            123 Training Avenue<br />
                            Champion City, CA 12345<br />
                            <abbr title="Phone"></abbr> (123) 456-7890
                        </address>
                    </div>
                    <div className="col-md-4">
                        <p>&copy; {new Date().getFullYear()} UFC Fighters Training Camp. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}