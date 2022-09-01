
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = { "Patrick" } lastName = { "Purington" } age = { 30 } hairColor = { "Brown" }/>
      <PersonCard firstName = { "Debby" } lastName = { "Purington" } age = { 52 } hairColor = { "Brown" }/>
      <PersonCard firstName = { "Erek" } lastName = { "Purington" } age = { 56 } hairColor = { "Brown" }/>
      <PersonCard firstName = { "Doug" } lastName = { "Purington" } age = { 27 } hairColor = { "Brown" }/>
    </div>
  );
}

export default App;
