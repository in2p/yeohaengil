import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import styled from 'styled-components';
import CATEGORIES from './CATEGORIES.jsx';
import SelectDestination from './SelectDestination.jsx';

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const SelectBox = styled.ul`
  width: 100px;
  height: 100%;
  list-style: none;
  border-right: 1px solid #707070;
  padding: 0 10px;
`;

const Category = styled.li`
  color: ${({ isSelected }) => (isSelected ? '#FE4C40' : 'black')};
  cursor: pointer;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  margin: 0;
`;

const SubCategory = styled.ul`
  max-width: 275px;
  height: 100%;
  list-style: none;
  overflow: hidden;
`;

function ModalDestination({ onClose, onSelectCategory }) {
  const [selectCurrent, setSelectCurrent] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const subCategories = CATEGORIES.find(
    category => category.id === selectCurrent,
  ).subcategories;

  const handleSubCategoryClick = (category, subCategory) => {
    setSelectCurrent(category);
    setSelectedSubcategory(subCategory);
    onSelectCategory(category, subCategory);
  };

  return (
    <SelectDestination isOpen onClose={onClose}>
      <h2>지역</h2>
      <Container>
        <SelectBox>
          {CATEGORIES.map(category => (
            <Category
              key={category.id}
              onMouseEnter={() => setSelectCurrent(category.id)}
              isSelected={selectCurrent === category.id}
            >
              <span>{category.name}</span>
              {selectCurrent === category.id && (
                <span>
                  <FaAngleRight />
                </span>
              )}
            </Category>
          ))}
        </SelectBox>
        <SubCategory>
          {subCategories.map(subCategory => (
            <Category
              key={subCategory.subCategoryId}
              isSelected={selectedSubcategory === subCategory.subCategoryId}
              onClick={() =>
                handleSubCategoryClick(selectCurrent, subCategory.subCategoryId)
              }
            >
              {subCategory.name}
            </Category>
          ))}
        </SubCategory>
      </Container>
    </SelectDestination>
  );
}

export default ModalDestination;
