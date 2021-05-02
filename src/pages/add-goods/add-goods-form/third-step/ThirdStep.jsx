import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { goodsActions } from '../../store';
import { FormInput } from '../../../../components/common/form-control/FormControl';
import { onlyUrl } from '../../../../helpers/validators/validators';

import { FormField, FormLabel } from '../../../../components/common/form-control/styled';


export const ThirdStep = ({ thumbnail }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onSetThumbnailHandler = useCallback((e) => dispatch(goodsActions.setThumbnail(e.target.value)), []);

  return (
    <div>
      <FormLabel>
        {t('thumbnail')}
      </FormLabel>
      <FormField
        name="thumbnail"
        component={FormInput}
        validate={[onlyUrl]}
        onChange={onSetThumbnailHandler}
        placeholder={thumbnail}
      />
    </div>
  );
};
