import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../api/firebase';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CreateRewardProgram = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await db.collection('rewardPrograms').add(data);
    } catch (error) {
      console.error('Error creating reward program: ', error);
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

      <TextField name="requiredFuelSaving" inputRef={register({ required: true })} label="Required Fuel Saving" />
      {errors.requiredFuelSaving && <p>Required Fuel Saving is required</p>}

      <TextField name="reward" inputRef={register({ required: true })} label="Reward" />
      {errors.reward && <p>Reward is required</p>}
      
      <Button type="submit" variant="contained" color="primary">
        Create Reward Program
      </Button>
    </form>
  );
}

export default CreateRewardProgram;
