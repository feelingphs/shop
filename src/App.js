import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bg from './bg.png';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	let [shoes] = useState(data)
	

	return (
		<div className="App">

			

			<Button variant="primary">Primary</Button>{' '}
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Link to="/">홈</Link>
			<Link to="/detail">상세페이지</Link>

			<Routes>
				<Route path="/" element={
					<div>
						<div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>

						<div className="container">
							<div className="row">
								{
									shoes.map((a, i) => {
										return(
											<Card shoes={shoes[i]} i={i+1}></Card>
										)
									})
								}
							</div>
						</div> 
					</div>
				} />
				<Route path="/detail" element={
					<div className="container">
						<div className="row">
						<div className="col-md-6">
							<img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
						</div>
						<div className="col-md-6">
							<h4 className="pt-5">상품명</h4>
							<p>상품설명</p>
							<p>120000원</p>
							<button className="btn btn-danger">주문하기</button> 
						</div>
						</div>
					</div> 
				} />
			</Routes>



		</div>
	);
}

function Card(props) {
	return (
		<div className="col-md-4">
			<img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%"/>
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.price}</p>
		</div>
	)
}

export default App;

