import Home from "./Componets/Home"
import Navbar from "./Componets/Navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Componets/Create";
import React from "react";
import BlogDetails from "./Componets/BlogDetails";
import NotFound from "./Componets/NotFound";
function App() {


  return (
    < Router>
      <Navbar/>
      <div>
        <Switch>
         <Route  exact path="/">
          <Home/>
         </Route>
         <Route  path="/create">
          <Create/>
         </Route>
         <Route  path="/blog/:id">
          <BlogDetails/>
         </Route>
         <Route  path="*">
          <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
