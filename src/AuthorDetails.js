import React, { useState } from 'react';
import { Input, Card, CardHeader, CardBody, CardFooter, Accordion, AccordionItem, Button } from '@nextui-org/react';

const API_HOST = "https://https://open-library-api-apoorva.vercel.app/api/search";

function AuthorSearch() {
  const [query, setQuery] = useState('');
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    try {
      const response = await fetch(`${API_HOST}/authors?q=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAuthors(data.docs.slice(0, 10)); // Limit to first 10 authors
      setError(null);
    } catch (error) {
      console.error('Error fetching authors:', error);
      setError('Failed to fetch authors. Please try again later.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getBooks();
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', backgroundColor: '#f0f4f8', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0070f3' }}>Author Search</h1>
      
      <Input
        clearable
        underlined
        fullWidth
        placeholder="Enter author query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ marginBottom: '1rem', borderColor: '#0070f3' }}
      />
      <Button onClick={getBooks} style={{ marginTop: '1rem', backgroundColor: '#0070f3', color: 'white' }}>
        Search
      </Button>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      <div id="output" style={{ marginTop: '1rem' }}>
        {authors.length === 0 ? (
          <p>No authors found</p>
        ) : (
          <Accordion>
            {authors.map((author, index) => (
              <AccordionItem key={index} title={author.name}>
                <Card style={{ marginBottom: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <CardHeader style={{ backgroundColor: '#0070f3', color: 'white' }}>{author.name}</CardHeader>
                  <CardBody style={{ padding: '1rem', backgroundColor: '#f9f9f9' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Birth Date:</strong> {author.birth_date || 'N/A'}</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Top Work:</strong> {author.top_work || 'N/A'}</li>
                      <li style={{ marginBottom: '0.5rem' }}><strong>Total Books:</strong> {author.work_count || 'N/A'}</li>
                    </ul>
                  </CardBody>
                  <CardFooter style={{ backgroundColor: '#f0f4f8', textAlign: 'right' }}>
                    <Button auto flat style={{ backgroundColor: '#0070f3', color: 'white' }}>More Info</Button>
                  </CardFooter>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}

export default AuthorSearch;
