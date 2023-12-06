import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookListPage from 'Pages/Book/BookListPage';
import BookDetailPage from 'Pages/Book/BookDetailPage';
import BookMainPage from 'Pages/Book/BookMainPage';
export default function BookRoutes() {
  return (
    <Routes>
      {/* 책 메인페이지 추가 */}
      <Route path='/main' element={<BookMainPage />} />
      <Route path='/bestseller' element={<BookListPage listType='bestseller' />} />
      <Route path='/newBooks' element={<BookListPage listType='newBooks' />} />
      <Route path='/NewBookSpecial' element={<BookListPage listType='NewBookSpecial' />} />
      <Route path=':isbn' element={<BookDetailPage />} />
    </Routes>
  );
}
