import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from 'redux/auth/selectors';

export default function Layout() {
  const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
