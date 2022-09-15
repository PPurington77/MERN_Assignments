import './App.css';

function App() {
  return (
    <div className="container w-80">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-4 mb-4">
        <h1 className="navbar-brand mb-0">Manage Players</h1>
        <h1 className="navbar-brand mb-0">Manage Player Status</h1>
      </nav>
      <div className="d-flex p-4 gap-5 bg-light">
        <h2>List</h2>
        <h2>|</h2>
        <h2>Add Player</h2>
        <AllPlayers />
      </div>
    </div>
  );
}

export default App;
