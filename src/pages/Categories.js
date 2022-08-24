import { useDispatch } from 'react-redux/es/exports';
import { CheckedStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const StatusHandler = () => {
    dispatch(CheckedStatus);
  };
  return (
    <div>
      <button type="button" onClick={StatusHandler}>Check status</button>
    </div>
  );
};
export default Categories;
