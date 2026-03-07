const canSupportIndexedDB = () => {
	if(!window.indexedDB) {
		// console.log("Browser doesn't support IndexedDB");
		return "Browser doesn't support IndexedDB";
	} else {
		// console.log("Indexed DB Supported");
		return "Indexed DB Supported";
	}
}; // closeout functions with semicolon to prevent continual evaluation in IIFE runners.

/**
 * 
 * @param {String[]} args 
 * @returns {String[]} val;
 */
function collectJSconfigs(...args) {
	let val = [];
	for (let arg of args) {
		// val += ("|=====> " + arg + "\n");
		val.push("|=====> " + arg);
	}
	console.log(val);
	return val;
}

/**
 * 
 * @param {IDBDatabase} db 
 * @param {*} indexedPost 
 */
function insertIndexedPost(db, indexedPost) {
	// const demojson = {
	// 	id: "",
	// 	author: "chrispy",
	// 	date: "03/06/2026",
	// 	location: "Pittsboro, NC",
	// 	time: "2200 HRS",
	// 	title: "An Indexed DB Journey",
	// 	body: "Tryna get this thang going.",
	// 	tags: "",
	// 	photos: "",
	// 	audio: ""
	// }	
	// initIndexedDB("create", demojson);
	const txn = db.transaction("Posts", "readwrite");
	const store = txn.objectStore("Posts");
	let query = store.put(indexedPost);

	query.onsuccess = function (event) {
		console.log("Transaction Query Success");
		console.log(event);
	};
	query.onerror = function (event) {
		console.log("Transaction Error: Post Likely Already Exists");
	}
	txn.oncomplete = function () {
		console.log("Closing Transaction");
		db.close();
	}
}

/**
 * 
 * @param {String} crud transaction option: create, update, read, delete 
 * @param {JSON} dataJson data as json
 */
function initIndexedDB(crud, queryData) {
	const request = indexedDB.open("cmbrBlog", 1);
	request.onerror = (event) => { event.target.error ? console.error(`Database Error: ${event.target.errorCode}`) : console.log("No IndexedDB Error..."); };
	request.onupgradeneeded = (event) => {
	/**
	 * @type {IDBDatabase} db
	 */
	let db = event.target.result;
	console.log("DB at onupgradeneeded: " + db);

	let store = db.createObjectStore("Posts", {
		autoIncrement: true
	});

	let index = store.createIndex("title", "title", {
		unique: true
	});
};
	request.onsuccess = (event) => {
	/**
	 * @type {IDBDatabase} db
	 */
	const db = event.target.result;

	switch(crud) {
		case "create":
			console.log("Create IndexedDB Transaction");
			insertIndexedPost(db, queryData);
		break;
		case "read":
			console.log("Read IndexedDB Transaction");
		break;
		case "update":
			console.log("Update IndexedDB Transaction");
		break;
		case "delete":
			console.log("Delete IndexedDB Transaction");
		break;
		default:
			console.log("Defaulted IndexedDB Transaction");
		break;
	}
	console.log("DB at onsuccess: " + db);
	}
}


(console.log("|=====| START |=====|=====>"), async () => {

	CMBRutil.navigationCharter();
	initBlogData(blogData);
	enableBlogButtons();
	enableBlogSelect();
	
})(setTimeout(() => { collectJSconfigs(canSupportIndexedDB()); console.log("|=====| END |=====|====|") }, 2000 ));