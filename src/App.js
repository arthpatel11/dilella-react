import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WhoWeAre from "./components/WhoWeAre";
import Product from "./components/Product";
import Eshop from "./components/Eshop";
import ProductDetail from "./components/ProductDetail";
import Sustainability from "./components/Sustainability";
import Quality from "./components/Quality";
import Contact from "./components/Contact";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/WhoWeAre" component={WhoWeAre} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Eshop" component={Eshop} />
        <Route exact path="/ProductDetail" component={ProductDetail} />
        <Route exact path="/Sustainability" component={Sustainability} />
        <Route exact path="/Quality" component={Quality} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;