import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './css/style.css'

function App() {
  return (
    <>
    	<div className="navigation">
			
			<div className="bar">
			
			</div>
			<div className="preferences">
				<div>
					<span>Private</span>
					<span>Business</span>
				</div>
				<div className="lang">
					<span>ENG</span>
					<ul>
						<li>LT</li>
						<li>RU</li>
					</ul>
				</div>
			</div>
			<div>
				<div>
					<h2>SWEDBANK</h2>
				</div>
				<div>
					<FontAwesomeIcon icon={faUserCircle} />
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
    	</div>
    	<main className="main">
			<h1>Small loan application</h1>
			<div>
				<div className="card">
					<h4 >If you are a swedbank customer</h4>
					<p>It is best to complete your application while logged in, as many fields are previously completed. The application enables us to find the most suitable solution for you and make you a personal loan offer. Completing an application does not oblige you to sign an agreement.</p>
				</div>
				<div className="card">
					<h4 >If you are a swedbank customer</h4>
					<p>It is best to complete your application while logged in, as many fields are previously completed. The application enables us to find the most suitable solution for you and make you a personal loan offer. Completing an application does not oblige you to sign an agreement.</p>
				</div>
			</div>
    	</main>
		<footer>
			<div className="quicklinks">
				<div>
					<h3>Contacts</h3>
					<ul>
						<li>Frequently Asked questions</li>
						<li>Contacts and Branches</li>
						<li>Book a consultant</li>
						<li>About Swedbank</li>
					</ul>
					<p>
						Swedbank, AB
						Konstitucijos pr. 20A, 03502 Vilnius, Lithuania<br />
						SWIFT code: HABALT22 <br />
						Legal entity code: 112029651
					</p>
				</div>
				<div>
					<h3>Useful Links</h3>
					<ul>
						<li>Sustainability</li>
						<li>Covid-19</li>
						<li>Online banking</li>
						<li>Prices and rates</li>
						<li>Calculators</li>
					</ul>
				</div>
				<div>
					<h3>Lagal Information</h3>
					<ul>
						<li>Terms and conditions</li>
						<li>User terms</li>
						<li>Processing of personal Data</li>
						<li>Handling customer claims</li>
						<li>Cookies</li>
						<li>Deposit and liability insurance for investors</li>
						<li>Payment service directive</li>
						<li>Prevention of money laundering</li>
					</ul>
				</div>
				<div>
					<h3>Customer Programmes</h3>
					<ul>
						<li>Swedbank's youth programme</li>
						<li>For parents of children and youth</li>
						<li>For Salary receivers</li>
						<li>Golden programmes</li>
						<li>Private banking</li>
						<li>Senior Programmes</li>
						<li>Become a business customer</li>
					</ul>
				</div>
			</div>
			<div>
				<span>fb</span>
				<span>fb</span>
				<span>fb</span>
				<span>fb</span>
				<span>fb</span>
			</div>
		</footer>
    </>
  );
}

export default App;
