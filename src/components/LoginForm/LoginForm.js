import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Label, Form, Field, ButtonLogIn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Field type="email" name="email" />
      </Label>
      <Label>
        Password
        <Field type="password" name="password" />
      </Label>
      <ButtonLogIn type="submit">Log In</ButtonLogIn>
    </Form>
  );
};
