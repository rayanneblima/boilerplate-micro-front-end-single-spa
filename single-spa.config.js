import { registerApplication, start } from 'single-spa';

registerApplication(
  'counter',
  () => import ('./packages/counter/index.js'),
  (location) => location.pathname.indexOf('counter') > -1 ? true : false
);

registerApplication(
  'todo-list',
  () => import ('./packages/todo-list/index.js'),
  (location) => location.pathname.indexOf('todo-list') > -1 ? true : false
);

start();