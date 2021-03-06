import React from 'react';
import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileForm } from './profile-form/ProfileForm';

import { CustomSettingOutlined } from './styled';
import { PagePanel, PanelText } from '../../styled';
import { profileSelectors } from './selectors';
import { profileActions } from './store';


export const Profile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const name = useSelector(profileSelectors.getUserName);
  const surname = useSelector(profileSelectors.getUserSurname);
  const userName = useSelector(profileSelectors.getUserUserName);
  const email = useSelector(profileSelectors.getUserEmail);

  const initialValues = { name, surname, userName, email };

  const handleSubmit = (data) => dispatch(profileActions.saveProfileSettings(data));

  return (
    <PagePanel>
      <CustomSettingOutlined />
      <PanelText center>{t('userSettings')}</PanelText>
      <AddGoodsReduxForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PagePanel>
  );
};

const AddGoodsReduxForm = reduxForm({ form: 'profile' })(ProfileForm);
