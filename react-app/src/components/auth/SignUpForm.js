import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const confirm_password = repeatPassword;
      const data = await dispatch(signUp(username, email, password, confirm_password));
      if (data) {
        setErrors(data)
      }
  };

  useEffect(() => {
    let errors = []
    if (username.length === 12) {
        errors.push(['username: Character limit has been reached.'])
    }
    if (email.length === 200) {
        errors.push(['email: Character limit has been reached.'])
    }
    setErrors(errors)
    console.log(errors)
}, [username, email])

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/explore-wilds' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className='error-container-sign-up'>
        {errors.map((error, ind) => (
          <div className='error2'key={ind}>{error}</div>
        ))}
      </div>
      <div className='form-option-container'>
        <label>Username</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          placeholder='Username'
          value={username}
          maxLength='12'
        ></input>
      </div>
      <div className='form-option-container'>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          placeholder='Email'
          value={email}
          maxLength='200'
        ></input>
      </div>
      <div className='form-option-container'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          placeholder='Password'
          value={password}
        ></input>
      </div>
      <div className='form-option-container'>
        <label>Confirm Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          placeholder='Confirm Password'
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className='button' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
