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
            .catch(error => console.error("Error fetching fighter:", error));

        if (userId) {
            fighterService.checkSignUpStatus(userId, fighterId)
                .then(response => setHasSigned(response.some(item => item.userId === userId && item.fighterId === fighterId)))
                .catch(error => console.log('Error fetching fighter', error));
        }


    }, [fighterId, userId]);


    const isOwner = userId === fighter._ownerId
    console.log(isOwner);

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

    const handleSignUp = async () => {

        try {
            await fighterService.signUpForFighter(fighterId, userId);
            setHasSigned(true);

        } catch (error) {
            console.log('Failed to sign up', error);
        }
    }


    return (

    <section id="details-page" className={styles.detailsPage}>
        <div className={styles.background}>
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
        </div>
    </section >
    );


}

// Save in localstoage ( wrong way)

// useEffect(() => {
//     fighterService.getOne(fighterId)
//         .then(setFighter)
//         .catch(error => console.error("Error fetching fighter:", error));

//     const signedStatus = localStorage.getItem(`signed_${userId}_${fighterId}`);
//     setHasSigned(signedStatus === 'true');
// }, [fighterId]);



// const handleSignUp = () => {
//     setHasSigned(true)
//     localStorage.setItem(`signed_${userId}_${fighterId}`, true)
// }

// ----------------------------------------------------------------------------------------------

//Right(or at least working) way : some method checks if array includes fighterId and userId and return true if it

//     if ( userId) {
//         fighterService.checkSignUpStatus(userId, fighterId)
//             .then(result => {
//                 // Check if the result array has any entries
//                 setHasSigned(result.some(item => item.userId === userId && item.fighterId === fighterId));
//             })
//             .catch(error => console.log('Error fetching sign-up status:', error));
//     }
// }, [fighterId, userId, ]);
