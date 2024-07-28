import styles from '../../styles/FighterDetails.module.css'

import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import AuthContext from '../../contexts/authContext';
import DeleteModal from '../deleteModal/DeleteModal';

import * as fighterService from '../../services/fighterService'

export default function FighterDetails() {
    const { isAuthenticated, userId } = useContext(AuthContext)

    const [fighter, setFighter] = useState({});
    const [hasSigned, setHasSigned] = useState(false);
    const { fighterId } = useParams();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        fighterService.getOne(fighterId)
            .then(setFighter)

        const signedStatus = localStorage.getItem(`signed_${userId}_${fighterId}`);
        setHasSigned(signedStatus === 'true');
    }, [fighterId]);

    const isOwner = userId === fighter._ownerId
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            await fighterService.remove(fighterId)
            navigate('/fighters-list')
            console.log('Fighter deleted successful ');
        } catch (error) {
            console.error("Failed to delete the fighter:", error);
            navigate(`/fighters/${fighterId}/details`)
        }
    }

    const handleSignUp = () => {
        setHasSigned(true)
        localStorage.setItem(`signed_${userId}_${fighterId}`, true)
    }

    return (

        <section id="details-page" className={styles.detailsPage}>
            <h1 className={styles.detailsHeading}>Details Page</h1>
            <div className={styles.mainCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.cardDetails}>

                        <h2>{fighter.title}</h2>
                        <div className={styles.cardFighter}>
                            <p className={styles.wins}>Wins: {fighter.wins}</p>
                            <p className={styles.loses}>Loses: {fighter.loses}</p>
                            <p className={styles.weight}>Weight: {fighter.weight}</p>
                        </div>

                        <p className={styles.description}>Description: {fighter.description}</p>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <img src={fighter.imageUrl} alt={fighter.title} className={styles.fighterImage} />
                    <div className={styles.buttonContainer}>
                        {isOwner && (
                            <div className={styles.ownerButtons}>
                                <Link to={`/fighters/${fighterId}/edit`} className={styles.detailsButton}>Edit</Link>
                                <button onClick={() => setShowDeleteModal(true)} className={styles.detailsButton}>Delete</button>
                            </div>
                        )}
                        {isAuthenticated && !isOwner && (
                            <>
                                {hasSigned ? (
                                    <p className={styles.thanksForSigning}>Let's Do This! You're Officially in the {fighter.title} Training Camp!</p>
                                ) : (
                                    <button onClick={handleSignUp} className={styles.detailsButton}>Sign Up</button>
                                )}
                            </>
                        )}

                    </div>
                </div>
            </div>
            <DeleteModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onDelete={handleDelete}
            />
        </section >
    );


}