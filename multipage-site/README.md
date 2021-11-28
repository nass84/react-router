- Watch the Json Data
  json-server --watch ./data/db.json

- Set Up Pages
  Create 3 pages as different components in pages folder

- Install React Router package
  npm install react-router-dom

-Import to App.js
import { BrowserRouter, Route, Switch } from react-router-dom";
Wrap in Browser Router
Add Routes and Paths in App.js
Wrap switch component so only one component can show on a page
Will only show home component as it is first and / matches unless you add exact path

```
          <Route exact path="/">
```

- Import and use link component so the page isnt pulled from the sever

-Can use NavLink instead of link
The difference is for navigation and applies an active class to navigation links

Can use to style the CSS to show what page we are on

```
nav a.active {
  color: white;
  background: #333;
  text-decoration: none;
}
```

For home page have to use exact prop

```
          <NavLink exact to="/">Home</NavLink>
```

- Route Parameters
  To change the route by id
  : tells router that id is a parameter (changeable part of the route)

```
   <Route path="/articles/:id">
           <Article />
         </Route>
```

- useParams hook

- Redirect
  If a user trys to go to a param that doesnt exist you can use redirect



```

import {
BrowserRouter,
Route,
Switch,
NavLink,
Redirect,
} from "react-router-dom";

```
* means everything 
```
<Route path="*">
            <Redirect to="/" />
          </Route>
```
-Query Parameters

Things after url following ? often used for searches


