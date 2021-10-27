/* eslint-disable max-len */
import { BehaviorSubject } from 'rxjs';
// import { apiBase } from './instance';
import { USER_LOCAL_STORE } from '../constants';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(USER_LOCAL_STORE)));

function login(user) {
  return user;
}
// function login(email, password) {
//   return apiBase({
//     url: '/user/login',
//     method: 'POST',
//     data: {
//       email,
//       password,
//     },
//   });
// }

// function login(username, password) {
//   const data = { username, password };
//   localStorage.setItem('currentUserHPI', JSON.stringify(data));
//   currentUserSubject.next(data);
//   return true;
// }

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem(USER_LOCAL_STORE);
  currentUserSubject.next(null);
}

function updateUser(data) {
  localStorage.setItem(USER_LOCAL_STORE, JSON.stringify(data));
  currentUserSubject.next(data);
}

const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() { return currentUserSubject.value; },
  updateUser,
};

export default authenticationService;
