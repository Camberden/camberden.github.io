# Notes during Site Development

*01/25/2025*  
*Pittsboro, NC*  
*0016HRS*  

## CSS
* From Blog for Grid Item:  
` background: rgba(144, 229, 238, 0.1); [#333B50] delft blue `
* `text-shadow: #ff00ff;` looks great
---
## JS
* Wrapping a whole substring statement in parens coerces the datatype to number.
* Getting instance of class:   
`
name = document.getElementsByClassName("closemenu")[0]
`
* Prevent form submit refresh:  
`
	function handleForm(event) {
	event.preventDefault();
}
`
* Depopulating list of child nodes:
`
	function depopulateTrackList() {
		while (trackList.lastChild) {
		trackList.removeChild(trackList.lastChild);
	}
} 
`
---
## GIT
* Recall for large pushes: `
git config --global http.postBuffer 157286400
`


---
#### MISCELLANEOUS =>

##### WORKSPACE
	- Segregation Visualizer and Budget App are ducked in-line as `style="display:none;"`

##### ACCOUNTING
	- For each instance of an assignment of a string to a float, parseFloat and make toFixed(2);

##### FUTURE MIGRATION
	- NPM unit testing using either Jest or Mocha & Chai pairing

##### GLOBALIZATION
	- Ensure dynamically resized elements are within divs to prevent page warping

##### FILE SYSTEM ICONS
	- Symbols: https://www.figma.com/design/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521-84115&p=f
---