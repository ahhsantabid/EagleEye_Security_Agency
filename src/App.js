import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Service from './Component/Service'
import Policy from './Component/Policy'
import Error from './Component/Error'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import ChooseUs from './Component/ChooseUs'
import Partnership from './Component/Partnership'
import License from './Component/License'
import Career from './Component/Career'




const App = () => {
  return (
   <>
   
   <Navbar/>
   
  

   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/service" component={Service}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/policy" component={Policy}/>
     <Route path="/partnership" component={Partnership}/>
     <Route path="/chooseus" component={ChooseUs}/>
     <Route path="/license" component={License}/>
     <Route path="/career" component={Career}/>



     <Route component={Error}  />
     

   </Switch>

   <Footer/>
   
   
   
   
   </>
  )
}

export default App
