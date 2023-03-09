import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Cards from './test/Cards';
import Input from './UserInput/Input';
import { Route, Switch } from 'react-router-dom';
import Login from './UserInput/Login';




function App() {
  return (
    <div className="App">
    
       <Header/>
       <Switch>
       <Route path='/welcome'>
         <Cards/>
       </Route>
       
       <Route path='/' exact>
         <Input/>
       </Route>

       <Route path='/login' >
         <Login/>
       </Route>
       

       </Switch>
      
       <Footer/>
       
    
     
    
    </div>
  );
}

export default App;
