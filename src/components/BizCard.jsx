import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';

const BizCard = ({ contact = {} }) => (<Card className={'bizcard'}>
  <CardContent>
    <div className={'name'}>{contact.name}</div>
    <div className={'company'}>{contact.company.name}</div>
    <div className={'phone'}>{contact.phone}</div>
    <div className={'email'}>{contact.email}</div>
    <div className={'address'}>{`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}`}</div>
  </CardContent>
</Card>);

BizCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};


export default BizCard;
