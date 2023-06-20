import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from 'redux/auth/selectors';
import { StyledHeader } from './Layout.styled';

export default function Layout() {
  const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <>
      <StyledHeader>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}
