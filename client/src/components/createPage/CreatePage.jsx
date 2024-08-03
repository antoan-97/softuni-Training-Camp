import styles from '../../styles/Create.module.css'

import { create } from '../../services/fighterService';
import { useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../toastConfigs/toastConfig';

import useForm from '../../hooks/useForm'

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



export default function CreatePage() {
  const navigate = useNavigate();


  const createFighterHandler = async (e) => {
    e.preventDefault();
    const fighterData = Object.fromEntries(new FormData(e.currentTarget));

    if (!validateInputs(fighterData)) {
      return; // Exit if validation fails
    }

    try {
      await create(fighterData);
      navigate('/fighters-list');
      notifySuccess('Successfully created');
    } catch (error) {
      notifyError(error.message || 'An error occurred');
    }
  };

  const { values, onChange, onSubmit } = useForm(createFighterHandler, {
    title: '',
    category: '',
    imageUrl: '',
    wins: '',
    loses: '',
    weight: '',
    description: '',
  });



  return (
    <section id="new-post-page" className={styles.background}>
      <div className={styles.newPostSection}>

        <form onSubmit={onSubmit} className={styles.newPostForm}>
          <h2>Create New Fighter</h2>
          <div className={styles.formContainer} >

            <label htmlFor="name">Fighter Name:</label>
            <input
              onChange={onChange}
              type="text"
              className={styles.inputField}
              id="name"
              name="title"
              value={values.title}
            />

            <label htmlFor="category">Category:</label>
            <input
              onChange={onChange}
              type="text"
              className={styles.inputField}
              id="category"
              name="category"
              value={values.category}
            />

            <label htmlFor="image">Image URL:</label>
            <input
              onChange={onChange}
              type="text"
              className={styles.inputField}
              id="imageUrl"
              name="imageUrl"
              value={values.imageUrl}
            />

            <label htmlFor="wins">Wins:</label>
            <input
              onChange={onChange}
              type="text"
              className={styles.inputField}
              id="wins"
              name="wins"
              value={values.wins}
            />

            <label htmlFor="loses">Loses:</label>
            <input
              onChange={onChange}
              type="text" className={styles.inputField} id="loses"
              name="loses"
              value={values.loses}
            />

            <label htmlFor="weight">Weight:</label>
            <input
              onChange={onChange}
              type="text"
              className={styles.inputField}
              id="weight"
              value={values.weight}
              name="weight"
            />

            <label htmlFor="description">Description:</label>
            <textarea
              onChange={onChange}
              id="description"
              className={styles.inputField}
              name="description"
              value={values.description}
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