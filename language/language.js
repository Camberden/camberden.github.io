window.onload = () => console.log("Running!");

/**
 * @param {string[]} vocabulary - contains foreign language and English separated by pipe
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

const jishoField = document.getElementById("jisho-field");
const jishoIFrame = document.getElementById("jisho-frame");

const languageButtons = document.querySelectorAll(".language-button");
const buttonPool = document.getElementById("button-pool");

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
	for (let i = 0; i < module.vocabulary.length; i++) {
		const tr = document.createElement("tr");
		
		const languageData = module.vocabulary[i].split("|");
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
};

generateStudyTable(vocabularyModules[0]);

function refreshTables() {
	document.getElementById("study-tables").innerHTML = "";
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
		document.getElementById("button-pool").appendChild(button);

		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}

// ----- LOGIC FUNCTIONS ----- //

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

// ----- JOYOU KANJI ----- //

const jouyouKanji = 
	`
	人一日大年出本中子見国言上分生手自行者二間事思時気会十家女
	三前的方入小地合後目長場代私下立部学物月田何来彼話体動社知理
	山内同心発高実作当新世今書度明五戦力名金性対意用男主通関文屋
	感郎業定政持道外取所現最化四先民身不口川東相多法全聞情野考向
	平成軍開教経信近以語面連問原顔正機九次数美回食表八声水報真味
	界無少要海変結切重天神記木集和員引公画死安兵親六治決太氏衛強
	使込朝受島解市期様村活頭題万組仕白指説七能京葉第流然初足円在
	門調笑品電議直着保別夫音選元権特義父利制続風北石車進夜伝母加
	助点産務件命番落付得半戸好空有違吉殺起運置料士返藤論楽際歳色
	帰歩井悪広店反町形百光首勝必土係由愛都住江西売放確過張約馬状
	待古想始官交読千米配若終資常果呼校武共計残判役城院他総術支送
	族両乗団松映応済線買設右供格病打視早勢御断式質師台党告深存争
	室覚史側飛参可態営府突巻容姿育介建南構認位達転左皇宮守満消任
	医蔵止造居離根予路字座工寺基客急船図追隊査背観誰黒素息価将改
	県撃失泉老良示振号像職王識警花優投英細局難種証走念寄商青谷害
	奥派僕佐頼横友再増紀統答差火苦器収段異血護紙俺歌渡与注条演算
	赤備独象清技州申例働景領春抜遠橋源芸影型絶館眼香負福企旅球酒
	君験量察写望久婚単押割限戻科求津案談降妻岡境熱策浮階等末宗区
	波提去幸研移域飲肉草周昭越服接鉄密司登頃銀類検未材個康沢協茶
	各究帯規秀歴編興裏精洋率抱比坂評装監崎省鮮税激徳挙志労競処退
	費非囲喜辺敷系河織製娘端逃探極遺防低犯薬園疑林導緒静具席房速
	街舞宿森程丸胸陸倒寝宅兄療絵諸尾株破秋堂従庭管婦仲革余敵展訪
	担冷効暮腹賞危毎星許復似片並底険描週修財遊温軽録腰我著乱章雑
	殿載響秘布恐攻値角暗習健仏積裁試夏隠永誌夢環援故幕減略準委痛
	富督倉弟刻鳴令刊施焼欲途曲耳完里願罪圧額印嫌池陽臣庫継亡散障
	貴農掛板昨整怒衆恋羽及専逆腕盛玄留礼短普岩竹児毛列恵版授雪弾
	宇養驚払奈推給況樹為敗雄捕刀被雨岸超豊忘含弁植妙模補抗級休暴
	課瞬称跡触玉晴華因震折億肩劇迎傷悲闘港責筋訳除射善刺黙柄刑節
	述輪困脱浅鳥厳純犬博陣薄阪閉吸奇忠韓夕固染巨講微髪標束縁眠壁
	午般湯捨駆衣替麻甲央藩骨齢易照迫層踏窓弱討聖典剣症祖築納勤昔
	脳便適弥融航快浜郷翌旧吹惑柳拠奉筆壊換益群句属候爆功捜帝賀魚
	堀油怖叫伸創辞泣憶幹否露矢承雲握練儀紹聴包庁測占混倍乳襲借徴
	荒詰飯栄床丁憲則禁順駅閣昼枚救厚皮陰繰那冬輸操騒己濃魔遅簡撮
	携姉隣孫丈煙黄曜宣徒届遣訴絡茂採釣批誘核哲豪傾締欠鹿就迷滅仰
	瀬洗互鼻致伏宝杉患審才延律希避揺甘湾浦沈至販裕更盟欧執崩鬼酸
	砂尊拡紅漢複歯泊銃荷維盗枝縄詩廃充依鏡幼仮吐慣請晩眺沖斬躍威
	勇屈勘徹斎謝昇艦寿催舎仁菜季衝液箱到券脚虎祭潮袋穴怪仙燃輝緊
	頂唇杯忍毒狂札狙牛奪診竜脇債鈴僧卒掲伯副皆敬熊針妹拝浴浪梅悩
	看俊汚摘灯項霊坊尻垣慢扱渉招涙如停寒了縮詳旦汗恥慮雅砲謀懐愚
	郵舌駄奴幅豆童又銭抑侍疲虫宙埋範舟闇棒貨肌臓塩潜酔呂還丹亜亀
	沼巡均湖臭慶距釈侵僚貧損悟膝猫隆裂尋貸旗羅揮辛票稲胞双懸稿塚
	盤災曹尽嫁繁即軒績帳飾沿獲伴唐狭干添剤姓誤魅契掘邪挑免爵択籍
	珍廊析訓預輩敏署鶴虚努往趣烈索匂漁摩菊緑滑沙裸孝綱邸勉邦揚卓
	騎墓姫畳孔耐須臨献脈咲貿芝踊唱封亭誕貫兆偽奮桜熟柱排透棄駐削
	奏幻祝麗逮誠炎炭椅寛斉穂柔幾兼飼促雇乾尚彩鋭暖俗較傍肝畑峰氷
	抵恩誇網隅渋冊賛糸魂牧控紛募戒没既股脅征覆郡丘佳叔託哀肥朗慎
	悠眉拒概顧硬腐塗挨孤拶憎却泥賊荘匠悔獄滞脂粉遇淡購併崇唯垂詞
	岐俳筒斜嬢陥掃償鑑勧葬焦剛膨廷紫銘鎌菌稼偶譲随猛遂冒泰翼忙凄
	序扉是寸賃偵澄殊緩頑塔賢拾紋麦糖煮芳刷惨歓虐喉旨凝圏卵拭涯貞
	堅倫壇呉械暇皿貌塞噴婆岳祈蹴鍵膳尺罰漏灰朱召覧漂汁溶寂嘆泳禅
	浄酷刃漫磨霧暑粒喫棚袖壮旬机彫靴需偉鎖潰貯匹縦粧綿慌穏贈枠謎
	誉逸駒凍惜措瓶晶琴摂拍稽礎遭帽掌鍋弓克据胆跳縛鎮雷涼恨顕殖寧
	湧棋巧浸秒桃隔班甚妊祉獣疾塾潟湿撲塊絞履苗芋冗陶励陳猿葛傘蒸
	啓劣撤殴盾衰滝慰蛇梨癖潤菓鉢戯腸偏巣宴耕炉棟洞狩陛磁潔膜乏祥
	曽舗抽睡賭括貢犠粗卑貼拉牲帆挿翻羊枕錯謙鉱珠蓄拓鼓膚粋尉胃后
	粘披徐悦堪挟冠郊愉尿顎誓憂簿糧架芽軸苛蓋銅盆凶妃庶秩裾幽凡漠
	拙恒暦腫峠宰蛮窮擦爪稚辱嵐憤癒鬱疎雰彰肺傑拘頻緯妖豚藍矛鍛繊
	縫把楼捉漬紳飽宛閥旋坪崖鶏鈍峡溝朴軌瓦喪墨疫貝遍濁缶扇枯拳乙
	酵堤阻桑虜乞恭鐘剰慈径培擁郭呪砕汰勃翁絹譜陵痴笛昧訟唾肪塀碁
	敢塁滴暁胴謡飢欄艶痕怠欺弦泡諦伐餅寮符厄奔瞳昆椎懇唄渦襟吟覇
	衡畜呈隙淫娠循懲錦猟幣附箇醜軟箸濯戚喚紺某鋼褒赴媒妬遮窯侯隻
	釜茎蔑嗅壌蜜尼肢赦酬戴詠斗宜殻墳炊碑伺痩但奨践滋儒沸薦怨曇栽
	刈閑錠扶妥妨醒詣胎窟巾蜂忌骸弄嫉粛罵囚鉛肯燥搭諭璧阜喝享騰嗣
	勅篤勲埼伎曖詐餌岬暫爽肖詮諾零柿芯綻訂汽薫隷俵遷枢肘麓憧帥漆
	酌頓賠渇慕婿妄慨匿渓侮髄穀薪轄洪牙咽迅該逐嘲墜臆餓挫錬桟溺賄
	盲鯨侶艇丼堕瘍槽憩僅閲柵畔睦唆悼吏穫酢賜腎梗瑠羨搬剖酎畿宵拐
	醸猶諮畏泌愁逝朽硫瞭擬叙弊累煩踪藻蚊栃且鋳叱蔽茨棺慄傲硝舶租
	倣謹抹虹捻娯臼喩萎蛍窒腺桁玩冶羞栓惧寡畝淑嫡屯糾遡陪雌舷霜殉
	紡貪庸韻繕搾刹采堆禍煎姻斑冥抄拷遜旺准勾廉礁壱麺升卸耗謁璃坑
	串弔賓塡痢嚇濫俸箋凸脊詔緻凹罷漸賦弧褐辣摯汎斥厘矯毀窃遵賂惰
	蚕氾諧倹款媛憾哺衷彙迭嘱恣墾逓劾酪沃塑痘憬朕虞丙斤捗弐訃謄繭
	璽頒錮剥籠楷頰
	`;
