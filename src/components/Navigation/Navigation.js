import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Link, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex w={120} justifyContent="space-between">
        <Link
          as={NavLink}
          to="/"
          _hover={{ color: 'tomato' }}
          _activeLink={{ color: 'tomato' }}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            as={NavLink}
            to="/contacts"
            _hover={{ color: 'tomato' }}
            _activeLink={{ color: 'tomato' }}
          >
            Contacts
          </Link>
        )}
      </Flex>
    </nav>
  );
};
