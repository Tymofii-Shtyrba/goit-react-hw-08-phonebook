import React from 'react';
import HomepageMenu from 'components/HomepageMenu/HomepageMenu';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoginStatus, selectRefreshStatus } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const isLoggedin = useSelector(selectLoginStatus);
  const isRefreshed = useSelector(selectRefreshStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin && isRefreshed) {
      navigate('/contacts', { replace: true });
    }
  }, [isLoggedin, isRefreshed, navigate]);

  return (
    <div>
      <HomepageMenu />
    </div>
  );
}
