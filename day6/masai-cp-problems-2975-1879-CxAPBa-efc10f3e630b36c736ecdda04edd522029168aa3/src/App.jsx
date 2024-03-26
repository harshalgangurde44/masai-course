import React from "react";
import { Container } from "@chakra-ui/react";
import Books from "./components/books/Books";

export default function App() {
  return (
    <Container maxW="container.xl">
      <Books />
    </Container>
  );
}
