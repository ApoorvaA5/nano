import React from 'react';
import { NextUIProvider, Tabs, Tab } from '@nextui-org/react';
import AuthorSearch from './AuthorDetails';
import BookDetails from './BookDetails';

function App() {
  return (
    <NextUIProvider>
           <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f8', paddingTop: '2rem' }}>

        <Tabs
          initialValue="1"
          aria-label="Tabs"
          css={{
            width: '60%',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Tab
            key="1"
            title="Book Details"
            css={{
              fontSize: '1.2rem',
              padding: '1rem',
              color: '#0070f3',
              '&:hover': {
                color: '#005BC4',
              },
              '&[data-active="true"]': {
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
              },
            }}
          >
            <BookDetails />
          </Tab>
          <Tab
            key="2"
            title="Author Search"
            css={{
              fontSize: '1.2rem',
              padding: '1rem',
              color: '#0070f3',
              '&:hover': {
                color: '#005BC4',
              },
              '&[data-active="true"]': {
                color: '#0070f3',
                borderBottom: '2px solid #0070f3',
              },
            }}
          >
            <AuthorSearch />
          </Tab>
        </Tabs>
      </div>
    </NextUIProvider>
  );
}

export default App;
