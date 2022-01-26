import './style.css';
import {refresher, render,} from './main';

const main = document.querySelector('main');
main.innerHTML = render;

const refresh =  document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  refresher();
});
