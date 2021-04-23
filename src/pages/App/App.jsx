import { useState } from "react";
import { Route, Redirect } from "react-router-dom"
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import AuthPage from "../AuthPage/AuthPage"
import PuppyHistoryPage from "../PuppyHistoryPage/PuppyHistoryPage"
import './App.css';
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser ] = useState(null);
  return (
    <main className="App">
      <NavBar />
      {user ? 
      <>
      <Route exact path="/puppies/new">
    <NewPuppyPage />
     </Route>
     <Route exact path="/puppies">
       <PuppyHistoryPage />
     </Route>
     <Redirect to="/puppies"/>
     </>
      : <AuthPage /> 
    }
     
    </main>
  );
}


