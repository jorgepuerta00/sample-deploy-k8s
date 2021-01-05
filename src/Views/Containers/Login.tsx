import React from 'react';
import { useForm } from 'react-hook-form';
import { setUserSession } from '../../Utils/Common';
import { useSignIn } from './../../Hooks/Index';
// Sections
import Input from './../IndexSections/Input';

export interface ILoginProps {
  Email: any,
  Password: any
}

function Login(props: any) {

  const { register, handleSubmit, errors } = useForm();
  const [ loading, token, user, error, firebaseSignIn ] = useSignIn()

  // handle button click of login form
  const onSubmit = (data: ILoginProps) => {
    firebaseSignIn(data.Email, data.Password);
  }

  // UseEffect
  React.useEffect(() => {
    if(!loading && error === "") {
      setUserSession(token, user);
      props.history.push('/dashboard');
    }
  }, [loading, error, token, user, props.history]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> Login </div> <br />
      <Input type='text' placeholder="Email" name="Email" validation={register({required: true, pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i})} errors={errors} />
      <Input type='password' placeholder="Password" name="Password" validation={register({required: true, maxLength: 20})} errors={errors} />
      <input type="submit" value={loading ? 'Loading...' : 'Login'} disabled={loading} /><br />
      {error && <><br /><small>{error}</small><br /></>}<br />
    </form>
  );
}

export default Login;