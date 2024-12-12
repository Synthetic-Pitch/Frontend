import { Outlet } from 'react-router-dom';
import Store from './redux/Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
        <Provider store={Store}> 
           <Outlet/>
        </Provider>
    </>
  );
};

export default App;