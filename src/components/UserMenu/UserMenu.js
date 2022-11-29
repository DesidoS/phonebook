import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username, ButtonLogIn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <ButtonLogIn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogIn>
    </Wrapper>
  );
};
