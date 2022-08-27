import { useDispatch } from 'react-redux/es/exports';
import { CheckedStatus } from '../redux/categories/categories';
import styles from '../styles/MainSection.module.css';
import style from '../styles/Categories.module.css';

const Categories = () => {
  const dispatch = useDispatch();
  const StatusHandler = () => {
    dispatch(CheckedStatus);
  };
  return (
    <div className={styles.MainContainer}>
      <button type="button" onClick={StatusHandler} className={style.btn}>Check status</button>
    </div>
  );
};
export default Categories;
