# react-tabs-challenge

This project is a simple react-based tab component that fetches and displays text from the Loripsum.net API. Each tab fetches a unique type of content when user navigates through them.


Demo
![image](https://github.com/user-attachments/assets/77e871a9-7a42-47f5-9070-2336d4cda854)
![image](https://github.com/user-attachments/assets/73ce9f97-7e12-4d01-8900-1d4977f34567)
![image](https://github.com/user-attachments/assets/d7f226cd-05e1-4371-8e9d-a25e29e5dac1)
![image](https://github.com/user-attachments/assets/51f73f0f-856c-421c-a01b-188c49c094d2)




Setup

    Clone the repository:

    bash

git clone https://github.com/mariatesfaye/react-tabs-challenge.git

Install dependencies:

bash

cd react-tabs-challenge
npm install

Set up a proxy server to handle CORS for the Loripsum.net API:

    proxyServer.js: 

    bash

npm install express cors

Start the proxy server:

bash

    node proxyServer.js

Start the React application:

bash

npm start

Open your browser and navigate to http://localhost:3000.
