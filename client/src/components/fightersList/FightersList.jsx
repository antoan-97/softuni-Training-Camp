import { useEffect, useState } from 'react';

import * as fighterService from '../../services/fighterService'

import styles from '../../styles/Collection.module.css';
import FighterListItem from './fighterListItem/FighterListItem';

export default function FightersList() {

    const [fighters, setFighters] = useState([])

    useEffect(() => {
        fighterService.getAll()
            .then(result => setFighters(result))
    }, []);

    console.log(fighters);


    return (
        <section id="catalog-page">

            <h1>All Fighters</h1>

            {fighters.map(fighter =>  (
                <FighterListItem {...fighter} />
            ))}

            <h3 className='no-articles'>No articles yet</h3>
        </section>
    );
}
