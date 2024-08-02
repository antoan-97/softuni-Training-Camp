import styles from '../../styles/Create.module.css'

import { create } from '../../services/fighterService';
import { useNavigate } from 'react-router-dom';



export default function CreatePage() {
  const navigate = useNavigate();

  const createFighterHandler = async (e) => {
    e.preventDefault();


    const fighterData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      await create(fighterData)

      navigate('/fighters-list')
    } catch (error) {
      console.log(error);
    }


  }

  return (
      <section id="new-post-page" className={styles.background}>
    <div className={styles.newPostSection}>

        <form onSubmit={createFighterHandler} className={styles.newPostForm}>
          <h2>Create New Fighter</h2>
          <div className={styles.formContainer} >

            <label htmlFor="name">Fighter Name:</label>
            <input
              type="text"
              className={styles.inputField}
              id="name"
              name="title"
            />

            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className={styles.inputField}
              id="category"
              name="category"
            />

            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              className={styles.inputField}
              id="imageUrl"
              name="imageUrl"
            />

            <label htmlFor="wins">Wins:</label>
            <input type="number" className={styles.inputField} id="wins" name="wins" min='0' required />

            <label htmlFor="loses">Loses:</label>
            <input type="number" className={styles.inputField} id="loses" name="loses" min='0' required />

            <label htmlFor="weight">Weight:</label>
            <input type="number"  className={styles.inputField} id="weight" name="weight" min='0' required />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              className={styles.inputField}
              name="description"
            />


            <div className={styles.centeredButton}>
              <button type="submit" className={styles.createButton}>Create</button>
            </div>
          </div>
        </form>
    </div>
      </section>
  );
}