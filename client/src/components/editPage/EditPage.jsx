import styles from '../../styles/Create.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as fighterService from '../../services/fighterService';

export default function EditPage() {
  const navigate = useNavigate();
  const { fighterId } = useParams();
  const [fighter, setFighter] = useState({
    title: '',
    category: '',
    imageUrl: '',
    wins: '',
    loses: '',
    weight: '',
    description: '',
  });

  useEffect(() => {
      try {
        fighterService.getOne(fighterId)
        .then(setFighter)
      } catch (error) {
        console.log(error);
      }
  }, [fighterId]);

  const editFighterHandler = async (e) => {
    e.preventDefault();
    const fighterData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await fighterService.update(fighterId, fighterData);
      navigate('/fighters-list');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFighter({
      ...fighter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="edit-page" className={styles.newPostSection}>
      <form onSubmit={editFighterHandler} className={styles.newPostForm}>
        <h2>Edit Fighter</h2>
        <div className={styles.formContainer}>
          <label htmlFor="name">Fighter Name:</label>
          <input
            type="text"
            className={styles.inputField}
            id="name"
            name="title"
            value={fighter.title}
            onChange={handleChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            className={styles.inputField}
            id="category"
            name="category"
            value={fighter.category}
            onChange={handleChange}
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            className={styles.inputField}
            id="imageUrl"
            name="imageUrl"
            value={fighter.imageUrl}
            onChange={handleChange}
          />

          <label htmlFor="wins">Wins:</label>
          <input
            type="number"
            className={styles.inputField}
            id="wins"
            name="wins"
            required
            value={fighter.wins}
            onChange={handleChange}
          />

          <label htmlFor="loses">Loses:</label>
          <input
            type="number"
            className={styles.inputField}
            id="loses"
            name="loses"
            required
            value={fighter.loses}
            onChange={handleChange}
          />

          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            className={styles.inputField}
            id="weight"
            name="weight"
            required
            value={fighter.weight}
            onChange={handleChange}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={styles.inputField}
            name="description"
            value={fighter.description}
            onChange={handleChange}
          />

          <div className={styles.centeredButton}>
            <button type="submit" className={styles.createButton}>Edit</button>
          </div>
        </div>
      </form>
    </section>
  );
}
