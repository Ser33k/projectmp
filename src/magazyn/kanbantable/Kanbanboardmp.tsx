import {} from "@chakra-ui/icons";
import { Container, Heading, SimpleGrid, theme } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./components/Column";
import { ChakraProvider } from "@chakra-ui/react";
import { ColumnType } from "./utils/enums";
import React from "react";
import { Helmet } from "react-helmet";
import "./Kanbanstyle.css";
import logo from "../../../public/img/logo.jpg";

function Kanbanboard() {
  return (
    <>
      <main className="kanbanbody">
        <Helmet>
          <title>Tablica zadań</title>
        </Helmet>
        <div id="header">
          <div className="main-logo">
            <a id="logo" href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
        </div>

        <ChakraProvider theme={theme}>
          <Heading
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            fontWeight="bold"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            mt={4}
            color="white"
          >
            Tablica zadań Kanban
          </Heading>
          <DndProvider backend={HTML5Backend}>
            <Container maxWidth="container.lg" px={4} py={10}>
              <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing={{ base: 16, md: 4 }}
              >
                <Column column={ColumnType.TO_DO} />
                <Column column={ColumnType.IN_PROGRESS} />
                <Column column={ColumnType.BLOCKED} />
                <Column column={ColumnType.COMPLETED} />
              </SimpleGrid>
            </Container>
          </DndProvider>
        </ChakraProvider>
      </main>
      <footer>
        <p className="autor-main">Made by - Mateusz Trochimowicz</p>
      </footer>
    </>
  );
}

export default Kanbanboard;
