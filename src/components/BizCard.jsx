import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';

const BizCard = ({ contact = {} }) => (<Card className={'bizcard'}>
  <CardContent>
    <Grid container direction={'column'} >
      <Grid
        item
        container
        direction={'column'}
        justify={'flex-end'}
        alignItems={'flex-end'}
        className={'info-top'}
      >
        <Grid item className={'name'}><h2>{contact.name}</h2></Grid>
        <Grid item className={'company'}>{contact.company.name}</Grid>
      </Grid>
      <Grid
        item
        container
        direction={'column'}
        alignItems={'flex-end'}
        className={'info-bottom'}
      >
        <Grid item className={'contanct'}>{`${contact.phone} | ${contact.email}`}</Grid>
        <Grid item className={'address'}>{`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}`}</Grid>
      </Grid>
    </Grid>
  </CardContent>
</Card>);

BizCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};


export default BizCard;
