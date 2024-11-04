import React from 'react';
import styled from 'styled-components';
import ShoppingBasket from '../../assets/ShoppingBasket.svg';

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <CartButton>
        <CartImage src={ShoppingBasket} alt='Shopping Basket' />
      </CartButton>
      <OrderButton>제품 주문하기</OrderButton>
    </BottomBarContainer>
  );
};

export default BottomBar;

const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #eeeeee;
  margin-top: 10px;
  z-index: 9999;
`;

const CartButton = styled.button`
  width: 75px;
  height: 56px;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CartImage = styled.img`
  width: 41px;
  height: 34px;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #f6ae24;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  margin: 0 21px;
`;
