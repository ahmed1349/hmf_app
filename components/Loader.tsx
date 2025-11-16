'use client';
import React, { useState, useEffect,} from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) {
    return (
      <div className="loader-complete">
        <div className="complete-content">
          <h1 className="complete-title">Welcome! 🎉</h1>
          <p className="complete-subtitle">Loading Complete</p>
        </div>
      </div>
    );
  }

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Animated Logo */}
        <div className="logo-wrapper">
          <div className="logo-container">
            {/* Outer rotating ring */}
            <div className="ring ring-outer"></div>
            
            {/* Middle rotating ring */}
            <div className="ring ring-middle"></div>
            
            {/* Inner pulsing circle with logo */}
            <div className="logo-circle">
              <span className="logo-text">HMF</span>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="brand-name">HMF</h2>
        <p className="brand-subtitle">LOADING....</p>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="progress-shimmer"></div>
            </div>
          </div>
          
          {/* Progress Percentage */}
          <p className="progress-text">
            {Math.floor(Math.min(progress, 100))}%
          </p>
        </div>

        {/* Loading Text */}
        <div className="loading-text-wrapper">
          <p className="loading-text">Preparing your experience...</p>
        </div>

        {/* Floating Dots */}
        <div className="dots-container">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="corner corner-top-left"></div>
      <div className="corner corner-bottom-right"></div>
    </div>
  );
}