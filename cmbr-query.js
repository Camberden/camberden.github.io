/** ===== CMBR-QUERY.JS =====>
 *
 * @description Tests a txt file parse exported
 * from Anki. Parsing done outside producing through
 * cmbr-anki.sh runner.
 * @static
 * @template <script src="cmbr-query.js></script>
 */
(() => {
	const splitTxt = (textFile) => {
		const delimited = textFile.split("\n");
		delimited.forEach(segment => {
			segment.split("\t");
		});
	}

	sout(splitTxt(`CMBR:BUS-115	Article I of the Constitution establishes what?	The Legislatative Branch (Congress)	constitution
CMBR:BUS-115	Article II of the Constitution enables what?	It enables the Executive Branch (President &amp; Agencies)	constitution
CMBR:BUS-115	Article III of the Constitution grants what?	It grants authority to the Judicial Branch to interpret law.	constitution
CMBR:BUS-115	Why does the First Amendment protect Free Speech?	"If a state protects Free Speech, then there would be an open <span style=""background-color: rgb(255, 255, 0); color: rgb(0, 0, 255);"">Marketplace of Ideas</span> that leads to an informed citizenry and effective government."	constitution
CMBR:BUS-115	Buckley v. Valeo (1976)	Addressed campaign finance laws and determined that limits on campaign expenditures violate the First Amendment, though contributions can be restricted to prevent corruption. Followed precedent from the Federal Election Campaign Act of 1971 and set precedent for Citizens United v. Federal Election Commission (2010) which determines corporations and unions can work to influence elections.	case constitution
`));
})();

