/* exported chartOfAccounts accountingData */

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
	"Inventory",
	"Cost of Goods Sold",
	"Sales Revenue",
	"Common Stock",
	"Preferred Stock",

];
const accountingData = [
	"Diluted EPS",
	"Preferred Stock",
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
 * @var Stock[]
 * @var PreferredStock
 */
const totalStocks = [];


/**
 * 
 * @param {Stock} stockItem 
 */
function issueStock(stockItem) {
	totalStocks.push(stockItem);
	if (stockItem.stockType === "Common Stock") {
		commonStockOutstanding += stockItem.amount;
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