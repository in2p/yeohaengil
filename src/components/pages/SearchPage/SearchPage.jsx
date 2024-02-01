import React from 'react';
import SearchBox from '../../atoms/SearchBox/SearchBox.jsx';
import SearhFilter from '../../atoms/SearhFilter/SearhFilter.jsx';
import SearchCard from '../../organisms/SearchCard/SearchCard.jsx';

function SearchPage() {
  const userCards = [
    {
      user: 'user1',
      img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2024-01-27 ~ 2024-01-29',
      destination: '경기도 하남',
      average: '123456',
      like: '40',
    },
    {
      user: 'user2',
      img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2023-11-19 ~ 2023-11-22',
      destination: '강원도 강릉',
      average: '234567',
      like: '1094만',
    },
    {
      user: 'user3',
      img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2024-01-10 ~ 2024-01-15',
      destination: '서울특별시 강남',
      average: '345678',
      like: '5K',
    },
  ];

  return (
    <div className="SearchContainer">
      <SearchBox />
      <SearhFilter />
      {userCards.map((userCard, i) => (
        <SearchCard userURL={userCard} key={userCard.user} />
      ))}
    </div>
  );
}

export default SearchPage;
