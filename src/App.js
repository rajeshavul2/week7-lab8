// App.js
import React from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './styles.css';

const App = () => {
  // JavaScript variables for dynamic content
  const headerTitle = 'My App Header';
  
  const section1Heading = 'Section 1';
  const section1Content = 'This is the content of Section 1.';
  
  const section2Heading = 'Section 2';
  const section2Content = 'This is the content of Section 2.';
  
  const article1Title = 'Article 1';
  const article1Text = 'This is the content of Article 1.';
  
  const article2Title = 'Article 2';
  const article2Text = 'This is the content of Article 2.';
  
  const sidebarContent = 'This is the content of the sidebar.';
  
  const footerText = '© 2023 Your Company';

  return (
    <div>
      <Header title={headerTitle} />

      <Section heading={section1Heading} content={section1Content} />
      <Section heading={section2Heading} content={section2Content} />

      <Article title={article1Title} text={article1Text} />
      <Article title={article2Title} text={article2Text} />

      <Sidebar content={sidebarContent} />

      <Footer text={footerText} />
    </div>
  );
};

export default App;