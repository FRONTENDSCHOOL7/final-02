import React from 'react';
import styled from 'styled-components';
export default function BookSlideItem({ title, author, cover, desc }) {
  return (
    <SDiv>
      <SImgWrapper>
        <img src={cover} alt={desc} />
      </SImgWrapper>
      <div>
        <strong>{title}</strong>
        <p>{author}</p>
      </div>
    </SDiv>
  );
}
const SDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 110px;
  cursor: pointer;
  margin: 5px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    object-fit: cover;
  }
  div {
    margin-top: 20px;
    width: 100%;
  }
  strong,
  p {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
  p {
    font-size: small;
    color: var(--gray-500);
    margin-top: 6px;
  }
  strong {
    font-size: medium;
    font-weight: bold;
  }
`;
const SImgWrapper = styled.div`
  width: 100px;
  height: 150px;
`;
