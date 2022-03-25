import './App.css';
import Animals from './components/Animals';
import Form from './components/Form';
import Seekers from './components/Seekers'

function App() {
  return (
    <>
      {/* <h1 className='h1'>I Spot An ...!👁‍🗨</h1>
      <div className='app'>
        <h4 className='a'> | 🐢 🦃 🦅 🐅 🦁 🐘 🐒 🦃 🦖 </h4>
      </div> */}

      <Form />
      <Animals className='app' />
      <Seekers/>
    </>
  );
}

export default App;
