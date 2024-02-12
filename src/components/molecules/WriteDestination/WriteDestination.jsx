import React, { useState } from 'react';
import styled from 'styled-components';
import { LuPlane, LuCalendarDays } from 'react-icons/lu';
import ModalDestination from '../WriteBottomsheet/ModalDestination.jsx';
import CATEGORIES from '../WriteBottomsheet/CATEGORIES.jsx';
import WriteCalendar from '../../atoms/WriteCalendar/WriteCalendar.jsx';

const FlexBox = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: ${({ onApply }) => (onApply ? '#FE4C40' : '#707070')};
  margin-top: 9px;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

const WrtieText = styled.div`
  margin: 9px 0 0 9px;
  height: 38px;
  font-size: 13px;
  font-weight: 500;
  color: #707070;

  display: flex;
  align-items: center;
`;

const CalendarContainer = styled.div`
  position: absolute;
  margin: 50px 0 0 50px;
  z-index: 100;
`;

function WriteDestination({ onApply }) {
  const [bottomOpen, setBottomOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  // 선택 완료 시,아이콘 값 변경
  const isCategorySelected =
    selectedCategory !== null && selectedSubcategory !== null;
  const isDateSelected = selectedDateRange !== null;

  const closeCategory = () => {
    setBottomOpen(false);
  };

  const handleCategorySelection = (categoryId, subcategoryId) => {
    // 선택한 카테고리 찾기
    const foundCategory = CATEGORIES.find(
      category => category.id === categoryId,
    );
    console.log('Found category:', foundCategory);

    // 선택한 서브카테고리 찾기
    const foundSubcategory = foundCategory.subcategories.find(
      subcategory => subcategory.subCategoryId === subcategoryId,
    );
    console.log('Found subcategory:', foundSubcategory);

    setSelectedCategory(foundCategory.name);
    setSelectedSubcategory(foundSubcategory.name);
  };

  const handleDestinationApply = () => {
    onApply(selectedCategory, selectedSubcategory);
    closeCategory();
  };

  // 달력
  const handleDateSelect = dateRange => {
    setSelectedDateRange(dateRange);
    setCalendarOpen(false);
  };

  const formatDateString = date => {
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 날짜 수 계산
  const numDaysSelected = selectedDateRange
    ? Math.ceil(
        (selectedDateRange[1] - selectedDateRange[0]) / (1000 * 60 * 60 * 24),
      )
    : 0;

  return (
    <div>
      <FlexBox>
        <IconContainer onApply={isCategorySelected}>
          <LuPlane
            style={{ fontSize: '20px', color: 'white' }}
            onClick={() => setBottomOpen(true)}
          />
        </IconContainer>
        <WrtieText>
          {selectedCategory && selectedSubcategory
            ? `${selectedCategory} > ${selectedSubcategory}`
            : '지역'}
        </WrtieText>
        {bottomOpen && (
          <ModalDestination
            onClose={closeCategory}
            onSelectCategory={handleCategorySelection}
            onApply={handleDestinationApply}
          />
        )}
      </FlexBox>
      <FlexBox>
        <IconContainer onApply={isDateSelected}>
          <LuCalendarDays
            style={{ fontSize: '20px', color: 'white' }}
            onClick={() => setCalendarOpen(true)}
          />
        </IconContainer>
        {calendarOpen && (
          <CalendarContainer>
            <WriteCalendar onApply={handleDateSelect} />
          </CalendarContainer>
        )}
        <WrtieText>
          {selectedDateRange !== null && selectedDateRange.length === 2
            ? `${formatDateString(selectedDateRange[0])} - ${formatDateString(
                selectedDateRange[1],
              )}`
            : '날짜'}
        </WrtieText>
      </FlexBox>
    </div>
  );
}

export default WriteDestination;
