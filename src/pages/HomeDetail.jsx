import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '../styles/Theme.js';
import ExIMG1 from '../assets/ExIMG1.svg';
import ExIMG2 from '../assets/ExIMG1.svg';
import ExIMG3 from '../assets/ExIMG1.svg';

import Header from '../components/Header.jsx';
import ImageSlider from '../components/HomeDetail/ImageSlider.jsx';
import ProductInfo from '../components/HomeDetail/ProductInfo.jsx';
import PriceTrendChart from '../components/HomeDetail/PriceTrendChart.jsx';
import ProductOptions from '../components/HomeDetail/ProductOptions.jsx';
import PaymentMethod from '../components/HomeDetail/PaymentMethod.jsx';
import SizeInfo from '../components/HomeDetail/SizeInfo.jsx';
import MaterialInfo from '../components/HomeDetail/MaterialInfo.jsx';
import ProductDetails from '../components/HomeDetail/ProductDetails.jsx';
import BottomBar from '../components/HomeDetail/BottomBar.jsx';

const HomeDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const images = [ExIMG1, ExIMG2, ExIMG3];

  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    let startX = e.clientX;

    const handleMouseMove = (e) => {
      const moveX = e.clientX - startX;
      if (Math.abs(moveX) > 50) {
        if (moveX > 0) {
          handleSwipeRight();
        } else {
          handleSwipeLeft();
        }
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, []);

  const item = {
    image: images[currentImageIndex],
    brand: '산드로(SANDRO)',
    description: '언발 플레어 미니 원피스',
    originalPrice: 760000,
    discountPrice: 608000,
    discountPercent: 20,
  };

  const priceHistory = [
    { date: '출고', price: 760000 },
    { date: '05.20', price: 684000 },
    { date: '06.20', price: 608000 },
    { date: '07.20', price: 608000 },
    { date: '현재', price: 608000 },
  ];

  return (
    <DetailContainer>
      <Header />
      <ImageSlider
        images={images}
        currentImageIndex={currentImageIndex}
        handleSwipeLeft={handleSwipeLeft}
        handleSwipeRight={handleSwipeRight}
        handleMouseDown={handleMouseDown}
      />
      <ContentContainer>
        <ProductInfo item={item} />
        <PaymentMethod />
        <LinContainer></LinContainer>
        <ProductOptions
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <LinContainer></LinContainer>
        <PriceTrendChart data={priceHistory} />
        <LinContainer></LinContainer>
        <SizeInfo />
        <LinContainer></LinContainer>
        <MaterialInfo />
        <LinContainer></LinContainer>
        <ProductDetails />
        <LinContainer></LinContainer>
      </ContentContainer>
      <BottomBar />
    </DetailContainer>
  );
};

export default HomeDetail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
  border: 1px solid ${Theme.colors.gray1};
`;

const ContentContainer = styled.div`
  padding: 0 27px;
`;
const LinContainer = styled.div`
  border: 1px solid ${Theme.colors.gray0};
  margin: 30px 0;
`;
