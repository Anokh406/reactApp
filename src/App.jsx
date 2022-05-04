import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

 
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert=(massage,type)=>{
    setalert({
      msg:massage,
      type:type
    })
  }
  const toggleMOde=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
      document.title='TECH -DARK mode is enabled';
      setTimeout(() => {
        document.title='Tech Field is amazing';
      }, 2000);
      setTimeout(() => {
        document.title='Install now white devil';
      }, 2000);
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
      document.title='TECH -LIGHT mode is enabled';
      setTimeout(() => {
        document.title='Tech Field is amazing';
      }, 2000);
    }
  }
  setTimeout(() => {
    setalert(null);
  }, 1500);
  
  return (
    <>
     <Router>
     <Navbar tittle="Tech" hometext="HOME" Action="hey how was u" mode={mode} toggleMOde={toggleMOde}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Switch>
          <Route exact path="/About">
          <About/>
          </Route>
          <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
     </div>
     </Router>
    </>
  );
}
export default App;
