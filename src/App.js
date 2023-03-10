import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Cards from './test/Cards';
import Test from './test/Test';
import Input from './UserInput/Input';
import { Route, Switch , Redirect } from 'react-router-dom';
import Login from './UserInput/Login';
import AuthContext from './store/auth-context';
import { useContext } from 'react';



function App() {

     const authCtx =  useContext(AuthContext);

  return (
    <div className="App">
    
       <Header/>
       {/* <Test/> */}
       <Switch>

       {authCtx.isLoggedIn && 
       <Route path='/welcome' >
         <Cards/>
       </Route>
       }
       
       <Route path='/' exact>
         <Input/>
       </Route>
       {!authCtx.isLoggedIn && 
       <Route path='/login'>
         <Login/>
       </Route>
       }
       
       <Route path='*'>
          <Redirect to='/login'></Redirect>
       </Route>

       </Switch>
      
       <Footer/>
       
    </div>
  );
}

export default App;
