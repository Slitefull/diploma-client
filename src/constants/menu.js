import { pagesLinks, pagesTitles } from '../consts';
import dashboard from '../assets/icons/dashboard.svg';
import addGoods from '../assets/icons/add-goods.svg';
import settings from '../assets/icons/settings.svg';
import todoList from '../assets/icons/todo-list.svg';
import users from '../assets/icons/users.svg';


export const menu = [
  {
    name: 'dashboard',
    title: pagesTitles.dashboard,
    link: pagesLinks.dashboard,
    icon: dashboard,
  },
  {
    name: 'addGoods',
    title: pagesTitles.addGoods,
    link: pagesLinks.addGoods,
    icon: addGoods,
  },
  {
    name: 'users',
    title: pagesTitles.users,
    link: pagesLinks.users,
    icon: users,
  },
  {
    name: 'todo',
    title: pagesTitles.todo,
    link: pagesLinks.todo,
    icon: todoList,
  },
  {
    name: 'settings',
    title: pagesTitles.settings,
    link: pagesLinks.settings,
    icon: settings,
  },
];
