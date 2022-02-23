import React, { Fragment, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails } from "../../redux/actions/index";
import styles from "./DogDetail.module.css";
import dog from "../../assets/dog.svg";
import vida from "../../assets/vida.svg";
import altura from "../../assets/altura.svg";
import peso from "../../assets/peso.svg";

export default function DogDetail() {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
    console.log(id)
    return () => dispatch(deleteDetails());
  }, [dispatch]);

  const myDog = useSelector((state) => state.details);

  return (
    <Fragment>
      {myDog ? (
        <div key={myDog.id} className={styles.bodix}>
          <div className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name} className={styles.image} />
            <div className={styles.detailsContainer}>
              {myDog.breed_group ? (
                <div className={styles.breed_group}>
                  <div className={styles.imageSection}>
                    <img
                      src={dog}
                      alt="svg dog"
                      className={styles.detailsSVG}
                    />
                  </div>
                  <div className={styles.infoSection}>
                    <h3>Breed group: </h3>
                    <p>{myDog.breed_group}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className={styles.life_span}>
                <div className={styles.imageSection}>
                  <img
                    src={vida}
                    alt="svg dog"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Life span: </h3>
                  <p>{myDog.life_span}</p>
                </div>
              </div>
              <div className={styles.weights}>
                <div className={styles.imageSection}>
                  <img
                    src={altura}
                    alt="svg dog"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Weight: </h3>
                  <p>Min: {myDog.weight_min}</p>
                  <p>Max: {myDog.weight_max}</p>
                </div>
              </div>
              <div className={styles.heights}>
                <div className={styles.imageSection}>
                  <img
                    src={peso}
                    alt="svg bone"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Height: </h3>
                  <p>Min: {myDog.height_min}</p>
                  <p>Max: {myDog.height_max}</p>
                </div>
              </div>
              <br />
              <div className={styles.temperament}>
                <div className={styles.infoSection}>
                  {
                    <div>
                      <h3>Temperament: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <Link to="/home">
              <button className={styles.button}>Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
}
