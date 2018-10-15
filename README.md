# SillyApp

This is combines [SillyStore](https://github.com/MattStypa/sillystore) and [SillyRouter](https://github.com/MattStypa/sillyrouter) into one.

```js
import App from 'sillyapp';

const store = {
  count: 0,
};

import Home from './components/Home.js';
import AboutUser from './components/AboutUser.js';
import NotFound from './component/NotFound.js';

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'aboutUser', path: '/user/:userId', component AboutUser},
  {name: 404, component: NotFound},
];

ReactDOM.render(
  <App store={store} routes={routes}/>,
  document.getElementById('root')
);
```
