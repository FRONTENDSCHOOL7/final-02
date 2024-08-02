/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { getMostLikedBooks } from '../../firebase/firebaseService';
import styled from 'styled-components';

const BookRecommend = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideListRef = useRef(null);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      try {
        const books = await getMostLikedBooks(3);
        setRecommendedBooks(books);
        setLoading(false);
      } catch (error) {
        console.error('추천 도서를 가져오는 중 오류:', error);
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
  }, []);

  console.log(recommendedBooks);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2800);

    return () => clearInterval(interval);
  }, [currentSlide, recommendedBooks.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    slideListRef.current.scrollTo({
      left: index * slideListRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % recommendedBooks.length;
    setCurrentSlide(nextSlide);
    slideListRef.current.scrollTo({
      left: nextSlide * slideListRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SSlideList ref={slideListRef}>
        {recommendedBooks.map((book, index) => (
          <SSlideItem key={book.id}>
            <SContentWrap>
              <img src={book.imageURL} alt={book.title} />
              <h4>{book.title}</h4>
              <SAuthor>{book.author}</SAuthor>
            </SContentWrap>
          </SSlideItem>
        ))}
      </SSlideList>
      <BtnWrap>
        {recommendedBooks.map((book, index) => (
          <SButton key={book.id} onClick={() => goToSlide(index)} isActive={currentSlide == index}>
            {/* {index + 1} */}
          </SButton>
        ))}
      </BtnWrap>
    </>
  );
};

export default BookRecommend;

const SSlideList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const SContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;

  & h4 {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 50%;
    text-align: center;
    font-size: var(--font-xs-size);
    font-family: 'Pretendard-semiBold';
  }
`;

const SAuthor = styled.span`
  margin-bottom: 12px;
`;

const SSlideItem = styled.li`
  flex: 0 0 auto;
  scroll-snap-align: start;
  padding: 0 10px;
  width: 100%;
  position: relative;

  & img {
    width: 146px;
    height: 90%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 20;
  }

  &::before {
    content: '';
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 64%;
    height: 100%;
    border-radius: 50% 50% 11px 11px;
    background-color: var(--dark-orange);
    opacity: 0.1;
    mix-blend-mode: multiply;
  }
`;

const BtnWrap = styled.div`
  margin-top: 5px;
  text-align: center;
`;

const SButton = styled.button`
  border: none;
  background-color: ${({ isActive }) => (isActive ? 'var(--medium-orange)' : 'var(--gray-200)')};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'var(--dark-orange)' : 'var(--gray-400)')};
  }
`;
