# Documentation Index
*Auto-generated documentation of site JavaScript functions*
*Generated: Monday, February 9, 2026*

---

## Core Utilities

## `cmbr.js`

### === CMBR.JS: GLOBAL PERSONAL UTILITIES ===>

### `sections()`
Site Map Links

### `bookmarks()`
Links to Frequented External Sites

### `CMBRutil()`
- Camberden Personal Utilities: Formally buttons.js, a Global JavaScript Handler

### `handleFormDefault()`
Handles all page forms, preventing reload upon form submission - CONFIGURED: Applies current form submission handling and default prevention - NONCONFIGURED: Returns page to normal form submission reloading
**Parameters:**
- {boolean} configured - Toggle boolean for default (reloading) prevention

### `connectCMBRjson()`
Reads .json File as text
**Parameters:**
- {String} txt Name of .json File

## `action.js`

### `latestUpdate()`
Personal Website: - From 2020 to Present - Primary workspace of my programming hobby - Date is changed for any first update completed on a new day.

### `convertDate()`
Converts my chosen date format for update display into a date Object
**Parameters:**
- {string} month
- {string} calendarDay
- {string} year
**Returns:** date Object

### `convertToJapaneseDate()`
Converts date object to a Japanese date.
**Parameters:**
- {Date} date

## Pages

## `accounting/accounting.js`

### `initGeneralLedger()`
- Generates the General Ledger Module

### `generateJournal()`
- Creates the Journal Module with specified amount of entries
**Parameters:**
- {number} number Amount of single-entry lines to generate

### `journalize()`
- Parses each staged journal entry from the Journal Module into a JournalEntry object
**Returns:** stagedEntries
**See Also:**
- stagedEntries

### `journalizeImportedEntries()`
- Parses each staged journal entry into the Journal Module - Can take a function returning a demonstration data set
**Parameters:**
- {JournalEntry[]} entries
**See Also:**
- stagedEntries

### `postToLedger()`
- Posts current Journal Entry Module data to the General Ledger - Refreshes stagedEntries array
**Parameters:**
- {JournalEntry[]} entries

### `displayedWorkspace()`
Incremented to fire selectAccountingGrid() to change viewed workspace modules.

## `blog/blog.js`

### `gatherTextBetweenTags()`
Gathers text within a blog post's content between custom tags such as `<b-title></b-title>`. The tag name without decorators, such as `b-title` for `<b-title></b-title>`.
**Parameters:**
- content
- tag

## `dashboard/dashboard.js`
*No documented functions found.*

## `fantasy/fantasy.js`
*No documented functions found.*

## `language/language.js`
*No documented functions found.*

## `lifecraft/lifecraft.js`

### `clearLifecraftField()`
Removes all elements within the main calerdar window

### `clearModal()`
Removes only the prose within modal

## `mainframe/mainframe.js`
*No documented functions found.*

## `music/music.js`

### `loadSortedTracks()`
Returns a list based on user input filter
**Parameters:**
- {Number} value

## `musings/musings.js`

### `cyclePanelCollections()`
- an extension of setInterval() to consolidate with animation duration
**Parameters:**
- {string[]} array - collection
- {number} milliseconds - number in milliseconds

## `segregation/segregation.js`
*No documented functions found.*

## `travel/travel.js`
*No documented functions found.*

## `workspace/workspace.js`
*No documented functions found.*

## `anki/cmbr-anki.js`

### `dummyExports()`
Dummy HTML Data if File Protocol Used @constant {String[][]}

### `ankiExports()`
String array of Relevant Anki .txt File Names

### `splitTxt()`
Converts processed .html from .txt for Use in Current Window @param {DOMParserSupportedType} html @returns {String[]} delimited

### `ankiFileSelect()`
Option Tag Generator for Local Readable .txt Files @param {String[]} txtFiles

### `routeAnkiData()`
Reads .txt File as .html @param {String} txt Name of .txt File @implements {Promise<Object>}

## Data

## `accounting/accounting-data.js`

### `stagedEntries()`
- Non-constant Array of Journal Entries currently written on Ledger Workspace - These are not yet committed to the General Ledger Module - Fire postToLedger() to send from stagedEntries to journalEntries
**See Also:**
- journalEntries

### `gatherUniqueAccountNames()`
Gathers all Journal Entry account names
**Returns:** number[]

### `gatherCountOfSameAccounts()`
Returns the amount entries of the same account
**Parameters:**
- {string} name
**Returns:** number

### `generateDemoJournalEntries()`
Loads a JournalEntry[] into stagedEntries
**Returns:** stagedEntries

### `writeLedgerLine()`
- Writes one line in the General Ledger - Pushes each entry into the journalEntries Array
**Parameters:**
- JournalEntry

### `ructor()`
- CUMULATIVE: if specified dividend is not paid for a given year, the unpaid dividends accumulate and must be made up in later dividend year before any dividends are paid on common shares as "Dividends in Arrears" - NONCUMULATIVE: if dividend not declared, it will not be paid at all - PARTICIPATING: may receive additional dividends beyond stated amount - NONPARTICIPATING: dividends are limited to stated amount
**Parameters:**
- {string} stockType - Type of stock issued
- {number} amount - Total amount of stock offerings in this issue
- {number} parValue - Par value of this stock issue
- {number} bookValue - Recorded value of this stock issue at historical cost
- {number} fairValue - Market value of this stock issue
- {boolean} convertible - Whether this stock issue is convertible
- {boolean} cumulative - Whether this stock issue is cumulative
- {boolean} participating - Whether this stock issue is participating
- {boolean} callable Whether this stock issue is callable

## `lifecraft/lifecraft-data.js`
*No documented functions found.*

## `travel/travel-data.js`
*No documented functions found.*

---
**Last Updated:** 2/9/2026, 10:03:03 AM
