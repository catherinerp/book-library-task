"use client";

import styles from "./page.module.css";
import { initialBooks } from "./data";
import React from "react";
import {
  Switch,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
 } from "@nextui-org/react";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [books, setBooks] = React.useState(initialBooks);
  const rowsPerPage = 4;

  const toggleReturnBorrow = (id) => {
    setBooks(books => {
      return books.map(books => books.id === id ? ({
        ...books,
        availability: !books.availability
      }): books)
    })
  };

  const pages = Math.ceil(books.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return books.slice(start, end);
  }, [page, books]);

  const addBook = () => {};

  return (
    <main className={styles.main}>
      <h1>SoSage Library</h1><br/>
      <div className={styles.searchBarContainer}>
            Book Search: 
            <input className={styles.searchBar} placeholder="Search..."></input>
              <div className="flex gap-2">
                </div>
                </div>
                <div className={styles.tableWrapper}>
      <Table classNames={{ wrapper: "min-h-[222px]" }}>
        <TableHeader>
          <TableColumn key="book">BOOK</TableColumn>
          <TableColumn key="owner">OWNER</TableColumn>
          <TableColumn key="availability">AVAILABILITY</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "availability" ? (
                    <Switch isSelected={item.availability} onChange={() => toggleReturnBorrow(item.id)}>
                      {item.availability ? "Available" : "Not Available"}
                    </Switch>
                  ) : (
                    item[columnKey]
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      </div>
      <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  onPress={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
                  disabled={page === 1}
                >
                  {"<-"}
                </Button>
                <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  onPress={() => setPage((prev) => (prev < pages ? prev + 1 : prev))}
                  disabled={page === pages}
                >
                  {"->"}
                </Button>
                <p className="text-small text-default-500">{page} of {pages}</p>
      <Button color="primary" onClick={addBook}>
      Add Book
    </Button>
    </main>
  );
}
