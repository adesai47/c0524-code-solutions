import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <h1>Registration Forms</h1>
      <h2>Uncontrolled Form</h2>
      <RegistrationFormUncontrolled />
      <h2>Controlled Form</h2>
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
