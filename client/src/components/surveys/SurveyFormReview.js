import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      Please review your entries
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

function mapStatetoProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStatetoProps)(SurveyFormReview);
