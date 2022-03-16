import { Routes as Switch, Route } from 'react-router-dom';

import HomePage from "./pages/Home";

const Routes = () => (
    <Switch>
        <Route path="/" element={<HomePage/>} />
    </Switch>
  );
  
export default Routes;