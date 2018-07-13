import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';

import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <p>Please review your entries:</p>

      {reviewFields}

      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Campaign <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStatetoProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStatetoProps,
  actions
)(withRouter(SurveyFormReview));
