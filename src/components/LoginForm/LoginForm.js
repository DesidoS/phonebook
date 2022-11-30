import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Box, FormLabel, Button } from '@chakra-ui/react';

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
    <Box as="form" mt={4} pl={4} onSubmit={handleSubmit}>
      <FormLabel>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit" variant="outline">
        Log In
      </Button>
    </Box>
  );
};
