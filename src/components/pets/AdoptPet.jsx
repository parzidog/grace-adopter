import React from 'react'

const AdoptPet = () => {
  return (
<div>
	<form id="survey-form">
        <div>
		    <p id="description"><em>Thank you for wishing to offer a rescue dog a home! Please could you complete the form below and submit it to us. </em></p>
		</div>

		<div id="todays-date">
			<label className="main-label" for="todays-date">Today's Date: </label>
			<select name="day">
				<option value="day">Day</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
				<option value="26">26</option>
				<option value="27">27</option>
				<option value="28">28</option>
				<option value="29">29</option>
				<option value="30">30</option>
				<option value="31">31</option>
			</select>
			<select name="month">
				<option value="month">Month</option>
				<option value="january">January</option>
				<option value="february">February</option>
				<option value="march">March</option>
				<option value="april">April</option>
				<option value="may">May</option>
				<option value="june">June</option>
				<option value="july">July</option>
				<option value="august">August</option>
				<option value="september">September</option>
				<option value="october">October</option>
				<option value="november">November</option>
				<option value="december">December</option>
			</select>
			<select name="year">
				<option value="" e="year">Year</option>
				<option value="2012">2012</option>
				<option value="2013">2013</option>
				<option value="2014">2014</option>
				<option value="2015">2015</option>
				<option value="2016">2016</option>
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option>
				<option value="2022">2022</option>
				<option value="2023">2023</option>
			</select>
		</div>

		<div id="dogName">
			<label className="main-label" for="dogNameLabel">Name of the dog you wish to adopt: </label>
			<input type="text" id="dogNameLabel" placeholder="Dog Name" required/>
		</div>

		<div id="first-last-name">
			<label className="main-label" id="name-label">First Name: </label>
			<input type="text" id="name" placeholder="John" required/>

			<label className="main-label">Last Name: </label>
			<input type="text" id="lastName" placeholder="Smith" required/>
		</div>

		<div id="gender">
			<input type="radio" id="male" name="gender" value="1" required/>
			<label className="main-label" for="male">Male</label>

			<input type="radio" id="female" name="gender" value="2" required/>
			<label className="main-label" for="female">Female</label>
		</div>

		<div id="address">
			<label className="main-label" for="address1">Address: </label>
			<input type="text" id="address1" size="30" placeholder="Enter your address here"/>


			<label className="main-label" for="city">City: </label>
			<input type="text" id="city" size="15" placeholder="Your City"/>

			<label className="main-label" for="postcode">Postcode: </label>
			<input type="text" id="postcode" size="10" placeholder="Postcode"/>

		</div>

		<div id="email-phone">
			<label className="main-label" id="phone-label" for="phone">Phone: </label>
			<input type="tel" id="phone" placeholder="e.g. +44 7675 403 665"/>

			<label className="main-label" id="email-label" for="email">Email: </label>
			<input type="email" id="email" placeholder="e.g. youremail@example.co.uk" required size="35"/>

		</div>

		<div id="age">
			<ul><label className="main-label" for="age">Age of applicant:</label></ul>

			<li><input type="radio" id="u18" name="age" value="1" required/>
				<label for="u18">Under 18</label></li>

			<li><input type="radio" id="18" name="age" value="2" required/>
				<label for="18">18 - 24</label></li>

			<li><input type="radio" id="25" name="age" value="3" required/>
				<label for="25">25 - 34</label></li>

			<li><input type="radio" id="35" name="age" value="4" required/>
				<label for="35">35 - 44</label></li>

			<li><input type="radio" id="45" name="age" value="5" required/>
				<label for="45">45 and older</label></li>

		</div>

		<div id="why">
			<ul><label className="main-label" for="why">Why do you want to adopt a dog? Please check all that apply:</label></ul>
			<li><input type="checkbox" name="reason" id="companion" value="companion"/>
				<label for="companion">Pet & Companion</label></li>

			<li><input type="checkbox" name="reason" id="gift" value="gift"/>
				<label for="gift">Gift</label></li>

			<li><input type="checkbox" name="reason" id="hunting" value="hunting"/>
				<label for="hunting">Hunting Dog</label></li>

			<li><input type="checkbox" name="reason" id="breeding" value="breeding"/>
				<label for="breeding">Breeding Dog</label></li>

			<li><input type="checkbox" name="reason" id="guard" value="guard"/>
				<label for="guard">Guard Dog</label></li>

			<li><input type="checkbox" name="reason" id="senior" value="senior"/>
				<label for="senior">For a Senior</label></li>

			<li><input type="checkbox" name="reason" id="child" value="child"/>
				<label for="child">For a Child</label></li>

		</div>

		<div id="allergies">
			<ul><label className="main-label" for="allergies">Is anyone in your household allergic to pets?</label></ul>

			<li><input type="radio" id="yes" name="allergy" value="1" required/>
				<label for="yes">Yes</label></li>

			<li><input type="radio" id="no" name="allergy" value="2" required/>
				<label for="no">No</label></li>

			<li><input type="radio" id="sometimes" name="allergy" value="3" required/>
				<label for="sometimes">Sometimes</label></li>
		</div>

		<div id="pets-household">
			<ul><label className="main-label" id="number-label">How many pets are already in your household?
			</label></ul>
			<li><input type="number" id="number" min="1" max="10" placeholder="0"/></li>
		</div>

		<div id="housing">
			<label className="main-label">What type of housing you reside?</label>
			<select id="dropdown">
			<option disabled selected value>Select an option</option>
			<option value="apt">Apt / Condo</option>
			<option value="house">House</option>
			<option value="other">Other</option>
			</select>
		</div>

		<div id="prepare">
			<label className="main-label">How did you prepare yourself?</label>
		</div>
		<div id="textarea">
    	<textarea id="comments"
			  rows="10" cols="70" placeholder=" Write here how did you prepare yourself for adoption."></textarea>
		</div>

		<div id="button">
			<button type="submit" id="submit">Submit</button>
		</div>


	</form>
</div>

  )
}

export default AdoptPet