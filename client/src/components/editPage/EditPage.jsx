import styles from '../../styles/Create.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import * as fighterService from '../../services/fighterService';

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
              type="number"
              className={styles.inputField}
              id="wins"
              name="wins"
              min='0'
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
              min='0'
              required
              value={fighter.loses}
              onChange={handleChange}
            />

            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              className={styles.inputField}
              id="weight"
              name="weight"
              min='0'
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
      </div>
    </section>
  );
}
