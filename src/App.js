import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Menu } from "./components/Menu";
import { PaginaInicio } from "./pages/PaginaInicio";
import PaginaPosts from "./pages/PaginaPosts";
import PaginaPost from "./pages/PaginaPost";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route exact path="/posts" component={PaginaPosts} />
        <Route exact path="/posts/:postId" component={PaginaPost} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

//https://www.neoguias.com/tutorial-redux/
