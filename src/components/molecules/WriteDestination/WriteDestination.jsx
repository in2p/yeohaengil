import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LuPlane, LuCalendarDays } from 'react-icons/lu';
import ModalDestination from '../Bottomsheet/ModalDestination.jsx';
import CATEGORIES from '../Bottomsheet/CATEGORIES.jsx';

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
`;

const WrtieText = styled.div`
  margin: 9px 0 0 9px;
  height: 38px;
  font-size: 12px;
  color: #707070;

  display: flex;
  align-items: center;
`;

function WriteDestination({ onApply }) {
  const [bottomOpen, setBottomOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // 선택 완료 시,아이콘 값 변경
  const isCategorySelected =
    selectedCategory !== null && selectedSubcategory !== null;

  const closeModal = () => {
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

  const handleApply = () => {
    onApply(selectedCategory, selectedSubcategory);
    closeModal();
  };

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
            onClose={closeModal}
            onSelectCategory={handleCategorySelection}
            onApply={handleApply}
          />
        )}
      </FlexBox>
      <FlexBox>
        <IconContainer>
          <LuCalendarDays style={{ fontSize: '20px', color: 'white' }} />
        </IconContainer>
        <WrtieText>년/월/일</WrtieText>
      </FlexBox>
    </div>
  );
}

export default WriteDestination;
