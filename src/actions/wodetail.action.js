import { httpClient } from "./../utils/HttpClient";
import {
  HTTP_WODETAIL_SUCCESS,
  HTTP_WODETAIL_FETCHING,
  HTTP_WODETAIL_FAILED,
  HTTP_WODETAIL_CLEAR,
  server,
} from "../constants";

export const setStateWODetailToSuccess = (payload) => ({
  type: HTTP_WODETAIL_SUCCESS,
  payload,
});

const setStateWODetailToFetching = () => ({
  type: HTTP_WODETAIL_FETCHING,
});

const setStateWODetailToFailed = () => ({
  type: HTTP_WODETAIL_FAILED,
});

const setStateWODetailToClear = () => ({
  type: HTTP_WODETAIL_CLEAR,
});

export const getWODetails = () => {
  return async (dispatch) => {
    dispatch(setStateWODetailToFetching());
    doGetWODetail(dispatch);
  };
};

const doGetWODetail = async (dispatch) => {
  try {
    let result = await httpClient.get(`${server.WODETAIL_URL}`);
    dispatch(setStateWODetailToSuccess(result.data));
    // alert(JSON.stringify(result.data));
  } catch (err) {
    // alert(JSON.stringify(err));
    dispatch(setStateWODetailToFailed());
  }
};
