import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../api/firebase';
import { makeStyles } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CreateSubscription = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await db.collection('subscriptions').add(data);
    } catch (error) {
      console.error('Error creating subscription: ', error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField name="name" inputRef={register({ required: true })} label="Name" />
      {errors.name && <p>Name is required</p>}
      
      <TextField name="description" inputRef={register({ required: true })} label="Description" />
      {errors.description && <p>Description is required</p>}

      <TextField name="deliveryFrequency" inputRef={register({ required: true })} label="Delivery Frequency" />
      {errors.deliveryFrequency && <p>Delivery Frequency is required</p>}

      <TextField name="price" inputRef={register({ required: true })} label="Price" />
      {errors.price && <p>Price is required</p>}
      
      <Button type="submit" variant="contained" color="primary">
        Create Subscription
      </Button>
    </form>
  );
}

export default CreateSubscription;
