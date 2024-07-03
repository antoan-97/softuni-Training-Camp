import styles from '../../styles/Create.module.css'

const createFighterHandler = (e) => {
  e.preventDefault();
  const fighterData = Object.fromEntries(new FormData(e.currentTarget))
  console.log(fighterData);
}

export default function CreatePage() {
  return (
    <section id="new-post-page" className={styles.newPostSection}>

      <form onSubmit={createFighterHandler} className={styles.newPostForm}>
        <h2>Create New Fighter</h2>
        <ul className={styles.bulletlessList}>
          <li>
            <label htmlFor="name">Fighter Name:</label>
            <input
              type="text"
              className={styles.inputField}
              id="name"
              name="title"
            />
          </li>
          <li>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className={styles.inputField}
              id="category"
              name="category"
            />
          </li>
          <li>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              className={styles.inputField}
              id="image"
              name="image"
            />
          </li>
          <li>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              className={styles.inputField}
              name="description"
            />
          </li>
          <li className={styles.centeredButton}>
            <button className={styles.createButton}>Create</button>
          </li>
        </ul>
      </form>
    </section>
  );
}