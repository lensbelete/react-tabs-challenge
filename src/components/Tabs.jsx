import React, { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabContent, setTabContent] = useState({});
  const tabs = [
    { id: 1, tabTitle: 'Tab 1', title: 'Title 1' },
    { id: 2, tabTitle: 'Tab 2', title: 'Title 2' },
    { id: 3, tabTitle: 'Tab 3', title: 'Title 3' },
    { id: 4, tabTitle: 'Tab 4', title: 'Title 4' },
  ];

  useEffect(() => {
    if (!tabContent[activeTab]) {
      fetch(`http://localhost:8080/api/1/short`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((data) => {
          const strippedData = data.replace(/<\/?[^>]+(>|$)/g, "");
          console.log(`Fetched content for Tab ${activeTab}:`, strippedData);
          setTabContent((prevContent) => ({
            ...prevContent,
            [activeTab]: strippedData,
          }));
        })
        .catch((error) => {
          console.error('Error fetching content:', error);
        });
    }
  }, [activeTab]);

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        <h2>{tabs.find((tab) => tab.id === activeTab)?.title}</h2>
        <p>{tabContent[activeTab] || 'Loading content...'}</p>
      </div>
    </div>
  );
};

export default Tabs;
