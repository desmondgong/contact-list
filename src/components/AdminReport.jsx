import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import * as MESSAGES from '../constants/Messages';
import * as Utils from '../utils';

class AdminReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: '',
    };
    this.onSummary = this.onSummary.bind(this);
  }

  onSummary() {
    const { contacts } = this.props;
    this.setState({ summary: Utils.summlizeContacts(contacts) });
  }

  render() {
    const { summary } = this.state;
    return (<div>
      <Button
        color="primary"
        onClick={this.onSummary}
      >
        {MESSAGES.ADMIN_BTN_SUMMARY}
      </Button>
      <div className={'admin-summ'}>{summary}</div>
    </div>);
  }
}

AdminReport.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};


export default AdminReport;
