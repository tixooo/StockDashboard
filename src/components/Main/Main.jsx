import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { useSelector } from 'react-redux';

export default function Main() {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={`card main-card h-90 ${
        isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
      }`}
    >
      <div className="card-header">
        <h4>Welcome to Our App</h4>
      </div>
      <div className="card-body">
        <p className="card-text">
          Our stock trading website features an advanced dashboard equipped with
          detailed candlestick charts, providing users with a comprehensive
          visual analysis of stock price movements. It offers access to a vast
          array of company stocks, allowing traders to monitor and analyze
          market trends across a broad spectrum of industries with ease.
        </p>
        <p className="card-text">
          Why you should use the App you ask? In the fast-paced world of stock
          trading, where every second counts and every decision can mean the
          difference between profit and loss, our stock trading dashboard stands
          as an indispensable ally. Designed not just as a tool, but as a
          gateway to mastering the markets, this site is more than just a
          platform; it's a comprehensive training ground. For beginners, it
          demystifies the complex world of stocks with intuitive interfaces and
          real-time simulations, allowing them to practice without risk. For the
          seasoned traders, it's a sharpening stone, refining strategies with
          advanced analytics and market insights. It's not just about making
          trades; it's about crafting a trader. Whether you're starting out or
          scaling new heights in your trading journey, our dashboard is the key
          to unlocking your potential in the stock market. Dive in, learn,
          experiment, and emerge as a more confident, informed, and successful
          trader.
        </p>
        <p className="card-text">Number of registered users</p>
      </div>
    </div>
  );
}
