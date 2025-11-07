// TODO: Make parsable questions in prose.
/*
	`
	| ACC
	| Chapter
	| TAGS
	| &emsp;
	Notes Input
	`
	,
*/

/* ---------- GENERAL ACCOUNTING CONCEPTS ---------- */

const chartOfAccounts = [
	"Cash",
	"Accounts Receivable",
	"Accounts Payable",
	"Restricted Cash",
	"Inventory",
	"Cost of Goods Sold",
	"Sales Revenue",
	"Service Revenue",
	"Common Stock",
	"Preferred Stock",
	"Treasury Stock",
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
		console.log(entry);
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
	// demoEntries.forEach(entry => {
	// 	stagedEntries.push(entry);
	// });

	// console.log(stagedEntries);
	return(demoEntries);
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

let entityName = "Demonstration Entity";
let balanceSheetDate = "November 2nd, 2025";
let balanceSheetTemplate = `

<h5>${entityName}</h5>
<p>Balance Sheet</p>
<p>At ${balanceSheetDate}</p>
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

`;

function generateBalanceSheetTemplate() {
	document.getElementById("balance-sheet").innerHTML = balanceSheetTemplate;
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
		commonStockOutstanding = parseInt(stockItem.amount) + parseInt(commonStockOutstanding);
		document.getElementById("common-stock-outstanding").innerHTML = commonStockOutstanding;
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