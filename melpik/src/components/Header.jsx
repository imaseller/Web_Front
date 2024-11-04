import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Alarm from '../assets/Alarm.svg';
import ScheduleIcon from '../assets/Schedule.svg';
import Basket from '../assets/Basket.svg';
import Mycloset from '../assets/Mycloset.svg';
import Mypage from '../assets/Mypage.svg';

const Header = ({ nickname = 'Mr J', isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log('isLoggedIn:', isLoggedIn);

  const handleMypageClick = () => {
    // Redirect to the specified URL
    window.location.href = 'https://api.stylewh.com/oauth/instagram';
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Profile>
          <ProfileImage
            src='https://via.placeholder.com/44'
            alt='User profile'
          />
          <Greeting>
            <GreetingText>
              <span>{nickname}</span> 님 안녕하세요!
            </GreetingText>
          </Greeting>
        </Profile>
        <Icons>
          {location.pathname === '/store' ? (
            <>
              <Icon src={Basket} alt='장바구니' />
              <Icon src={Mycloset} alt='내 옷장' />
            </>
          ) : isLoggedIn ? (
            <>
              <Icon
                src={ScheduleIcon}
                alt='스케줄'
                onClick={() => {
                  console.log('Navigating to /schedule');
                  navigate('/schedule');
                }}
              />
              <Icon src={Alarm} alt='알림' />
            </>
          ) : (
            <>
              <Icon
                src={ScheduleIcon}
                alt='스케줄'
                onClick={() => {
                  console.log('Navigating to /schedule');
                  navigate('/schedule');
                }}
              />
              <Icon
                src={Mypage}
                alt='마이페이지'
                onClick={handleMypageClick} // Handle the click event to navigate to the external URL
              />
              <Icon src={Alarm} alt='알림' />
            </>
          )}
        </Icons>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 125px;
  max-width: 598px;
  margin: 0 auto;
  background-color: white;
  padding: 0 27px 27px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  height: 125px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreetingText = styled.span`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  color: #000000;

  & > span {
    font-weight: 500;
    font-size: 24px;
    margin-right: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

const Icon = styled.img`
  width: auto;
  height: auto;
  cursor: pointer;
`;
