import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('Berka');
  const [lastName, setLastName] = useState('OCER');

  useEffect(() => {
    console.log("herzaman çalışır");
});


  useEffect(() => {
    console.log("ilk renderde çalışor");
  }, []);

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname state i değiştirildiğinde çalışır");
  }, [firstName]);

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastname state i değiştirildiğinde çalışır");
  }, [lastName]);

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname veya lastname state i değiştirildiğinde çalışır");
  }, [firstName,lastName]);

  return (
    <div>
      <button onClick={() => setFirstName("Berkay")}>Set First Name</button>


      <button onClick={()=>setLastName("ÖCER")}>Set LastName</button>
    </div>

    

  );
}

export default App;
