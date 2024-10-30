import React, { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabContent, setTabContent] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const tabs = [
    { id: 1, tabTitle: 'Tab 1', title: 'Title 1' },
    { id: 2, tabTitle: 'Tab 2', title: 'Title 2' },
    { id: 3, tabTitle: 'Tab 3', title: 'Title 3' },
    { id: 4, tabTitle: 'Tab 4', title: 'Title 4' },
  ];

  const fetchTabContent = async (tabId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://loripsum.net/`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.text();
    
      setTabContent((prevContent) => ({
        ...prevContent,
        [tabId]: data,
      }));
    } catch (err) {
      setError(`Error fetching content for Tab`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!tabContent[activeTab]) {
      fetchTabContent(activeTab);
    }
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>

    
      <div className="content">
        <h2>{tabs.find((tab) => tab.id === activeTab)?.title}</h2>
        {loading ? (
          <p>Loading content...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <p>{tabContent[activeTab]}</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
