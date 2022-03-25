import './App.css';
import Animals from './components/Animals';
import Form from './components/Form';
import Seekers from './components/Seekers';

function App() {
  return (
    <>
      <Form />
      <Seekers />
      <Animals className='app' />
    </>
  );
}

export default App;
