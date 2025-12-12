import React, { useState, useEffect } from 'react';
import { books } from '../constants/books';

const BookCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getBookAtIndex = (offset: number) => {
    const index = (currentIndex + offset + books.length) % books.length;
    return books[index];
  };

  const currentBook = getBookAtIndex(0);


  const stackConfigs = [
    { x: 96, y: -32, rotate: 10, w: 72, h: 104, opacity: 0.6, z: 0 },
    { x: 72, y: -24, rotate: 8, w: 80, h: 112, opacity: 0.7, z: 5 },
    { x: 48, y: -16, rotate: 5, w: 84, h: 120, opacity: 0.8, z: 10 },
    { x: 24, y: -8, rotate: 3, w: 88, h: 136, opacity: 0.85, z: 15 },
    { x: 0, y: -4, rotate: 2, w: 96, h: 144, opacity: 0.9, z: 18 }
  ];

  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full relative overflow-hidden transition-all duration-300 group hover:shadow-md">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Reading List</h3>
        <div className="flex gap-1">
          {books.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-brand-black dark:bg-white' : 'w-1.5 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20'}`}
              aria-label={`Go to ${books[idx].title}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col h-full relative z-10">
        <div className="mb-4 relative">
          <div
            key={`text-${currentBook.id}`}
            style={{
              animation: 'fadeIn 500ms ease-in-out',
            }}
          >
            <h4 className="font-bold text-brand-black dark:text-white text-lg leading-tight mb-1">
              {currentBook.title}
            </h4>
            <p className="text-xs text-brand-textGray">
              {currentBook.author}
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-end relative perspective-1000 min-h-[200px]">
          {/* Books in the stack (behind the main book) */}
          {stackConfigs.map((config, idx) => {
            const book = getBookAtIndex(-(idx + 1));
            return (
              <div
                key={`${book.id}-${currentIndex}-${idx}`}
                className="absolute bottom-0 rounded-sm shadow-lg border-l-2 border-gray-400 dark:border-gray-600 overflow-hidden bg-gray-800"
                style={{
                  transform: `translateX(${config.x}px) translateY(${config.y}px) rotate(${config.rotate}deg)`,
                  width: `${config.w}px`,
                  height: `${config.h}px`,
                  opacity: config.opacity,
                  zIndex: config.z,
                  transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 700ms ease-in-out',
                }}
              >
                <img
                  src={book.image}
                  alt={book.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Main book (Front) */}
          <div
            className="relative w-28 h-40 shadow-2xl rounded-r-md rounded-l-sm overflow-hidden border-l-4 border-l-gray-300 dark:border-l-gray-600 transform group-hover:scale-105 z-20 bg-black"
            key={currentBook.id}
            style={{
              transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-gray-200 dark:from-gray-600 to-transparent z-20"></div>
            <img
              key={`main-img-${currentBook.id}`}
              src={currentBook.image}
              alt={currentBook.alt}
              className="w-full h-full object-cover"
              style={{
                animation: 'fadeIn 500ms ease-in-out',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default BookCard;