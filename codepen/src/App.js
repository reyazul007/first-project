//components
import Home from './components/Home';
import Dataprovider from './context/DataProvider';


function App() {
  return (
    <Dataprovider>
    <Home/>
    </Dataprovider>
  );
}

export default App;