import { PROMO_CODE } from './types';

export const changeHandler = e => dispatch => {
    dispatch({ type: PROMO_CODE, payload: e.target.value })
}