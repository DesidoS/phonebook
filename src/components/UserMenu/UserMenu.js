import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Flex, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <p>Hi, {user?.name}</p>
      <Button
        marginLeft={5}
        size="xs"
        variant="outline"
        _hover={{ color: 'tomato' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};
