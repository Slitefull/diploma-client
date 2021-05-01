import { createSelector } from 'reselect';


const profileState = (state) => state.profile;

const getId = createSelector(profileState, (state) => state.profile.userId);
const getName = createSelector(profileState, (state) => state.profile.name);
const getSurname = createSelector(profileState, (state) => state.profile.surname);
const getUserName = createSelector(profileState, (state) => state.profile.userName);
const getEmail = createSelector(profileState, (state) => state.profile.email);
const getRole = createSelector(profileState, (state) => state.profile.role);
const getAvatar = createSelector(profileState, (state) => state.profile.avatar);
const getAddress = createSelector(profileState, (state) => state.profile.address);
const getCity = createSelector(profileState, (state) => state.profile.city);
const getPostalCode = createSelector(profileState, (state) => state.profile.postalCode);
const getStatus = createSelector(profileState, (state) => state.profile.status);

export const profileSelectors = {
  getId,
  getName,
  getSurname,
  getUserName,
  getEmail,
  getRole,
  getAvatar,
  getAddress,
  getCity,
  getPostalCode,
  getStatus,
};
