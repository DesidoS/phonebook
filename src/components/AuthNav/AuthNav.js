import { NavLink } from 'react-router-dom';
import { Link, Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex w={120} justifyContent="space-between">
      <Link
        as={NavLink}
        to="/register"
        _hover={{ color: 'tomato' }}
        _activeLink={{ color: 'tomato' }}
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        _hover={{ color: 'tomato' }}
        _activeLink={{ color: 'tomato' }}
      >
        Log In
      </Link>
    </Flex>
  );
};
