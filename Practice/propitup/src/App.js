
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = { "Patrick" } lastName = { "Purington" } age = { 30 } hairColor = { "Brown" }/>
      <PersonCard firstName = { "Patrick" } lastName = { "Purington" } age = { 30 } hairColor = { "Brown" }/>
      <PersonCard firstName = { "Patrick" } lastName = { "Purington" } age = { 30 } hairColor = { "Brown" }/>
      <PersonCard firstName = { "Patrick" } lastName = { "Purington" } age = { 30 } hairColor = { "Brown" }/>
    </div>
  );
}

export default App;
