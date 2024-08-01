import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, CardHeader, Spinner, Spacer, Button } from "@nextui-org/react";
import SearchForm from "./SearchForm";
import BookInformations from "./BookInformations";

const API_HOST = "https://open-library-api-apoorva.vercel.app/api/search";

function BookDetails() {
  const [query, setQuery] = useState("");
  const [bookInformations, setBookInformations] = useState(null);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query !== "") {
      executeAPICall(query, currentPage);
    }
  }, [currentPage, query]);

  const handleChangePage = (currentPage, wantedPage) => {
    if (wantedPage >= 1 && wantedPage <= maxPage) {
      return wantedPage;
    }
    return currentPage;
  };

  const executeAPICall = async (query, page) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_HOST}/books?q=${query}&page=${page}&limit=1`, { method: "GET" });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseBody = await response.json();
  
      if (responseBody.numFound > 0) {
        setMaxPage(responseBody.numFound);
      }
  
      if (responseBody.docs !== null && responseBody.docs.length > 0) {
        setBookInformations(responseBody.docs[0]);
      } else {
        setBookInformations(null);
      }
    } catch (error) {
      console.error('Error fetching book information:', error);
      setBookInformations(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', backgroundColor: '#f0f4f8', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0070f3' }}>Book Details</h1>
      <Card css={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardHeader>
          <SearchForm
            onSubmit={(query) => {
              setQuery(query);
              setCurrentPage(1);
            }}
          />
        </CardHeader>
        <CardBody>
          {isLoading ? (
            <div style={{ textAlign: "center" }}>
              <Spinner size="lg" />
              <Spacer y={1} />
              Loading...
            </div>
          ) : (
            <BookInformations informations={bookInformations} />
          )}
        </CardBody>
        <CardFooter>
          <div style={{ textAlign: "center" }}>
            <Button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(handleChangePage(currentPage, currentPage - 1))}
              style={{ backgroundColor: '#0070f3', color: 'white' }}
            >
              Previous
            </Button>
            <Spacer x={1} />
            <Button
              disabled={currentPage >= maxPage}
              onClick={() => setCurrentPage(handleChangePage(currentPage, currentPage + 1))}
              style={{ backgroundColor: '#0070f3', color: 'white' }}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BookDetails;
