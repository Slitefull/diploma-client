import { createSelector } from 'reselect';


const profileState = (state) => state.profile;

const getUserId = createSelector(profileState, (state) => state.profile.userId);
const getUserName = createSelector(profileState, (state) => state.profile.name);
const getUserSurname = createSelector(profileState, (state) => state.profile.surname);
const getUserUserName = createSelector(profileState, (state) => state.profile.userName);
const getUserEmail = createSelector(profileState, (state) => state.profile.email);
const getUserRole = createSelector(profileState, (state) => state.profile.role);
const getUserAvatar = createSelector(profileState, (state) => state.profile.avatar);
const getUserAddress = createSelector(profileState, (state) => state.profile.address);
const getUserCity = createSelector(profileState, (state) => state.profile.city);
const getUserPostalCode = createSelector(profileState, (state) => state.profile.postalCode);
const getUserStatus = createSelector(profileState, (state) => state.profile.status);

export const profileSelectors = {
  getUserId,
  getUserName,
  getUserSurname,
  getUserUserName,
  getUserEmail,
  getUserRole,
  getUserAvatar,
  getUserAddress,
  getUserCity,
  getUserPostalCode,
  getUserStatus,
};
