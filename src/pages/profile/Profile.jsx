import React from 'react';
import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileForm } from './profile-form/ProfileForm';
import { formsNames } from '../../constants/formsNames';
import { profileSelectors } from './selectors';
import { profileActions } from './store';

import { CustomMehOutlined } from './styled';
import { PagePanel, PanelText } from '../../styled';


export const Profile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const name = useSelector(profileSelectors.getName);
  const surname = useSelector(profileSelectors.getSurname);
  const userName = useSelector(profileSelectors.getUserName);
  const email = useSelector(profileSelectors.getEmail);
  const role = useSelector(profileSelectors.getRole);
  const avatar = useSelector(profileSelectors.getAvatar);
  const address = useSelector(profileSelectors.getAddress);
  const city = useSelector(profileSelectors.getCity);
  const postalCode = useSelector(profileSelectors.getPostalCode);
  const status = useSelector(profileSelectors.getStatus);

  const initialValues = { name, surname, userName, email, avatar, address, city, postalCode, status };

  const handleSubmit = (data) => dispatch(profileActions.saveProfileSettings({ ...data, role }));

  return (
    <>
      <PagePanel>
        <CustomMehOutlined />
        <PanelText center>
          {t('userSettings')}
        </PanelText>
        <PanelText subtitle center>
          {`${t('thereYouCanChangeYourProfileSettings')}, ${name}`}
        </PanelText>
      </PagePanel>
      <AddGoodsReduxForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </>
  );
};

const AddGoodsReduxForm = reduxForm({ form: formsNames.profile })(ProfileForm);
