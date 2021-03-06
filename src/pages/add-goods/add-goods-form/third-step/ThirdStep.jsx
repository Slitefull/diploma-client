import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../../components/common/form-control/FormControl';
import { onlyUrl } from '../../../../helpers/validators/validators';

import { FormField, FormLabel } from '../../../../components/common/form-control/styled';


export const ThirdStep = ({ thumbnail, setThumbnail }) => {
  const { t } = useTranslation();

  return (
    <div>
      <FormLabel>{t('thumbnail')}</FormLabel>
      <FormField
        name="thumbnail"
        component={Input}
        validate={[onlyUrl]}
        onChange={(e) => setThumbnail(e.target.value)}
        placeholder={thumbnail}
      />
    </div>
  );
};
