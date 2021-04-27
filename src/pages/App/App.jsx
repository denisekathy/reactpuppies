import { useState } from "react";
import { Route, Redirect } from "react-router-dom"
import { getUser } from "../../utilities/users-service"
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import AuthPage from "../AuthPage/AuthPage"
import PuppyHistoryPage from "../PuppyHistoryPage/PuppyHistoryPage"
import NavBar from "../../components/NavBar/NavBar";
import './App.css';

export default function App() {
  const [user, setUser ] = useState(getUser());
  return (
    <main className="App">
      
      {user ? 
      <>
      <NavBar user={user} setUser={setUser} />
      <Route exact path="/puppies/new">
    <NewPuppyPage />
     </Route>
     <Route exact path="/puppies">
       <PuppyHistoryPage />
     </Route>
     <Redirect to="/puppies"/>
     </>
      :<AuthPage setUser={setUser} />
    }
     
    </main>
  );
}


