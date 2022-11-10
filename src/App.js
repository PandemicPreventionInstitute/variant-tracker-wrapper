import logo from './logo.svg';
import './App.css';
import Onboarding from './components/onboarding';
import MiniDrawer from './components/main';

function App() {
  return (
    <div className="App">     
      <main>     
        {/* <iframe src="http://ppi-variant-dynamics-prod-39a4c5a9f260fa0a.elb.us-east-1.amazonaws.com/" title="RShiny VT" height={window.innerHeight} width="100%">
        <Onboarding />
        </iframe> */}
        {MiniDrawer()}
      </main>
    </div>
  );
}

export default App;
