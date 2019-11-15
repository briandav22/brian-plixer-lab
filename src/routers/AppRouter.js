import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {products} from '../products/products'
import Header from '../components/Header';
import Home from '../components/Home';
import Intergrations from '../components/Intergrations'
import Product from '../components/product/product.component'



const AppRouter =(props) =>(

    <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/scrutinizer" 
            render={()=> <Product {...products.scrutinizer }  data={props.exporters}/>
          }/>

        <Route path="/flowpro" 
          render={()=> <Product {...products.flowPro} />
        }/>

        <Route path="/replicator"
          render={()=> <Product {...products.replicator} />
        }/>

        <Route path="/intergrations" component={Intergrations} />

      </Switch>
    </div>
  </BrowserRouter>

)
export default AppRouter;