import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import { useSwipeable } from 'react-swipeable';

const ImageSlider = ({
  images,
  currentImageIndex,
  handleSwipeLeft,
  handleSwipeRight,
  handleMouseDown,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  return (
    <ImageWrapper>
      <ImageContainer {...handlers} onMouseDown={handleMouseDown}>
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </ImageContainer>
      <IndicatorContainer>
        {images.map((_, index) => (
          <Indicator key={index} active={index === currentImageIndex} />
        ))}
      </IndicatorContainer>
    </ImageWrapper>
  );
};

export default ImageSlider;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 466px;
  position: relative;
  overflow: hidden;
  cursor: grab;
  background-color: ${Theme.colors.gray1};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const IndicatorContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 10;
`;

const Indicator = styled.div`
  width: 14px;
  height: 14px;
  margin: 0 4px;
  background-color: ${(props) =>
    props.active ? Theme.colors.yellow : Theme.colors.white};
`;
