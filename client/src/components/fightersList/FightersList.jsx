import styles from '../../styles/Collection.module.css';

import { useEffect, useState } from 'react';

import * as fighterService from '../../services/fighterService'
import { notifyError } from '../../toastConfigs/toastConfig';

import FighterListItem from './fighterListItem/FighterListItem';

export default function FightersList() {

    const [fighters, setFighters] = useState([])

    useEffect(() => {
        fighterService.getAll()
            .then(result => setFighters(result))
            .catch(err => {
                console.log(err);
                notifyError(err)
            })
    }, []);

    console.log(fighters);


    return (
        <section id="catalog-page">
            <div className={styles.collectionBackground}>


                <h1 className={styles.title}>UFC  Fighters List</h1>


                <div className={styles.fightersWrapper}>
                    {fighters.map(fighter => (
                        <FighterListItem key={fighter._id} {...fighter} />
                    ))}

                    {fighters.length === 0 && <h3 className='no-articles'>No fighters yet</h3>}
                </div>

            </div>
        </section>
    );
}
