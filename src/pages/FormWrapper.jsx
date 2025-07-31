import { Provider } from 'react-redux';
import storeForm from '../redux/storeForm';
import Neurological from './Neurological';

const FormWrapper = () => {
  return (
    <Provider store={storeForm}>
      <Neurological />
      {/* Other form sections */}
    </Provider>
  );
};

export default FormWrapper;
