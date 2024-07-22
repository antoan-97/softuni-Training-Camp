import styles from '../../styles/Collection.module.css';

import { useEffect, useState } from 'react';

import * as fighterService from '../../services/fighterService'

import FighterListItem from './fighterListItem/FighterListItem';
import AuthContext from '../../contexts/authContext';

export default function FightersList() {

    const [fighters, setFighters] = useState([])

    useEffect(() => {
        fighterService.getAll()
            .then(result => setFighters(result))
            .catch(err =>{
                console.log(err);
            })
    }, []);

    console.log(fighters);


    return (
        <section id="catalog-page">
            <h1 className={styles.title}>UFC  Fighters List</h1>


            <div className={styles.fightersWrapper}>
                {fighters.map(fighter => (
                    <FighterListItem key={fighter._id} {...fighter} />
                ))}

                {fighters.length === 0 && <h3 className='no-articles'>No articles yet</h3>}
            </div>


        </section>
    );
}
