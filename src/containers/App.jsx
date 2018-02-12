import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import SearchIcon from 'material-ui-icons/Search';
import { fetchContacts, filterContacts, sortFilteredContacts } from '../actions';
import ContactList from '../components/ContactList';
import AdminReport from '../components/AdminReport';
import * as CONSTANTS from '../constants';
import * as MESSAGES from '../constants/Messages';

class App extends Component {
  componentWillMount() {
    const { loadContacts } = this.props;
    loadContacts();
  }

  render() {
    const {
      contacts,
      filteredContacts,
      isLoading,
      notification,
      searchContacts,
      sortContacts,
    } = this.props;
    return (<Grid container direction={'column'} className={'main-content'}>
      <Grid item container>
        <Grid item xs={6}>
          <Input
            fullWidth
            placeholder={MESSAGES.SEARCH_PLACEHOLDER}
            startAdornment={<InputAdornment><SearchIcon /></InputAdornment>}
            onChange={(e) => { searchContacts(e.target.value); }}
          />
        </Grid>
        <Grid item>
          <InputLabel htmlFor="sort-sel">{MESSAGES.SORT_LABEL}</InputLabel>
          <Select
            id="sort-sel"
            native
            onChange={(e) => { sortContacts(e.target.value); }}
          >
            {CONSTANTS.SORT_FIELDS.map((field, i) =>
              <option key={i} value={field}>{field}</option>)}
          </Select>
        </Grid>
      </Grid>
      <Grid item>
        {
          isLoading ?
            <CircularProgress size={50} /> :
            <ContactList contacts={filteredContacts} />
        }
        {
          notification ?
            <div className={'notification'}>{notification}</div> : null
        }
      </Grid>
      <Grid item>
        <AdminReport contacts={contacts} />
      </Grid>
    </Grid>);
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  isLoading: PropTypes.bool,
  notification: PropTypes.string,
  loadContacts: PropTypes.func,
  searchContacts: PropTypes.func,
  sortContacts: PropTypes.func,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  contacts: state.contacts,
  filteredContacts: state.filteredContacts,
  isLoading: state.isLoading,
  notification: state.notification,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  loadContacts() {
    dispatch(fetchContacts());
  },
  searchContacts(filterValue) {
    dispatch(filterContacts(filterValue));
  },
  sortContacts(sortField) {
    dispatch(sortFilteredContacts(sortField));
  },
});

export { App as AppCom };
export default connect(mapStateToProps, mapDispatchToProps)(App);
