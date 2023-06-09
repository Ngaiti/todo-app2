import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Navbar, Nav } from "react-bootstrap"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import './App.css'
import AddTodo from "./pages/AddTodo"


function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"> ✔️ Todos </Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">Add Todo </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddTodo />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

