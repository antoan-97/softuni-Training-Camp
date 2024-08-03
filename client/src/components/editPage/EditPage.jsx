import styles from '../../styles/Create.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import * as fighterService from '../../services/fighterService';
import { notifyError, notifySuccess } from '../../toastConfigs/toastConfig'


export default function EditPage() {
  const navigate = useNavigate();
  const { fighterId } = useParams();
  const { userId } = useContext(AuthContext); // Get the user ID from context

  const [fighter, setFighter] = useState({
    title: '',
    category: '',
    imageUrl: '',
    wins: '',
    loses: '',
    weight: '',
    description: '',
  });

  const [isOwner, setIsOwner] = useState(true); // Initialize as true

  useEffect(() => {
    const fetchFighter = async () => {
      try {
        const fetchedFighter = await fighterService.getOne(fighterId);
        setFighter(fetchedFighter);

        if (userId !== fetchedFighter._ownerId) {
          setIsOwner(false);
          navigate('/'); // Redirect if not owner
        }
      } catch (error) {
        console.log(error);
        navigate('/'); // Redirect on error
      }
    };

    fetchFighter();
  }, [fighterId, userId, navigate]);

  const validateInputs = (data) => {
    if (!data.title ||
      !data.category ||
      !data.imageUrl ||
      !data.wins ||
      !data.loses ||
      !data.weight ||
      !data.description) {
      notifyError('Please fill in all fields.');
      return false;
    }

    const wins = Number(data.wins);
    const loses = Number(data.loses);
    const weight = Number(data.weight);

    if (isNaN(wins) || isNaN(loses) || isNaN(weight)) {
      notifyError('Wins, loses, and weight must be valid numbers.');
      return false;
    }

    if (data.wins < 0 || data.loses < 0 || data.weight < 0) {
      notifyError('Please select a value that is not less than 0 ');
      return false
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(data.imageUrl)) {
      notifyError('Please enter a valid URL for the image.');
      return false;
    }

    return true;
  };


  const editFighterHandler = async (e) => {
    e.preventDefault();
    const fighterData = Object.fromEntries(new FormData(e.currentTarget));

    if (!validateInputs(fighterData)) {
      return;
    }

    try {
      await fighterService.update(fighterId, fighterData);
      notifySuccess('Edit Successfully!')
      navigate('/fighters-list');
    } catch (error) {
      notifyError('Failed to edit fighter: ' + error.message)
    }
  };

  const handleChange = (e) => {
    setFighter({
      ...fighter,
      [e.target.name]: e.target.value,
    });
  };

  // Optionally, render a loading indicator or nothing until the ownership check is complete
  if (!isOwner) {
    return null; // Or a loading spinner if preferred
  }

  return (
    <section id="edit-page" className={styles.background}>
      <div className={styles.newPostSection}>
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
              type="text"
              className={styles.inputField}
              id="wins"
              name="wins"
              value={fighter.wins}
              onChange={handleChange}
            />

            <label htmlFor="loses">Loses:</label>
            <input
              type="text"
              className={styles.inputField}
              id="loses"
              name="loses"
              value={fighter.loses}
              onChange={handleChange}
            />

            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              className={styles.inputField}
              id="weight"
              name="weight"
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
      </div>
    </section>
  );
}
