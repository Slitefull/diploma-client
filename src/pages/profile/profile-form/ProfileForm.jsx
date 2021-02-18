import React from 'react'
import { Button, ProfileFormWrapper } from '../styled'
import { FormDescription, FormField, FormLabel, FormTitle } from '../../../components/common/form-control/styled'
import { Input } from '../../../components/common/form-control/FormControl'
import { required } from '../../../helpers/validators/validators'
import { Wrapper } from '../../../styled'
import { useSelector } from 'react-redux'
import { profileSelectors } from '../selectors'
import { AvatarImage, AvatarLetter } from '../../../components/header/profile-icon/styled'


export const ProfileForm = ({ handleSubmit }) => {
  const userNameLetter = useSelector(profileSelectors.getUserName).split('', 1)[0]
  const avatar = useSelector(profileSelectors.getUserAvatar)

  return (
    <ProfileFormWrapper style={{ maxWidth: 1200 }} onSubmit={handleSubmit}>
      <FormTitle>Personal data</FormTitle>
      <FormDescription>Use this page to update your contact information and change your password.</FormDescription>
      {
        avatar
          ? <AvatarImage src={avatar} style={{ width: 100, height: 100 }}/>
          : <AvatarLetter style={{ width: 100, height: 100, fontSize: 36 }}>{userNameLetter}</AvatarLetter>
      }
      <Wrapper row justify>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>Name</FormLabel>
          <FormField
            name={'name'}
            placeholder={'Input your name'}
            component={Input}
            validate={[required]}
          />
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>Surname</FormLabel>
          <FormField
            name={'surname'}
            placeholder={'Input your surname'}
            component={Input}
            validate={[required]}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper row justify>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>Username</FormLabel>
          <FormField
            name={'username'}
            placeholder={'Input your username'}
            component={Input}
            validate={[required]}
          />
        </Wrapper>
        <Wrapper full style={{ maxWidth: 550 }}>
          <FormLabel>Email</FormLabel>
          <FormField
            name={'email'}
            placeholder={'Input your email'}
            component={Input}
            validate={[required]}
          />
        </Wrapper>
      </Wrapper>
      <FormLabel>Address</FormLabel>
      <FormField
        name={'address'}
        placeholder={'Input your address'}
        component={Input}
        validate={[required]}
      />
      <Button>Save changes</Button>
    </ProfileFormWrapper>
  )
}
