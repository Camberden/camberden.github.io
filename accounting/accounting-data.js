/* ---------- GENERAL ACCOUNTING CONCEPTS ---------- */

class AccCalculation {
	/**
	 * @param {String} formula 
	 * @param {String[]} pA 
	 * @param {String} procedure
	 */
	constructor(formula, pA, procedure) {
		this.formula = formula;
		this.pA = pA; // is placeholder string in form element; value to be updated, perhaps?
		//ADD FORMULA PARAM: `([0]-[1])/([2]+[3])`;
		this.procedure = procedure;
	}
}
const accCalcs = [
	//`([0]-[1])/[2],
	eps = new AccCalculation("EPS", ["Net Income", "Preferred Dividends", "Common Shares Outstanding"], `([0]-[1])/[2]`),
	//`([0]-[1])/([2]+[3]),
	dilutedEps = new AccCalculation("Diluted EPS", ["Net Income", "Other Debt Interest Savings", "Common Stock Outstanding", "Conversion of Securities"], `([0]-[1])/([2]+[3])`), 
];

/**
 * @todo Determine amount of "(", perform each operation independently
 * @param {String[]} content 
 * @returns 
 */
function gatherParentheticalOperations(content) {
	let purgedProcedure = content;
	console.log(purgedProcedure);
	const parenCount = purgedProcedure;
	console.log("ParenCount: " + parenCount);
	const val = Array.from(parenCount).map((char, index) => {
		if (char === "(") {
			++index;
		}
		return index; 
	});
	console.log("New ParenString val: " + val);
	console.log(val); // with this, I can use a for loop for a defined amount of times on any procedure
	
	let parsedProcedure = [];


	// Change to while
	if(purgedProcedure.includes("(")) {
		let startIndex = purgedProcedure.indexOf("(");
		let endIndex = purgedProcedure.indexOf(")");
			// Change to while
		if (purgedProcedure[startIndex + 1] === "(") {
			startIndex = content[startIndex + 1];
		}
		let pushedOperation = purgedProcedure.substring(purgedProcedure[startIndex], purgedProcedure[endIndex]);
		console.log(pushedOperation);
		parsedProcedure += pushedOperation;
		purgedProcedure.replace(pushedOperation, "");
	}
	


	const applyOperand = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
	'/': function (x, y) { return x / y},
	}


	return parsedProcedure;

}
// gatherParentheticalOperations(`([0]-[1])/[2]`);

/**
 * @todo Expend for future operability
 * @param {AccCalculation} calc 
 * @returns {String} prose
 */
function formulaParse(calc) {
/* 
from: https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript
*/
	let procedure = `([0]-[1])/[2]`;
	const applyOperand = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
	'/': function (x, y) { return x / y},
	}

	

	for (let i = 0; i < calc.pA.length; i++) {
		console.log(procedure.includes(`[${i}]`));
		if (procedure.includes(`[${i}]`)) {
			procedure = procedure.replaceAll(`[${i}]`, ` ${calc[i]} `);
		}
	}
	if (procedure.includes("/")){
		procedure = procedure.replace("/", `<hr class="hr-custom">`);
	}
	return procedure;
}
formulaParse(accCalcs[0]);
// document.getElementById("dev-procedure").innerHTML = formulaParse(accCalcs[0]);

const chartOfAccounts = [
	"Cash",
	"Accounts Receivable",
	"Accounts Payable",
	"Restricted Cash",
	"Inventory",
	"Cost of Goods Sold",
	"Sales Revenue",
	"Service Revenue",
	// Equity
	"Common Stock",
	"Preferred Stock",
	"Treasury Stock",
	"Paid-in Capital—Excess of Par",
	"Paid-in Capital—Excess of Par, Common",
	"Paid-in Capital—Excess of Par, Preferred",
	"Paid-in Capital—Share Repurchase",
	"Paid-in Capital—Stock Options",
	"Paid-in Capital—Expiration of Stock Options",

];

const accountingProcessingCycle = [
	"Obtain information about external transactions from source documents",
	"Analyze the transaction",
	"Record the transaction in a journal",
	"Post from the journal to the general ledger accounts",

	"Prepare an unadjusted trial balance",
	"Record adjusting entries and post to the general ledger accounts",
	"Prepare an adjusted trial balance",
	"Prepare financial statements",

	"Close the temporary accounts to retained earnings",
	"Prepare a post-closing trial balances"
];

/* ---------- JOURNAL ENTRY & GENERAL LEDGER MODULE ---------- */

class JournalEntry {
	/**
	 * @param {string} account - Account name in Chart of Accounts
	 * @param {string} accountType - Asset, Liability, Equity, Revenue, or Expense?
	 * @param {string} debitOrCredit - Debit or Credit?
	 * @param {number} balance - Carrying balance of entry
	 */
	constructor(account, accountType, debitOrCredit, balance) {
		this.account = account;
		this.accountType = accountType;
		this.debitOrCredit = debitOrCredit;
		this.balance = balance;
	}
}

/**
 * @type JournalEntry[]
 */
const journalEntries = [];

/**
 * @type JournalEntry[]
 * @description 
 * - Non-constant Array of Journal Entries currently written on Ledger Workspace
 * - These are not yet committed to the General Ledger Module
 * - Fire postToLedger() to send from stagedEntries to journalEntries
 * @see journalEntries
 */
let stagedEntries = [];

/**
 * @description Gathers all Journal Entry account names
 * @returns number[]
 */
function gatherUniqueAccountNames() {
	/**
	 * @type string[]
	 */
	const accountNames = []
	journalEntries.forEach(entry => {
		if (!accountNames.includes(entry.account)) {
			accountNames.push(entry.account);
		}
	});
	return accountNames;
}

/**
 * @description Returns the amount entries of the same account
 * @param {string} name 
 * @returns number
 */
function gatherCountOfSameAccounts(name) {
	let c = 0;
	journalEntries.forEach(entry => {
		console.log(entry.account);
		if (name === entry.account) {
			c++;
		}
	});
	return c;
}

/**
 * @description Loads a JournalEntry[] into stagedEntries
 * @returns stagedEntries
 */
function generateDemoJournalEntries() {
	const demoEntries = [
		demoCash = new JournalEntry("Cash", "Asset", "Debit", 75),
		demoSupplies = new JournalEntry("Supplies", "Asset", "Debit", 25),
		demoAccountsPayable = new JournalEntry("Accounts Payable", "Liability", "Credit", 100),
	];

	const acc221Ch19UnexercizedOptions = [
		a = new JournalEntry("Cash", "Asset", "Debit", 175),
		b = new JournalEntry("Paid-in Capital—Stock Options", "Equity", "Debit", 40),
		c = new JournalEntry("Common Stock", "Equity", "Credit", 5),
		d = new JournalEntry("Paid-in Capital—Excess of Par", "Equity", "Credit", 210),
	]

	return(acc221Ch19UnexercizedOptions);
}

/**
 * @param JournalEntry
 * @description
 * - Writes one line in the General Ledger
 * - Pushes each entry into the journalEntries Array
 */
function writeLedgerLine(entry) {

	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");

	td1.textContent = entry.account;
	if (entry.debitOrCredit === "Debit") {
		td1.style.textIndent = "none";
		td2.textContent = entry.balance;
		td3.textContent = "";

	}
	if (entry.debitOrCredit === "Credit") {
		td1.style.textIndent = "1rem";
		td2.textContent = "";
		td3.textContent = entry.balance;
	}

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	journalEntries.push(entry);

	document.getElementById("ledger-table").appendChild(tr);
}

/**
 * @param {JournalEntry[]} entryArray 
 */
function accountingFormula(entries) {
	let sumAssets = 0;
	let sumLiabilities = 0;
	let sumEquities = 0;
	entries.forEach(entry => {
		if(entry.accountType === "Asset" && entry.debitOrCredit === "Debit") {
			sumAssets += parseInt(entry.balance);
		}
		if(entry.accountType === "Liability" && entry.debitOrCredit === "Credit") {
			sumLiabilities += parseInt(entry.balance);
		}
		if(entry.accountType === "Equity" && entry.debitOrCredit === "Credit") {
			sumEquities += parseInt(entry.balance);
		}
	});
	console.log(`Assets (${sumAssets}) = Liabilities (${sumLiabilities}) + Equity (${sumEquities})`);
	return (sumAssets === sumLiabilities + sumEquities);
}

/* ---------- BALANCE SHEET ---------- */

function generateStatementTemplates() {
	let entityName = "Demonstration";
	const statementTemplates = [
		balanceSheetTemplate = `
<h5>${entityName}</h5>
<p>Balance Sheet</p>
<p>At ${new Date().toLocaleDateString("en-US")}</p>
<hr class="hr-custom">
<div id="balance-sheet-assets">
<p>Assets</p>
<span>Current Assets:</span>
<ul id="balance-sheet-current-assets">

</ul>
<p>Total Current Assets:</p>
<p>Property, Plant, & Equipment:</p>
<ul id="balance-sheet-ppe-assets">


</ul>
<span>Total Assets:</span>
<hr class="hr-custom">
</div>

<div id="balance-sheet-liabilities-and-shareholders-equity">
<p>Liabilities & Shareholders' Equity</p>

<span>Current Liabilities:</span>
<ul id="balance-sheet-current-liabilities">

</ul>
<span>Total Current Liabilities</span>
<span>Long-term Liabilities</span>
<ul id="balance-sheet-noncurrent-liabilities>

</ul>
<p>Shareholders' Equity</p>
<ul id="balance-sheet-shareholders-equity>

</ul>
<p>Total Shareholders' Equity:</p>
<p>Total Liabilities & Shareholders' Equity:</p>
<hr class="hr-custom">
</div>
`,

incomeStatementTemplate = `
`,

statementOfCashFlowsTemplate = `
`,

statementOfShareholdersEquityTemplate = `
<h5>${entityName}</h5>
<p>Statement of Shareholder's Equity</p>
<p>At ${new Date().toLocaleDateString("en-US")}</p>
<hr class="hr-custom">
<div id="balance-sheet-assets">
<p>Shareholders' Equity:</p>

<span>Capital Stock</span>
<ul id="shareholders-equity-stock">
</ul>
<span>Acculumlated Other Comprehensive Income</span>
<ul id="shareholders-equity-aoci">

<li>Retained Earnings</li>
</ul>

`,
	];
	document.getElementById("balance-sheet").innerHTML = statementTemplates[0];
	document.getElementById("income-statement").innerHTML = statementTemplates[1];
	document.getElementById("statement-of-cash-flows").innerHTML = statementTemplates[2];
	document.getElementById("statement-of-shareholders-equity").innerHTML = statementTemplates[3];
}

/* ---------- INCOME STATEMENT ---------- */
/* ---------- STATEMENT OF CASH FLOWS ---------- */

/* ---------- STATEMENT OF SHAREHOLDERS' EQUITY ---------- */

let commonStockOutstanding = 0;
let earningsPerShare = 0;

class Stock {
	/**
	 * @param {string} stockType Type of stock issued
	 * @param {number} amount Total amount of stock offerings in this issue
	 * @param {number} parValue Par value of this stock issue
	 * @param {number} bookValue Recorded value of this stock issue at historical cost
	 * @param {number} fairValue Market value of this stock issue
	 */
	constructor(stockType, amount, parValue, bookValue, fairValue) {
		this.stockType = stockType;
		this.amount = amount;
		this.parValue = parValue;
		this.bookValue = bookValue;
		this.fairValue = fairValue;
	}
}

/**
 * @extends Stock
 */
class PreferredStock extends Stock {
	/**
	 * @param {string} stockType - Type of stock issued
	 * @param {number} amount - Total amount of stock offerings in this issue
	 * @param {number} parValue - Par value of this stock issue
	 * @param {number} bookValue - Recorded value of this stock issue at historical cost
	 * @param {number} fairValue - Market value of this stock issue
	 * @param {boolean} convertible - Whether this stock issue is convertible
	 * @param {boolean} cumulative - Whether this stock issue is cumulative 
	 * - CUMULATIVE: if specified dividend is not paid for a given year,
	 * the unpaid dividends accumulate and must be made up in later dividend year
	 * before any dividends are paid on common shares as "Dividends in Arrears"
	 * - NONCUMULATIVE: if dividend not declared, it will not be paid at all
	 * @param {boolean} participating - Whether this stock issue is participating
	 * - PARTICIPATING: may receive additional dividends beyond stated amount
	 * - NONPARTICIPATING: dividends are limited to stated amount
	 * @param {boolean} callable Whether this stock issue is callable
	 */
	constructor(stockType, amount, parValue, bookValue, fairValue, convertible, cumulative, participating, callable) {
		super(stockType, amount, parValue, bookValue, fairValue);
		this.convertible = convertible;
		this.cumulative = cumulative;
		this.participating = participating;
		this.callable = callable;
	}
}

/**
 * @type Stock[]
 */
const totalStocks = [];

/**
 * 
 * @param {Stock} stockItem 
 */
function issueStock(stockItem) {
	totalStocks.push(stockItem);
	if (stockItem.stockType === "Common Stock") {
		commonStockOutstanding = parseFloat(stockItem.amount).toFixed(2) + parseFloat(commonStockOutstanding).toFixed(2);
		document.getElementById("common-stock-outstanding").innerHTML = `$ ${parseFloat(commonStockOutstanding).toFixed(2)}`;
	}
}

/**
 * @param {Stock} stockItem 
 */
function generateStockDescription(stockItem) {
	let stockDescription = ``;
	switch(stockItem.stockType) {
		case "Common Stock":
			stockDescription = `${stockItem.amount} shares of $${stockItem.parValue} par ${stockItem.stockType} ($${stockItem.fairValue} fair value)`;
		break;
		case "Preferred Stock":
			stockDescription = `${stockItem.amount} shares of $${stockItem.parValue} par ${stockItem.stockType} ($${stockItem.fairValue} fair value)`;
		break;
		default:
			stockDescription = `${stockItem.amount} shares of $${stockItem.parValue} par ${stockItem.stockType} ($${stockItem.fairValue} fair value)`;
		break;
	}
	return stockDescription;
	// const stockDescriptionDisplay = document.getElementById("stock-hover");
	// stockDescriptionDisplay.textContent = stockDescription;
}