import profile_pic from './img/personal-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Website</h1>
      <h2>Author: Kaitlyn Liao</h2>
      <img src={profile_pic} alt="profile-image"/>
    </div>
  );
}

export default App;
