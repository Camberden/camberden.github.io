/* exported chartOfAccounts accountingData */

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
 */
const totalStocks = [];


// TODO Generate stock from form:


/**
 * 
 * @param {Stock} stockItem 
 */
function issueStock(stockItem) {
	totalStocks.push(stockItem);
	if (stockItem.stockType === "Common Stock") {
		commonStockOutstanding += stockItem.amount;
	} 
}

/**
 * 
 * @param {Stock} stockItem 
 */
function generateStockDescription(stockItem) {
	let stockDescription = ``;
	switch(stockItem){
		case "Common Stock":
			stockDescription = `${stockItem.amount} shares of ${stockItem.parValue} par ${stockItem.stockType} (${stockItem.fairValue} fair value)`;
		break;
		case "Preferred Stock":
			stockDescription = `${stockItem.amount} shares of ${stockItem.parValue} par ${stockItem.stockType} (${stockItem.fairValue} fair value)`;
		default:
			stockDescription = `${stockItem.stockType}`;
		break;
	}
	const stockDescriptionDisplay = document.getElementById("stock-hover");
	stockDescriptionDisplay.textContent = stockDescription;
}


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