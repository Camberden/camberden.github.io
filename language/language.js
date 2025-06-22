window.onload = () => console.log("Running!");
const modal = document.querySelector(".modal");
const closeModal = document.getElementsByClassName("close-modal")[0];

/**
 * @param {string[]} vocabulary - contains foreign language and English separated by pipe: |
 * @param {string} grouping - topic or title
 * @param {string} language - language selected, two letter abbreviation
 * @example ("foreignText|englishText", "topic","fl")
 */
class VocabularyModule {
	constructor(vocabulary, grouping, language) {
		this.vocabulary = vocabulary;
		this.grouping = grouping;
		this.language = language;
	}
}

/**
 * @param {string} title - song title
 * @param {string} artist - artist name
 * @param {string} link - youtube link
 * @param {string} - contains all lyric lines separated by ellipses: …
 */
class SongModule {
	constructor(title, artist, link, lyrics) {
		this.title = title;
		this.artist = artist;
		this.link = link;
		this.lyrics = lyrics;
	}
}

const jishoField = document.getElementById("jisho-field");
const jishoIFrame = document.getElementById("jisho-frame");

let currentSplitModule;
const languageButtons = document.querySelectorAll(".language-button");
const buttonPool = document.getElementById("button-pool");
const songButtonPool = document.getElementById("song-button-pool");

// CONSIDER POPULATING TXT DOCUMENT WITH TABLES TO PRINT

/*
const module = [
	"||",
	"||",
	"||",
	"||",
	"||",
];
*/

// ----- JAPANESE ----- //
const moduleJp1 = [
	"遅れる|to be late|おそれる",
	"遅い|slow|おそい",
	"恐れる|to be afraid of(畏)|おそれる",
	"起こる|to occur/happen|おこる",
	"怒る|to get angry|おそる",
	"起きる|to wake up|おきる",
	"怖がる|to be afraid of|こわがる",
	"送る|to send|おくる",
	"置く|to place|おく",
	"遅く|late (adv)|おそく",
];
const moduleJp2 = [
	"あるいは|either",
	"多分|maybe|たぶん",
	"可能性|potential|かのうせい",
	"かも|maybe",
	"かもしれない|maybe",
	"もしかし|maybe",
	"もしかしたら|maybe",
	"事によると|depending on circumstances|ことによると",
	"考慮に入れれば|things considered|こうりょにいれれば",
	"おそらく|maybe",
];
const moduleJp3 = [
	"よく|often",
	"しばしば|often",
	"たびたび|often",
	"再々|frequently|さいさい",
	"何度も|how many times|なんども",
	"何回も|how many times|なんかいも",
	"頻りに|often/eagerly|しきりに",
	"いつも|always",
	"何時でも|always|いつでも",
	"つねに|always",
	"毎度|every time|まいど",
	"必ず|always without fail|かならず",
	"決して|never|けっして",
	"時々|sometimes|ときどき",
	"どうかすると|occassionally",
	"時として|in some cases|ときとして",
	"よりより|sometimes/often",
	"間々|now and then|まま",
	"たまに|now and then",
	"しばらく|for a while",
	"しばらく間に|for the time being|しばらくあいだに",
	"しばらくして|presently",
	"現在|the present moment|げんざい",
];
const moduleJp4 = [
	"||",
	"||",
	"||",
	"||",
	"||",
];

// ----- EREMORAN ----- //
// ----- SPANISH ----- //
// ----- POLISH ----- //
const modulePl1 = [
	"Przepraszam|excuse me",
	"Bardzo dziękuję|thanks much",
	"Jak się masz?|how are you?",
	"Ja mówię po angielsku|I speak English",
	"Naprawdę chcesz to zrobić?|What do you really want?",
	"Wszystko bęnzie dobrze|All will be well",
	"Wiem, gdzie to jest|I know where that is",
	"Teraz jest w porządku?|Is now alright?",
];

const vocabularyModules = [
	okoOsoConfusion = new VocabularyModule(moduleJp1, "Oko-Oso Confusion", "jp"),
	maybesAndPossibilities = new VocabularyModule(moduleJp2, "Maybes & Possibilities", "jp"),
	maybesAndPossibilities = new VocabularyModule(moduleJp3, "Frequencies & Moments", "jp"),
	commonPolish1 = new VocabularyModule(modulePl1, "Common Polish", "pl"),
];

const songModules = [
	takahashiYuOpenWorld = new SongModule("Open World", "Yu Takahashi", "https://www.youtube.com/watch?v=JwBWxcWP3BU", `
		[Verse 1]<br>
		期待すればするほどに裏切られ ⼀⾔多いだけで叩きのめされ… The more you expect, the more you are betrayed. One word too many and you get crushed…
		挫かれることが常識になって 最近じゃ防御線で雁字搦め… Being frustrated has become the norm, and lately I've been stuck in a defensive position…
		[Verse 2]<br>
		⽬⽴たないように体強張らせ はみ出さないようにミジンコほどに縮こまって… Tighten your body so that it is not noticable; shrink it to the size of a water flea so that it does not protrude…
		こんな晴れの⽇に世界を嘆いて ねえほんとはどうなりたかったか… Lamenting the world on such a sunny day, hey, what did you really want to become?…
		[PreChorus]<br>
		覚えてる？ 覚えてる？… Do you remember? Do you remember?…
		[Chorus]<br>
		もう⼀度その扉を 開け放つ時には… When you open the gateway once more…
		カーテンが揺れるでしょう ⾵を模るように… The curtains will flutter as if to give shape to the wind…
		もう⼀度その扉を 開け放つ時には… When you open the gateway once more…
		好きな⾊に染めてやれ 世界は君のものさ… Paint (dye) it your favorite color, for the world is yours…
		[Chorus]<br>
		君が思っているよりも ダメだって藪から棒に⾔う神様のこと… It's worse than you think; that's what the gods will say out of nowhere…
		信じたいならそうすればいいけれど… If you want to believe it, you may…
		素晴らしいかもしれない 今⽇を始めよう… But things could be wonderful; let's start today (on making it that way) …
		[Verse 3]<br>
		今さらはじめたとこで無理だ or 今だからこそはじめるといいのだ… It's impossible to start now, or, now is the time to start …
		挫かれることが常識になってる 最近の⾃分を叩き起こして… Being frustrated has become the norm, as I've been forcing myself to wake up nowadays…
		[Verse 4]<br>
		⼈差し指スワイプする世界 誰かしらの追体験の⽇々… The world, swiped with the index finger - it's someone else's life lived vicariously …
		何もしねで悟った気になれる⼈⽣ 蓋したまんまの本⼼はただ… It's a life where you seemingly attain enlightenment by doing nothing at all; true feelings are merely covered up…
		[PreChorus]<br>
		探してる 探してる… Are you searching for them? You you searching?…
		[Chorus]<br>
		どこかに置き忘れてた 鍵を探しにいこう… Let's go find the keys that we misplaced…
		まだ⾒たことのない場所 近所にもあるでしょう？… There's still a place we haven't looked, right?…
		悲しくてやりきれない そんなときもあるけど… There are times when we feel sad and helpless…
		好きなだけ叫んでやれ 世界は君のもの… So scream as much as you'd like, for the world is yours…
		もう⼀度その扉を 開け放つ時には… Opening the gateway once more…
		好きな⾊に染めてやれ 世界は君のものさ… Go ahead and paint the world in your favorite color, for the world is yours…
		[Chorus]<br>
		君が思っているよりも ダメだって藪から棒に⾔う神様のこと… It's worse than you think; that's what the gods will say out of nowhere…
		信じたいならそうすればいいけれど… If you want to believe it, you may…
		素晴らしいかもしれない 今⽇を始めよう… But things could be wonderful, so let's start today (the present moment)…
		`
	),
	takahashiYuSeishunnoMukougawa = new SongModule("Seishunno Mukougawa", "Yu Takahashi", "https://www.youtube.com/watch?v=IgAeokqAhxs", `
		[Verse 1]<br>
		「はじまりは誰もそんくらいだ気にすんな… Everyone starts like that, so don't worry much…
		'千⾥の道'で'チリ積も'らすのだ」…Just let the dust pile up on the road that's a thousand miles long.…
		そう⾔われたあの⽇から… Since the day that was said…
		いま何⾥あたりまで来ているのか… How many miles have we come?…
		[Verse 2]<br>
		威⾵堂々の⼈⽣気取り… Living a dignified life,…
		踏み外してドブにハマったり… I step off the rails and fall into a gutter…
		汚れなきに憧れ 汚れまくりの靴を履いて… I yearn for purity, wearing dirty shoes…
		[PreChorus]<br>
		諦める理由増えてく… The reasons to give up are increasing…
		続ける理由ただ⼀つ 今⽇を 迎えたよ… There is one reason to continue onward, and it's today…
		今ここにある… It is here…
		[Chorus]<br>
		素晴らしさに胸は震えている… My heart is trembling with wonder…
		笑顔だけじゃ語れないハズ… but just a smile cannot express it all…
		耐えがたき悲しみに打ちのめされながら歩いた… I walked while being crushed by unbearable sadness …
		⽇々の先端に今がある… and the present is the culmination of those days…
		この先どんな未来が待っていても… No matter what future awaits me…
		忘れないよ 今⽇の⽇を… I won't forget today…
		消し去りたい過去さえ… Even the past I want to erase…
		無駄じゃないのかもしれないと… But just maybe it was not in vain…
		信じられるほどの瞬間を 愛おしい今⽇を讃えよう… Let's praise this precious day, the moment that makes me believe it…
		[Verse 3]<br>
		誰に喜ばれることもなく 地味な仕事をこなしてる… I'm working a mundane job without making anyone happy…
		チリ積もらせ何が出来るかも分からないまま… and the dust just piles up, and I do not know what to do…
		[Verse 4]<br>
		「やりたいことやって⽣きています」…"I'm living my life doing what I want to do"…
		そう⾔い切れない⽇もある… There are days when I cannot say that…
		忘れたフリの⻘春 最終ページのつづきを… Pretending to forget my youth. As for the last page, let's continue
		[PreChorus]<br>
		書き⾜していこう ぼくらの成功も… to write the pages of our successes…
		逃避⾏も 今何歳︖関係ない ほらここにある… and our retreats. How old are you? It doesn't matter. Look, here it is:…
		[Chorus]<br>
		素晴らしさに胸は⾼鳴っている… My heart is beating fast with wonder…
		ここからまた始められる… I can start again from here…
		⽬の前に⽴ちはだかる壁を突き破れ… The wall that stands before me; …
		なくてもきっと越えていける… even if I can't break it, I can overcome it…
		積もらせてきた⽇々の上を⾏こう 忘れないよ… I'll go on top of all the days that have piled up. I won't forget…
		当たって砕けた⽡礫の⼭の… Even on the top of a mountain with broken rubble…
		上にだって道は続いているよ…the road continues…
		[Chorus]<br>
		ぶち当たるほど強くなる 痛いほど輝いていく…The more you hit it, the strong your get, the more it hurts, the more you shine…
		[Bridge]<br>
		誰かに嘲笑(わらわ)れてしまうより… Rather than being laughed at by someone else…
		⾃分で⾃分を嘲笑(わらわ)ぬように…Such that I would't laugh at myself…
		鏡に映った⼈間を… I wanted to change that human being in the mirror…
		変えたくて鏡に書き殴ってた落書きも… and I drew graffiti on that mirror…
		[PreChorus]…
		書き⾜していこう ぼくらの⽇常を… Let's write it down. Let's praise each other for our daily lives.…
		讃えあおう 今⽇を 迎えたよ 今ここにある… Today has come. It is here now.…
		[Chorus]<br>
		素晴らしさに胸は震えている… My heart is trembling with wonder…
		笑顔だけじゃ語れないハズ… but just a smile cannot express it all…
		耐えがたき悲しみに打ちのめされながら歩いた… I walked while being crushed by unbearable sadness …
		⽇々の先端に今がある… and the present is the culmination of those days…
		この先どんな未来が待っていても… No matter what future awaits me…
		忘れないよ 今⽇の⽇を… I won't forget today…
		消し去りたい過去さえ… Even the past I want to erase…
		無駄じゃないのかもしれないと… But just maybe it was not in vain…
		信じられるほどの瞬間を 愛おしい今⽇を讃えよう… Let's praise this precious day, the moment that makes me believe it…
		`
	),
];

/**
 * @param {VocabularyModule} module
 */
function generateStudyTable(module) {
	const studyTable = document.getElementById("study-tables");
	const titleTh = document.createElement("th");
	titleTh.setAttribute("colspan", "2");
	const titleThText = document.createTextNode(module.grouping);
	titleTh.appendChild(titleThText);
	const table = document.createElement("table");
	table.appendChild(titleTh);
	const tr = document.createElement("tr");
	const flTh = document.createElement("th");
	const enTh = document.createElement("th");
	let language;
		switch (module.language) {
			case "jp":
				language = "Japanese";
			break;
			case "er":
				language = "Eremoran";
			break;
			case "es":
				language = "Spanish";
			break;
			case "pl":
				language = "Polish";
			break;
			default:
				language = "Language";
			break;
		}
	const flText = document.createTextNode(language);
	const enText = document.createTextNode("English");
	flTh.appendChild(flText);
	enTh.appendChild(enText);
	tr.appendChild(flTh);
	tr.appendChild(enTh);
	table.appendChild(tr);

	// Vocabulary Parser
	let quizLanguageData = [];
	for (let i = 0; i < module.vocabulary.length; i++) {
		const tr = document.createElement("tr");
		
		const languageData = module.vocabulary[i].split("|");
		quizLanguageData.push(languageData);
		const fl = document.createElement("td");
		const flText = document.createTextNode(languageData[0]);
		fl.appendChild(flText);
		if (module.language === "jp" && languageData[2] != null) {
			fl.onmouseover = function() {
				fl.textContent = languageData[2];
			}
			fl.onmouseleave = function() {
				fl.textContent = languageData[0];
			}
		}

		const en = document.createElement("td");
		const enText = document.createTextNode(languageData[1]);
		en.appendChild(enText);

		tr.appendChild(fl);
		tr.appendChild(en);
		table.appendChild(tr);
	}

	studyTable.appendChild(table);
	currentSplitModule = quizLanguageData;
};

generateStudyTable(vocabularyModules[0]);

function refreshTables() {
	document.getElementById("study-tables").innerHTML = "";
}

function refreshSongText() {
	document.getElementById("fl-song-lyrics").innerHTML = "";
	document.getElementById("en-song-translation").innerHTML = "";
}

/**
 * 
 * @param {string} language 
 * @returns vocabularyModule[]
 */
function filterByLanguage(language) {
	/**
	 * @var VocabularyModule[]
	 */
	let sortedModules = [];
	vocabularyModules.forEach(module => {
		if (module.language === language) {
			sortedModules.push(module);
		}
	});
	return sortedModules;
}

/**
 * 
 * @param {VocabularyModule[]} modules 
 */
function enableButtonPool(modules) {
	buttonPool.innerHTML = "";
	modules.forEach(module => {
		const button = document.createElement("button");
		const text = document.createTextNode(module.grouping);
		button.appendChild(text);
		button.onclick = function() {
			ButtonInterface.buttonOnClick(button);
			refreshTables();
			generateStudyTable(module);
		}
		buttonPool.appendChild(button);

		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}

/**
 * 
 * @param {SongModule[]} songs 
 * @todo Segregate individual song parsing into function
 */
function enableSongLyricsPool(songs){
	songButtonPool.innerHTML = "";
	songs.forEach(song => {
		const splitLyrics = song.lyrics.split("…");
		const button = document.createElement("button");
		const text = document.createTextNode(song.title);
		button.appendChild(text);
		const span = document.createElement("span");
		const translation = document.createElement("span");

		for(let i = 0; i < splitLyrics.length; i++) {
			if (i === 0) {
				span.innerHTML += splitLyrics[i] + "<br>";
			}
			if (i % 2 === 0) {
				span.innerHTML += splitLyrics[i] + "<br>";
			} else if (i % 2 != 0) {
				translation.innerHTML += splitLyrics[i] + "<br>";
				console.log(splitLyrics[i]);
			}
		}
		
		button.onclick = function() {
			ButtonInterface.buttonOnClick(button);
			refreshSongText();
			document.getElementById("fl-song-lyrics").appendChild(span);
			document.getElementById("en-song-translation").appendChild(translation);
		}
		songButtonPool.appendChild(button);

		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}

// ----- MODAL ACCESS ----- //
/**
 * 
 * @param {Array} splitModule 
 */
function displayVocabularyQuiz(splitModule) {
	console.log("vocab quiz");
	const modalText = document.getElementById("modal-text");

	const modalFocus = document.createElement("span");
	modalFocus.setAttribute("class", "modal-focus");
	modalText.appendChild(modalFocus);

	let entry = 0;
	modalFocus.textContent = splitModule[entry][0];

	const nextVocabularyButton = document.createElement("button");
	nextVocabularyButton.setAttribute("value", "next");
	nextVocabularyButton.setAttribute("class", "language-modal-button");
	nextVocabularyButton.textContent = "Next Item";

	modalText.appendChild(nextVocabularyButton);

	document.querySelectorAll(".language-modal-button").forEach(button => {
		button.onclick = function(){
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "next":
						if (entry === splitModule.length - 1) {
							entry = 0;
							modalFocus.textContent = splitModule[entry++][0];
						} else {
							modalFocus.textContent = splitModule[++entry][0];
						}
					break;
				default:
					clearModal();
					break;
			}
		}
		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	}
	);
}

function languageModalAccess() {
	document.querySelectorAll(".modal-prompt").forEach(prompt => {

		prompt.onclick = function() {
			switch(prompt.id) {
				case "vocabulary-quiz":
					displayVocabularyQuiz(currentSplitModule);
					modal.style.display = "block";
				break;
				case "song-quiz":
					// displaySongQuiz();
					modal.style.display = "block";
				break;
				default:
					console.log("default");
				break;
			}
			
		}
		
	});
		closeModal.onclick = function () {
			clearModal();
			modal.style.display = "none";
		};
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
				clearModal();
			}
		}
}
languageModalAccess();

function clearModal() {
	document.getElementById("modal-text").innerHTML = "";
	// document.getElementById("modal-text").removeAttribute("class", "quiz-grid");
	console.log("Modal Cleared!");
}

// ----- ENABLE FUNCTIONS ----- //

function enableLanguageButtons(){
	languageButtons.forEach(button => {
		button.onclick = function(){
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "all":
					enableButtonPool(vocabularyModules);
					break;
				case "jp":
					enableButtonPool(filterByLanguage("jp"));
					break;
				case "er":
					enableButtonPool(filterByLanguage("er"));
					break;
				case "es":
					enableButtonPool(filterByLanguage("es"));
					break;
				case "pl":
					enableButtonPool(filterByLanguage("pl"));
					break;
				default:
					refreshTables();
					break;
			}
		}
		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	}
	)
}

enableLanguageButtons();
enableButtonPool(vocabularyModules);
enableSongLyricsPool(songModules);

