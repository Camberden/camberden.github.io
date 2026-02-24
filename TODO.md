# Points of Concern
*02/21/2026*  
*Pittsboro, NC*  
*0354HRS* 

## styles.css
*Ensuring consistent global styles is paramount!*

- Identify what causes the background color at index.html.
> It's the body tag. I moved it to the top at global semantic tag styles

- I need to update the button styles such that I'm using :hover and :active
	- I only need one style for after clicked, to be removed after a second click.
> 
---
## action.js
*How to manipulate*

- When using imports like supabase or a database file with its own imports:
> `import { supabase, CMBRdb } from './cmbr-db.js'`;
> - then, turn it into a module: `<script type="module" src="./action.js"></script>`

- I would like to do init and cleanup for smooth page transitions when the time comes.
> Need to assign page-specific handlers

- Dealing with my JSON issues
> The issue is that your connectCMBRjson() function doesn't return the fetch promise chain. When you don't return a promise, await gets undefined.

---

# Ideas and To Do
*04/21/2024*  
*Chapel Hill, NC*  
*2336HRS* 

### Testing Place ✔️
1. Currently using "Code Workspace" for developing pages.

### Music
1. Tracks should have a play and stop.
2. Could make tunes objects.
3. Include flag for lyrical/instrumental.
4. Include flag for complete/incomplete.
5. Sounds of the years:
6. For each period of my life, certain music is associated.
7. Create a timeline including links to associated songs.

### Site Style ✔️
1. Consider a new color pallette in the spirit
2. of the CHZC using dark brick red with coolish greys;
3. add light blue to the pallette (like Oostenaia)

### Site Emblem ✔️
1. Redo homepage image to reflect my real signature with
2. the strokes angled 45º to the top right aside the name.

### Japanese Resource
1. Add a kanji/vocab practice module for passive studying;
2. Be able to filter items by topic.
3. Translate directly to English, ignorecase. Recall multiple solutions.
4. @2025: Using Clozemaster Primary
5. Use page to upload study notes  

### Peninsula Culture and Society  
1. Take inspiration from NHK programs, my Minecraft conworld, and my life experience.
2. Ginkgo leaves. Ginkgo nuts. Ginkgo nut sorghum. Sanukite andesine. Catfish. Big river culture. Koi-koi like game. 
3. Make Conlang based on Rollian Script; hangulize?
4. * In pin o ppa 
	* In kip   pi
	* En pen o ppa
	* Kiptei

### Digital Planner Module
1. Make planner page visualizer, highlight passed days as I do irl;
2. Configure to display work shifts, and display two weeks at a time.
3. Eventually link to long-term calendar with Luna help.
4. @2025: Using Lifecraft Page

### Digital Journal Module ✔️
1. Digital Journal Extention will take over Musings, and will no longer have those recordings.  
2. A Journal Entry input shall be in my irl pen-on-paper style.
3. Take into account multiple pages. Make permanentmarker the default font.  
4. Be able to change the line color for printing; Be able to print blank pages.  
5. @2025: This is my Blogging Page; can/will implement photos

### Work Origami (kippicard) Page
1. Make kippicard formatter for printout.
2. Display creations: kippicards, kippicardbricks, jenga, stands, displays, rods etc.
3. Perhaps make instructions! Can theme it on correctional officer work.

### Sutra Typing Game 
1. Lift code from typingtest, and type the transliterations corresponding to the Sino-Sanskrit Japanese on the screen.
2. Start with Heart Sutra or Enmei Jukku Kannon-Gyou;
3. Site different transliterations in different sanghas to ensure learned pronunciations are accepted as legitamate; site them below.
4. Make a button that allows display in case stuck; make a button that displays whole sutra. 
5. Toggle modern kanji and classical kanji.

### Page of Inmate Koans
1. Document enigmatic things inmates have said to me and treat them like Zen Koans. I could recite these.

### Floating Vocab, Coding, and Concepts
1. At Index or Dashboard, include floating text with links to specific blog entries that cover the concept.
2. Reference what is done for the Japanese iOS app.
3. I can include Coding, Philosophical, Conceptual, and Linguistic stuff.

### Dark Mode
1. Find color values to modify SVGs for a suitable Dark Mode.
2. Make a global toggle for Light and Dark Mode.
* @2025: Globally configured for a Dark Mode

### REM Font Relativity ✔️
1. Create a global font size in styles.css html tag.
2. Use rem to scale all site elements.

### Fix Salary Schedule to Month Based ✔️
1. Base the calculations on Months not Years
* @2025: Built paycard generator

### Luna's Blog Techniques ✔️
1. Learn her blog construction technique and apply to my own and also other utilities where large amounts of text are needed.
2. Integrate param annotations to streamline interpolation.
* @2025: This is my Blogging Page

### Refactor Bullets Using Custom CSS Class ✔️
1. Make em whatever I want. I took a screenshot on my phone from asmrcoder
* @2025: Can edit list-style-types; consider custom ones

### Precepts, Noble Truths, and Eightfold Path quiz
1. Drill Quizzes for these Buddhist values.
* @2025: Built lists and buttons; can turn into quizzes
	
### Turn Poems to Sutra Stuff
1. Thinking about turning the Musings Page into only Sutra/Buddhist Stuff.
2. Typing test would work well for that.
3. Be able to reduce the amount of text that appears for typing if it's very long.
* @2025: This is at the Musings Page

### Musings and Blog Separate from Typing Testing
1. Blog will be a new page. The typing test 'Musings' page will be used for Zen Studies.
2. Enable user to go to a specific line.
* @2025: Completed

### Accounting CPA Roadmap
1. Create a new Re-Education Module that will detail the credits, expected-cost, and timeline of attaining a CPA, all without the need for graduate education. 30 credits of ACC are needed; create calendar and show course timeline.
2. By July 9th, Make a personal finance excel sheet with visualization. Personal fiscal year shall be NC's.
3. Write reasons why you'd want do change career. Mention improvement to NC, personal quirks, work-life balance, zendo etc.
* @2025: Course progress visualizer complete; can be implemented into Lifecraft

### Articles and Divs
1. Change articles to divs where applicable
* @2025: Articles largely removed

### World Map w Drivable Car 2d Thing
1. Can create a history visualizer with 2D boxes navigable by id's on a large png map perhaps.
### Recipes
1. Create a page for all personal recipes!
### Pen Page
1. A page about fountain pen stuff

### Assign Tags for Blog ✔️
1. Implement tags.
### Assign Photos to Music tunes
1. Implement photos.
### Useful Dashboard links ✔️
1. Include Work Links like Strawberry+, Intranet, Fiori, Jisho, CHZC, and Satori Reader
2. Perhaps Link to a Youtube Playlist
* @2025: Completed and implemented site-wide.

### Artist Assets
1. Commission Artist for assets for site someday.
2. Me across many years and past selves.

### Zendo Game
1. Implement a simple zendo game with random generated participants, a relative timer, genuine sound assets, options for mudra, and activities that must be done according to the prescribed forms.

### SMHU Game
1. Simple game that's just like segregation unit operations.
* @2025: Built visualizer with some AI assets.

### Accounting Page
1. A dedicated page for accounting, to include course progress, CPA credit progress,
2. A monitor for multiple WTCC programs, and a practice module with mock excel.
* @2025: Presently completing t-account practice modules

### More Root CSS Classes
1. For global consistency
* @2025: Implemented.

### SVG signature
1. Main signature on index should be SVG
* @2025: Completed.

### Workspace Templater
1. Be able to template new simple pages through drafting at the workspace page.
2. I need:
	- Fountain Pen Page (musings?);
	- Japanese Page
	- Accounting Page
	- Eremoran Page (carved(luna) and script(kippi))
	- Kiptese (Kipta) / Kipteian (Kiptei) page
	- Musings = Sutra Page
	- Recipes

### Typing Test Algorithm
1. Implement typing test:
	- can draw from blog and musings and whatever else.
	- find an average from which to calculate WPM
	- address penalty issue, probably with relativity to 60 seconds
	- create personally useful drills
	- perhaps review averages based-on keyboard used

### Small Music Player Site-Wide
1. Implement site-wide player.
	- a module that would be available on all pages to play my tunes while browsing
	- requires root hosted music script
	- likely need a SPA through Laravel

### Add State Law Links for Pay and Retirement
1. Link budgetary statutes fo data.
2. Migrate to ncco.us

### Apply html tags for Blog Fields
1.  Use either native or custom tags to interpolate fields within content
2. Use the same for date, location, and time
* @2025: Completed; considering removing bespoke tags.

### Zazen Timer
1. Simple Timer with bell sample.

### Global Custom-Input Functionality with Handler
1. Implement onclick and onsubmit value editor globally for calculators

### Media Queries for All pages
1.  Ensure Sizing for more media types across all pages

### Languages Page
1. Combine Japanese, Conlang, Spanish, and other language data into one page.
2. Create Clozemaster-esque app for Eremoran

### Accounting Formulas Calc
1. Provide 2 input fields for calculation of all 2 parameter Formulas
2. Provide 3 input fields for calculation of all 3 parameter Formulas

### Travel Page 
1. Include AK and HI for US Map
2. Include Visited Countries' individual maps

### Coax Updates through Global Last Updated Date & Present
1. Let lifecraft know to do a task based on the last updated date
2. Let lifecraft know to do a task based on the present moment

### NCCO Forms
1. Upload standard documents: 138B, DC-160, GV, SC, RF, Special Draw etc. for Quiz
2. Disciplinary Quiz

### Accounting and Coding Side-Panel Libraries
1. Write libraries that show in-context journal entries
2. Write libraries that show useful coding strategies used to solve difficult issues

### Combine Dashboard and Lifecraft
1. Combine into a comprehensive personal dashboard

### Import Images from Phone  
1. Export images for index use
* Done through MacOS compression to medium jpeg


## Merge Pages
1. Lifecraft Dashboard ->
	- Lifecraft
	- Dashboard
	- Travel
	- Blog
	- Fantasy
2. Notes Depository ->
	- Anki
	- Language
	- Musings
	- Accounting
3. Pseudoprison ->
	- Mainframe
	- Segregation
4. Music ->
	- Music
