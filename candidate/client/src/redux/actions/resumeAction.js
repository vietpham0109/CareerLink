import dateFormat from 'dateformat';
import {
  deleteDataAPI,
  getDataAPI,
  patchDataAPI,
  postDataAPI,
} from '../../utils/fetchData';
import { imageUpload } from '../../utils/imageUpload';
import { GLOBALTYPES } from './globalTypes';
import { createNotify } from './notifyAction';

export const getResume =
  (dataResume, arrEdu, arrExp, arrSkill, language, avatar) =>
  async dispatch => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      let media;
      if (avatar) media = await imageUpload([avatar]);
      dispatch({
        type: GLOBALTYPES.DATARESUME,
        payload: {
          resumes: {
            ...dataResume,
            educations: [...arrEdu],
            experiences: [...arrExp],
            skill: [...arrSkill],
            language: [...language],
          },
          avatar: avatar ? media[0].url : '',
        },
      });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: 'Preview success',
        },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: 'Preview failure',
        },
      });
    }
  };

export const saveResume =
  (cvData, arrEdu, arrExp, arrSkill, language, avatar, auth) =>
  async dispatch => {
    try {
      let media;
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!cvData.email.match(regexEmail)) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: {
            error: 'Invalid email',
          },
        });
      } else {
        if (avatar) media = await imageUpload([avatar]);

        const res = await postDataAPI(
          'create_cv',
          {
            ...cvData,
            educations: [...arrEdu],
            experiences: [...arrExp],
            skill: arrSkill,
            language,
            avatar: avatar ? media[0].url : '',
          },
          auth.token
        );
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { success: res.data.msg },
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const getAllResume = auth => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await getDataAPI('get_all_cv', auth.token);

    dispatch({
      type: GLOBALTYPES.ALLRESUME,
      payload: {
        resumes: res.data,
      },
    });

    // dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};

export const updateResume =
  (id, cvData, skill, language, avatar, auth) => async dispatch => {
    try {
      let media;

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      console.log('avatar', avatar);

      if (!avatar.name) console.log('done');
      else if (avatar && avatar.name) media = await imageUpload([avatar]);

      const res = await patchDataAPI(
        'update_cv',
        {
          id,
          ...cvData,
          skill,
          language,
          avatar: avatar.name ? media[0].url : avatar,
        },
        auth.token
      );

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const deleteResume = (id, auth) => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await patchDataAPI(
      'delete_cv',
      {
        id,
      },
      auth.token
    );

    dispatch(getAllResume(auth));

    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};

export const deleteData = () => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    dispatch({
      type: GLOBALTYPES.ALLRESUME,
      payload: {},
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};

export const submitCV =
  (idJob, idCompany, cv, auth, socket) => async dispatch => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const date = new Date();
      console.log(idJob, idCompany, cv);
      const res = await postDataAPI(
        'submit-cv',
        {
          idJob,
          idCompany,
          idCV: cv._id,
          dataCV: cv,
          dateSubmit: dateFormat(date, 'mm/dd/yyyy'),
        },
        auth.token
      );
      console.log(res);
      if (res.data.newSubmit) {
        const msg = {
          id: res.data.newSubmit.idJob,
          text: 'submited resume.',
          recipients: res.data.newSubmit.idCompany,
          url: `/company/detail-job/${res.data.newSubmit.idJob}`,
        };
        dispatch(createNotify({ msg, auth, socket }));
      }
      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const createResume = (data, avatar, token) => async dispatch => {
  try {
    let media;
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    if (avatar) media = await imageUpload([avatar]);
    else
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Missing avatar' },
      });
    const res = await postDataAPI(
      'create-resume',
      { ...data, avatar: media[0].url },token
    );
    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const getListResume = token => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await getDataAPI('get-list-resume', token);

    dispatch({
      type: GLOBALTYPES.DATARESUME,
      payload: res.data,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const delete_resume = (id, token) => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await deleteDataAPI(`delete-resume-by-id/${id}`, token);
    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (error) {}
};

export const set_status =
  ({ idJob, idCV, status, idCandidate, auth, socket }) =>
  async dispatch => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const res = await postDataAPI('set_status', {
        idJob,
        idCV,
        status,
        idCandidate,
      });
      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
      const msg = {
        id: res.data.idJob,
        text: 'Your resume has been ' + res.data.status,
        recipients: [res.data.idCandidate],
        url: `/jobdetail/${res.data.idJob}`,
        // image: logo ? mediaLogo[0].url : ''
      };

      dispatch(createNotify({ msg, auth, socket }));
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
