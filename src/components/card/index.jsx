import poster from "../../assets/star-war-.jpg";
import styles from "./styles.module.css";

function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt="Star War img" />
      <div>
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          corporis dolorum reiciendis sed doloremque sint exercitationem vitae
          consequuntur pariatur, magnam iste repellat eius at, voluptatum,
          excepturi voluptatibus ex? Ratione facere, exercitationem beatae unde
          impedit molestiae inventore soluta architecto ullam iste!
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}
export default Card;
