import './style.css'
import { getEl } from './mods/utils';

const handelSubmit = (e) => {
  e.preventDefault();
  const formObj = Object.fromEntries(new FormData(e.target));
  console.log(formObj);
  addValue(formObj);
}

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
}
export const getValue = (key) => getLocalStorageKey(key);
export const setValue = (key, names) => setLocalStorageKey(key, names);

const addValue = (value) => {
  const values = getValue('form-data');
  setValue('form-data',[...values, value]);
}
const main = () => {

  getEl('#movie-input').addEventListener('submit', handelSubmit );
  console.log(getValue('form-data'));
}

main();