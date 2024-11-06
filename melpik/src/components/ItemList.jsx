import React from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard.jsx';
import ExIMG1 from '../assets/ExIMG1.svg';
import Theme from '../styles/Theme.js';

const items = [
  {
    id: 1,
    image: ExIMG1,
    brand: 'SANDRO',
    description: '언발 플레어 미니원피스',
    price: 150000,
    discount: 10,
  },
  {
    id: 2,
    image: ExIMG1,
    brand: 'ZOOC',
    description: '볼륨소매 랩 카라 블라우스',
    price: 150000,
    discount: 10,
  },
  {
    id: 3,
    image: ExIMG1,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
    price: 150000,
    discount: 10,
  },
  {
    id: 4,
    image: ExIMG1,
    brand: 'MICHA',
    description: '테일러드 카라 머메이드 원피스',
    price: 150000,
    discount: 10,
  },
];

const truncateText = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};

const ItemList = ({ HeaderContainer }) => {
  return (
    <ListContainer>
      <HeaderContainer />
      <ItemsWrapper>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            {...item}
            description={truncateText(item.description, 12)}
          />
        ))}
      </ItemsWrapper>
    </ListContainer>
  );
};

export default ItemList;

const ListContainer = styled.div`
  background-color: ${Theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
