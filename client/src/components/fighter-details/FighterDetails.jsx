import styles from '../../styles/FighterDetails.module.css'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as fighterService from '../../services/fighterService'

export default function FighterDetails() {
    const [fighter, setFighter] = useState({});
    const { fighterId } = useParams();

    useEffect(() => {
        fighterService.getOne(fighterId)
            .then(setFighter)
    }, [fighterId]);

    return (

        <section id="details-page" className={styles.detailsPage}>
            <h1 className={styles.detailsHeading}>Details Page</h1>
            <div className={styles.mainCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.cardDetails}>

                        <h2>Name: {fighter.title}</h2>
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
                        <button className={styles.detailsButton}>Edit</button>
                        <button className={styles.detailsButton}>Delete</button>
                        <button className={styles.detailsButton}>Sign Up</button>

                    </div>
            </div>
        </div>
        </section >
    );


}