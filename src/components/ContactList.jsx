import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import classnames from 'classnames';
import BizCard from './BizCard';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContact: {},
      open: false,
    };
  }

  render() {
    const { contacts, domClass } = this.props;
    const { selectedContact, open } = this.state;
    const className = classnames('', domClass);
    return (<div>
      <List>
        {contacts.map(contact =>
          (<ListItem
            key={contact.id}
            button
            className={className}
            onClick={() => { this.setState({ selectedContact: contact, open: true }); }}
          >
            <ListItemText primary={contact.name} />
          </ListItem>))}
      </List>
      <Dialog
        open={open}
        onClose={() => { this.setState({ open: false }); }}
      >
        <BizCard contact={selectedContact} />
      </Dialog>
    </div>);
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  domClass: PropTypes.string,
};


export default ContactList;
