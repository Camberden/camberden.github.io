// ----- LIFE EVENTS AND MONTHLY SUMMARIES BY YEAR ----- //

/**
 * @param {string} name
 * @param {Date} birthday
 */
class Person {
	constructor(name, birthday) {
		this.name = name;
		this.birthday = birthday;
	}
}

/**
 * @param {string} title
 * @param {string} eventDate - Format: YYYY-MM-DD
 * @param {string} photo
 * @param {string[]} description
 */
class LifeEvent {
	constructor(title, eventDate, photo, description) {
		this.title = title;
		this.eventDate = eventDate;
		this.photo = photo;
		this.description = description;
	}
}
const events = [
	birthEvent = new LifeEvent("My Birth", "1993-11-14", "", 
		"I arrived physically on this planet."),
	rofDay = new LifeEvent("R.O.F. Day", "2017-7-9", "", 
		"Personal Holiday Established: the emotional difficulties encountered marked the very beginning of my self-reinvention"),
	firingDay = new LifeEvent("Firing Day", "2017-11-14", "", 
		"I was fired from my first position after college for tardiness. This event, coupled with July 9th, helped set my self-reinvention in motion"),
	securityCareer = new LifeEvent("Began Security Career", "2017-1-19", "", 
		"I began my new role in private security where I set out to redeem myself for past failures"),
	firstSecurityPromotion = new LifeEvent("First Security Promotion", "2018-6-16", "",
		"I promoted for the first time and donned the white shirt as a shift supervisor."),
	secondSecurityPromotion = new LifeEvent("Second Security Promotion", "2018-9-8", "",
		"I promoted a second time to a floating shift supervisor with more intra-region responsibilities"),
	thirdSecurityPromotion = new LifeEvent("Third Security Promotion", "2018-11-2", "", 
		"I promoted a third time to assistant operations manager, with intra-regional duties including payroll"),
	wvRelocation = new LifeEvent("Relocation to West Virginia", "2019-10-24", "",
		"I relocated to West Virginia to pursue a software development career at a talent-incubator company"),
	vanceRelocation = new LifeEvent("Relocation to North Carolina", "2020-8-9", "", 
		"I uprooted and took my life to Vance County, NC"),
	publicCareer = new LifeEvent("Began Public Service", "2020-8-10", "", 
		"I began my career of service."),
	chathamRelocation = new LifeEvent("Relocation to Chatham County, NC", "2024-12-16", "", 
		"I relocated to Chatham County, NC due to interpersonal events."),
	chryslerTotalled = new LifeEvent("Car Totalled", "2025-3-3", "", 
		"My trusty car was deemed a total loss."),
	whiteCar = new LifeEvent("White Car", "2025-3-4", "", 
		"Got my new ride. Its white coat is familiar as it's the same as those at my workplace"),
	japanTravel1 = new LifeEvent("First Experience in Japan", "2025-6-22", "", 
		"To Tokyo, Nara, Kyoto, and Osaka"),
	workanniversary5 = new LifeEvent("Pension Vested", "2025-8-10", "", 
		"Raise & Vesting"),
	workanniversary6 = new LifeEvent("6th Year Work Anniversary", "2026-8-10", "", 
		"Maxxed; Advanced Cert"),

];

/**
 * @param {string} month - Format: Month-YYYY
 * @param {string} summary
 * @param {string} tune
 * @param {string} tuneLink
 */
class MonthlySummary {
	constructor(month, summary, tune, tuneLink) {
		this.month = month;
		this.summary = summary;
		this.tune = tune;
		this.tuneLink = tuneLink;
	}
}
const monthlySummaries = [
	// january2021 = new MonthlySummary("January-2021", "pending", "pending", "pending"),
	// february2021 = new MonthlySummary("February-2021", "pending", "pending", "pending"),
	// march2021 = new MonthlySummary("March-2021", "pending", "pending", "pending"),
	// april2021 = new MonthlySummary("April-2021", "pending", "pending", "pending"),
	// may2021 = new MonthlySummary("May-2021", "pending", "pending", "pending"),
	// june2021 = new MonthlySummary("June-2021", "pending", "pending", "pending"),
	// july2021 = new MonthlySummary("July-2021", "pending", "pending", "pending"),
	// august2021 = new MonthlySummary("August-2021", "pending", "pending", "pending"),
	// september2021 = new MonthlySummary("September-2021", "pending", "pending", "pending"),
	// october2021 = new MonthlySummary("October-2021", "pending", "pending", "pending"),
	// november2021 = new MonthlySummary("November-2021", "pending", "pending", "pending"),
	// december2021 = new MonthlySummary("December-2021", "pending", "pending", "pending"),
	// january2022 = new MonthlySummary("January-2022", "pending", "pending", "pending"),
	// february2022 = new MonthlySummary("February-2022", "pending", "pending", "pending"),
	// march2022 = new MonthlySummary("March-2022", "pending", "pending", "pending"),
	// april2022 = new MonthlySummary("April-2022", "pending", "pending", "pending"),
	// may2022 = new MonthlySummary("May-2022", "pending", "pending", "pending"),
	// june2022 = new MonthlySummary("June-2022", "pending", "pending", "pending"),
	july2022 = new MonthlySummary("July-2022", "pending", "Orbital - Somewhere out There Part 2", "https://www.youtube.com/watch?v=HRFel2UtyiE"),
	march2023 = new MonthlySummary("March-2023", "pending", "Depeche Mode - My Little Universe", "https://www.youtube.com/watch?v=_oxm6rfzQaI"),
	april2023 = new MonthlySummary("April-2023", "pending", "Depeche Mode - Broken", "https://www.youtube.com/watch?v=urbmwI8APdo"),
	may2023 = new MonthlySummary("May-2023", "pending", "Depeche Mode - Ghosts Again", "https://youtu.be/iIyrLRixMs8?si=owHvGxz8W8BxlJhJ"),
	june2023 = new MonthlySummary("June-2023", "pending", "Depeche Mode - My Cosmos is Mine", "https://www.youtube.com/watch?v=S698DWXhu5I"),
	july2023 = new MonthlySummary("July-2023", "pending", "Orbital - Lush 3-1", "https://www.youtube.com/watch?v=rlSgFom9SxU"),
	september2023 = new MonthlySummary("September-2023", "pending", "Orbital - Nowhere", "https://www.youtube.com/watch?v=ktgznOFpXeY"),
	october2023 = new MonthlySummary("October-2023", "pending", "Orbital - Nowhere", "https://www.youtube.com/watch?v=ktgznOFpXeY"),
	november2023 = new MonthlySummary("November-2023", "pending", "Hot Chip - One Life Stand", "https://www.youtube.com/watch?v=db9dBKcpIOw"),
	december2023 = new MonthlySummary("December-2023", "pending", "Hot Chip - I Feel Better", "https://www.youtube.com/watch?v=EvSjYYep3t4"),
	december2024 = new MonthlySummary ("December-2024", "pending", "Pet Shop Boys - Suburbia", "https://www.youtube.com/watch?v=hUYfz_cEFzs"),
	january2025 = new MonthlySummary("January-2025", "pending", "Nobonoko - Cat Comet", "https://youtu.be/6uNkTqNSulY?si=QwNoXLVSVgJFtRRw&t=2342"),
	feburary2025 = new MonthlySummary("February-2025", "pending", "Napcast - People Places", "https://youtu.be/3MFfqQj3NUE?si=rqsLFwhTzhKhfQ98&t=198"),
	march2025 = new MonthlySummary("March-2025", "pending", "Yu Takahashi - Ashita wa Kitto Ii Hi ni Naru", "https://www.youtube.com/watch?v=cpIa89_rZoA"),
	april2025 = new MonthlySummary("April-2025", "pending", "Huwie Ishizaki - Peanuts Butter", "https://www.youtube.com/watch?v=ggCphjT_rPE"),
	may2025 = new MonthlySummary("May-2025", "pending", "Yu Takahashi - WINDING MIND", "https://www.youtube.com/watch?v=DBGXqqItKko"),
	june2025 = new MonthlySummary("June-2025", "pending", "Yu Takahashi - Open World", "https://www.youtube.com/watch?v=JwBWxcWP3BU"),
	july2025 = new MonthlySummary("July-2025", "pending", "Huwie Ishizaki - Bokugairuzo", "https://www.youtube.com/watch?v=BfoXJiHigl0"),
	august2025 = new MonthlySummary("August-2025", "pending", "pending", "pending"),
	september2025 = new MonthlySummary("September-2025", "pending", "pending", "pending"),
	october2025 = new MonthlySummary("October-2025", "pending", "pending", "pending"),
	november2025 = new MonthlySummary("November-2025", "pending", "Louie Zong - Rise & Shine", "https://youtu.be/BSyryNMZijQ?si=nJDZpZZKLqh_1dRX&t=459"),
	// december2025 = new MonthlySummary("December-2025", "pending", "pending", "pending"),
	// january2026 = new MonthlySummary("January-2026", "pending", "pending", "pending"),
	// february2026 = new MonthlySummary("February-2026", "pending", "pending", "pending"),
	// march2026 = new MonthlySummary("March-2026", "pending", "pending", "pending"),
	// april2026 = new MonthlySummary("April-2026", "pending", "pending", "pending"),
	// may2026 = new MonthlySummary("May-2026", "pending", "pending", "pending"),
	// june2026 = new MonthlySummary("June-2026", "pending", "pending", "pending"),
	// july2026 = new MonthlySummary("July-2026", "pending", "pending", "pending"),
	// august2026 = new MonthlySummary("August-2026", "pending", "pending", "pending"),
	// september2026 = new MonthlySummary("September-2026", "pending", "pending", "pending"),
	// october2026 = new MonthlySummary("October-2026", "pending", "pending", "pending"),
	// november2026 = new MonthlySummary("November-2026", "pending", "pending", "pending"),
	// december2026 = new MonthlySummary("December-2026", "pending", "pending", "pending"),
	// january2027 = new MonthlySummary("January-2027", "pending", "pending", "pending"),
];

/**
 * @param {string} obligation
 * @param {string} startMonth - Format: Month-YYYY
 * @param {string} endMonth - Format: Month-YYYY
 * @param {string} summary
 */
class MonthlyObligation {
	constructor(obligation, startMonth, endMonth, summary) {
		this.obligation = obligation;
		this.startMonth = startMonth;
		this.endMonth = endMonth;
		this.summary = summary;

	}
}
const monthlyObligations = [
	sp2026 = new MonthlyObligation("ACC220", "January-2025", "April-2025", "Intermediate Accounting I"),
	su2025 = new MonthlyObligation("BUS110", "May-2025", "July-2025", "Study abroad Japan course."),
	fa2025 = new MonthlyObligation("ACC221", "August-2025", "December-2025", "Intermediate Accounting II"),
	sp2026 = new MonthlyObligation("ACC269", "January-2026", "April-2026", "Auditing & Assurance Services"),
	su2026 = new MonthlyObligation("ACC149&BUS115", "May-2026", "July-2026", "Intro to ACC Spreadsheets & Business Law I"),
	fa2026 = new MonthlyObligation("ACC129&ACC140", "August-2026", "December-2026", "Individual Income Taxes & Payroll Accounting"),
];