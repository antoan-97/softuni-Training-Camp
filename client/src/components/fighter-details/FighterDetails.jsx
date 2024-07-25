import styles from '../../styles/FighterDetails.module.css'

import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import AuthContext from '../../contexts/authContext';

import * as fighterService from '../../services/fighterService'

export default function FighterDetails() {
    const { isAuthenticated, userId } = useContext(AuthContext)

    const [fighter, setFighter] = useState({});
    const { fighterId } = useParams();

    useEffect(() => {
        fighterService.getOne(fighterId)
            .then(setFighter)
    }, [fighterId]);

    const isOwner = userId === fighter._ownerId

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

                        {/* Conditional rendering based on user authentication */}
                        {/* Replace with your conditional logic */}
                        {/* Example: */}
                        {/* {user && ( */}
                        {/*     <div className={styles.socialBtn}> */}
                        {/*         {isOwner && ( */}
                        {/*             <> */}
                        {/*                 <a href={`/fighters-list/${fighter._id}/edit`} className={styles.editBtn}>Edit</a> */}
                        {/*                 <a href={`/fighter-list/${fighter._id}/delete`} className={styles.delBtn}>Delete</a> */}
                        {/*             </> */}
                        {/*         )} */}
                        {/*         {!isOwner && hasSigned && ( */}
                        {/*             <p className={styles.thanksForSign}>Thanks For Signing</p> */}
                        {/*         )} */}
                        {/*         {!isOwner && !hasSigned && ( */}
                        {/*             <a href={`/fighters-list/${fighter._id}/signUp`} className={styles.signUp}>Sign</a> */}
                        {/*         )} */}
                        {/*     </div> */}
                        {/* )} */}

                    </div>
                </div>
                <div className={styles.cardRight}>
                    <img src={fighter.imageUrl} alt={fighter.title} className={styles.fighterImage} />
                    <div className={styles.buttonContainer}>
                        {isOwner && (
                            <div className={styles.ownerButtons}>
                                <Link to={`/fighters/${fighterId}/edit`} className={styles.detailsButton}>Edit</Link>
                                <Link to={`/fighters/${fighterId}/delete`} className={styles.detailsButton}>Delete</Link>
                            </div>
                        )}


                        {isAuthenticated && !isOwner && (<button className={styles.detailsButton}>Sign Up</button>)}


                    </div>
                </div>
            </div>
        </section >
    );


}