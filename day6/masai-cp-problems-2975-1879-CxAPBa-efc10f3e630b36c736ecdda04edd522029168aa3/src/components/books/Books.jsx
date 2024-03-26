import React, { useState, useEffect } from "react";
import { Stack, Select, Button, SimpleGrid } from "@chakra-ui/react";
import Loading from "./Loading";
import BooksCard from "./BooksCard";
import { fetchBooks } from "../../utils/api";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("publication_date");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredBooks = books
    ? books.filter((book) => filter === "" || book.category === filter)
    : [];

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortBy === "publication_date") {
      return sortOrder === "asc"
        ? new Date(a.publication_date) - new Date(b.publication_date)
        : new Date(b.publication_date) - new Date(a.publication_date);
    } else if (sortBy === "category") {
      return sortOrder === "asc"
        ? a.category.localeCompare(b.category)
        : b.category.localeCompare(a.category);
    }
    return 0;
  });

  return (
    <Stack spacing={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Select
          data-cy="books_filter"
          placeholder="Filter by Category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="classic">Classic</option>
          <option value="coming_of_age">coming_of_age</option>
          <option value="fantasy">fantasy</option>
          <option value="political_satire">political_satire</option>
          <option value="mystery">mystery</option>
          <option value="epic_poem">epic_poem</option>
        </Select>
        <Select
          data-cy="books_sort"
          placeholder="Sort by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="publication_date">Publication Date</option>
          <option value="category">Category</option>
          {/* Add other sorting options if needed */}
        </Select>
        <Select
          data-cy="books_sort_order"
          placeholder="Sort Order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Button
          data-cy="reset_all"
          onClick={() => {
            setFilter("");
            setSortBy("publication_date");
            setSortOrder("asc");
          }}
        >
          Reset All
        </Button>
      </Stack>
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid data-cy="books_container" columns={3} spacing={4}>
          {sortedBooks.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}

export default Books;
