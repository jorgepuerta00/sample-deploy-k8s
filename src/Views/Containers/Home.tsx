import React from 'react';
import { useForm } from 'react-hook-form';

// Sections
import Input from './../IndexSections/Input'

// Hooks
import { useCreateUser } from './../../Hooks/Index';

function Home() {
  const [ loading, result, error, createUser ] = useCreateUser()
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    createUser(data)
  };

  if (loading) {
    return <div className="content">Saving data...</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        Welcome to the Register Page! <br /> <br />
      </div>
      <Input type='text' placeholder="First Name" name="firstname" validation={register({required: true, maxLength: 30})} errors={errors} />
      <Input type='text' placeholder="Last Name" name="lastname" validation={register({required: true, maxLength: 30})} errors={errors} />
      <Input type='text' placeholder="Email" name="email" validation={register({required: true, pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i})} errors={errors} />
      <Input type='text' placeholder="Age" name="age" validation={register({required: true, max: 100, min: 0})} errors={errors} />
      <Input type='text' placeholder="Score" name="score" validation={register({required: true, max: 100, min: 0})} errors={errors} />
      <Input type='password' placeholder="Password" name="password" validation={register({required: true, maxLength: 20})} errors={errors} />
      <input type="submit" />
      {error && <><br /><small>{error}</small><br /></>}<br />
      {result && <><br /><h2>{result}</h2><br /></>}<br />
    </form>
  );
}
export default Home;