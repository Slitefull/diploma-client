import React from 'react'
import { reduxForm } from 'redux-form'
import { useTranslation } from 'react-i18next'
import { ProfileForm } from './profile-form/ProfileForm'

import { CustomSettingOutlined } from './styled'
import { PagePanel, PanelText } from '../../styled'
import { useSelector } from 'react-redux'
import { profileSelectors } from './selectors'


export const Profile = () => {
  const name = useSelector(profileSelectors.getUserName)
  const surname = useSelector(profileSelectors.getUserSurname)
  const userName = useSelector(profileSelectors.getUserUserName)
  const email = useSelector(profileSelectors.getUserEmail)

  const { t } = useTranslation()

  const handleSubmit = data => {
    console.log(data, 'data')
  }

  return (
    <PagePanel>
      <CustomSettingOutlined/>
      <PanelText center>{t("userSettings")}</PanelText>
      <AddGoodsReduxForm onSubmit={handleSubmit}/>
    </PagePanel>
  )
}

const AddGoodsReduxForm = reduxForm({
  form: 'profile',
  initialValues: {
    name: 'name',
    surname: 'surname',
    email: 'email'
  }
})(ProfileForm)

//TODO add initial values
