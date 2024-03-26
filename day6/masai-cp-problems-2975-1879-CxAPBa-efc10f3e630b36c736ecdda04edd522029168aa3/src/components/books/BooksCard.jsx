import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function BooksCard({ book }) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} data-cy="book_card">
      <Heading as="h2" size="md">
        {book.title}
      </Heading>
      <Heading as="h3">Author: {book.author}</Heading>
      <Heading as="h5">Category: {book.category}</Heading>
      <Heading as="h6">Publication Date: {book.publication_date}</Heading>
      <Text>ISBN: {book.isbn}</Text>
    </Box>
  );
}

export default BooksCard;
