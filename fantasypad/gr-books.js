const grBooks = [
	`Found minecraft:written_book in chunk at x 80, z 432: Compound({"minecraft:written_book_content": Compound({"pages":
		List([Compound({"raw": String("Draft Consititution\nof the East Farentia\nRegion\n\nToday, during this 24th month since
		the inception, the Region of East Farentia is wholly instituted as union among five (5) districts and two (2)
		territories, comprising the Easternmost")}), Compound({"raw": String("eestablished region in the world. The districts
		with which this union is tied are: Orienta, Midlands, Capelands, Jamesway, and East Pointe. Orienta is currently the
		designated capital at which offical documents are to be\nwritten and stored.")}), Compound({"raw": String("The history
		of this region traces back to the pre-industrial age, and was founded by Farentian explorers during the first month. The
		land was reputed for its mineral wealth, and has seen a glorious presence in that age.")}), Compound({"raw":
		String("Today, during the 24th month since inception, this region of the world has seen and will see, through the
		careful provision of land and mineral, the paramount status of development in the world.")})]), "title":
		Compound({"raw": String("24mConstiDraft")}), "author": String("MusicalYoshi")})})`,

	`Found minecraft:written_book in chunk at x 16, z 432: Compound({"minecraft:written_book_content": Compound({"author":
		String("MusicalYoshi"), "title": Compound({"raw": String("Sheer District")}), "pages": List([Compound({"raw":
		String("Old Sheer District\nFarentia Region \n\nNorth of Farentia C.D.\n~300 Blocks")}), Compound({"raw": String("The
		Old Sheer District, wherein this document was written and stored, has been the original source location for the
		extraction of wool due to its proximity due to the \"provenance\" and its seemingly high yield of sheep. The Sheer
		District Hilltop House was")}), Compound({"raw": String("one of the first five residences built in the Farentia Region
		and in the entirety of the Great Regions. The wool industry has moved from the Sheer District to the Oriental District
		in the Second Month, but the district nonetheless retains its historical")}), Compound({"raw": String("name. The Sheer
		District as of the Twelfth Month has become the frontier for the ever sprawling Capital of Farentia.")})]), "resolved":
		Byte(1)})})`,

	`Found minecraft:written_book in chunk at x 176, z 112: Compound({"tag": Compound({"author": String("MusicalYoshi"),
		"title": String("«+~=\"H</]}«¬([\\"), 
		"pages" : List([String("0H/=æ<['/H)'/«+~=\"H/¬]'/!'+«>/æ
		<[' />*¬=['\\\nH(*</['¬]}x)'H«\"
		/('*¬/0H/[;<['+~\"]'/0¬]/=æ<['/!'x]'/}H<]¬]'«]'/=æ}¬@/)'æ=^!H('=/«\"]+«]H]\\\n0;¬/!H« />¬][;¬}<\\0¬]
		/\n=æ<['/.æ['/H/]\"}«H[/\n[«;{'H«\\¬[/}H<[;¬<['/\n0H,«;)'H=!{H<:«\"/)H<:[¬}/]}«¬([\\0H/:</(\"/;¬\\\n\n0H/
		]}«¬([/"), String("/.æ]'/('¬</H(\"H=¬@/\n:)'H«/
		]¬<]\\¬[/¬]'/\n(«H%:}[H['/0æ[/¬[/\n!'¬=/('\"/^!I=*¬]'['/('*¬/0H/«\"%H<]'/H)'/[:<['+~/)*«:<#H/]':0«+~/
		æ<['/*!][H<;¬H\\\n\n\n-----------------\n0H/)^!#H«/=~}]/(«*>¬]¬@/
		)_«/0H/«+~=\"H</\n]}«¬([\\")])}),
		"id" : String("minecraft:written_book"), "Count" : Byte(1), "Slot" :
		Byte(15), "Damage" : Short(0)})`, `Found minecraft:written_book in chunk at x 288, z 192: Compound({"Slot":
		Byte(0), "Count" : Byte(1), "id" : String("minecraft:written_book"), "tag" : Compound({"title":
		String("«+~=\"H</æ<æ}]"), "author" : String("MusicalYoshi"), "pages" : List([String("{\"text\":\"As of December
		20th. 2012, the Rollian Continent has been annexed to the Tendou
		Region.\\næ]\\u0027/H)\\u0027/[\\u0027H]:\\u003e(\\u0027H«/2O/
		2012/0H/«+~\\u003d\\\"H\\u003c/\\n}*\\u003c[¬\\u003c;\\u003c[/.æ]
		\\u0027/(\\u0027¬\\u003c/\\næ\\u003c;}][/[!/0H/[;\\u003c[\\u0027+~/\\n«\\\"%H\\u003c\\\\\"}")])})})`,

	`Found minecraft:written_book in chunk at x 384, z 416: Compound({"Count": Byte(1), "tag" : Compound({"pages":
		List([String("{\"text\":\"\\\"April 17, 2020\\\"\\nAaks\\n\\nHello. This is Chrispy. It had been... many, many
		months since I had explored this world... the time system of which is all but a distant memory too fuzzy to note
		within these pages. I begin my jouney within these Great Regions anew, \"}"), String("{\"text\":\"with fresh
		perspecives on life and the trajectory of my creative vision. I hadn't expected life to take me for such turns
		that would disenchant and disorient me with imagination. Gladly, those days are over. Join me in revelling in
		the imagination, and rekindling my \"}"), String("{\"text\":\"creativity in leisure. I am tired. I, irl, had
		completed my panel interview with my company just the day before. I am tired, and anticipate sleep, nonetheless,
		the urge for adventure and rediscovery is totally compelling me. Cheers, all, to a good life. Be
		safe.\"}")]), "title" : String("Marking a Return"), "author" : String("Audioshi")}), "id" :
		String("minecraft:written_book"), "Slot" : Byte(10)})`,

	`Found minecraft:written_book in chunk at x 288, z 208:	Compound({"id": String("minecraft:written_book"), "tag" : Compound({"author": String("MusicalYoshi"), "resolved"
		: Byte(1), "pages" : List([String("{\"text\":\"West Akks Sea Expat Cove, Akks Region\\n\\nWest of Akks Central
		River, North of Horn Town, Tendou Region.\\n\\n\"}"), String("{\"text\":\"This settlement was built in the
		Twelfth Month as a getaway destination for Farentian and Tendouese workers. It is accessable to Farentia via the
		Akks Central River and by Tendou via the West Akks Sea.\"}"), String("{\"text\":\"The cove is situatated at the
		Southern tip of the Akks Region\\u0027s Westernmost section and is tucked away underneath a mountain face. The
		area is generally tranquil, albeit sometimes chilly due to its proximity to the Tendou Region. The Expat Cove
		has become\"}"), String("{\"text\":\"the new functional embassy town in the Akks Region immediately following
		the Akks Region\\u0027s claim of the former Farentian Embassy in the east of the region near the Farentia/Akks
		Oversea Railway. Soon after the designation of the Farentian Embassy, \"}"), String("{\"text\":\"the Tendou
		Region too established its own. Despite the proximity to the Tendou Region\\u0027s Horn Town, the Expat Cove
		remains a predominantly Farentian settlement.\\nThe Cove is administered by the Farentia Region and claimed by
		the Akks Region. \"}")]), "title" : String("Akks Expat Cove")}), "Count" : Byte(1), "Slot" : Byte(11)})`,

	`Found minecraft:written_book in chunk at x 240, z 288: Compound({"id": String("minecraft:written_book"), "Count" :
		Byte(1), "tag" : Compound({"pages": List([String("{\"text\":\"This house is the very first building in the
		village of Merimoco of Cherica.It is both a monument and a resident home.\"}")]), "resolved" : Byte(1), "title"
		: String("Monumental House"), "author" : String("Shpoozels")}), "Slot" : Byte(0)})`,

	`Found minecraft:writable_book in chunk at x 128, z 16: Compound({"Count": Byte(1), "Slot" : Byte(0), "tag" :
		Compound({"pages": List([String("Name, Bed#, How Long\n\nShpoozels,#7,1night\n\nFred,#24,5nights")])}), "id" :
		String("minecraft:writable_book")})`, `Found minecraft:written_book in chunk at x 160, z 0: Compound({"Slot":
		Byte(0), "id" : String("minecraft:written_book"), "tag" : Compound({"author": String("Shpoozels"), "pages" :
		List([String("{\"text\":\"The Anthros Library was built originally to be the town hall, but later changed into a
		library because the inside looked more like a library than a town hall. It was built on Dec. 26th
		2014\"}")]), "title" : String("Anthros Library"), "resolved" : Byte(1)}), "Count" : Byte(1)})`,

	`Found minecraft:writable_book in chunk at x 160, z 0: Compound({"id": String("minecraft:writable_book"), "Slot" :
		Byte(1), "Count" : Byte(1), "tag" : Compound({"pages":
		List([String("Abe\nRex\nJim\nJeff\nTeepo\nToto\nWalter\nDamion\nFelix\nJay\nMaxwell\nAsh\nGrey\nRachel"),
		String("Tom\nImaginary Mike\nRose\nPeach\nChloe\nAnna\nBella\nBertha\nSheldon\nJaxin\nNorman")])})})`,

	`Found minecraft:writable_book in chunk at x 112, z 496: Compound({"id": String("minecraft:writable_book"), "Slot" :
		Byte(0), "tag" : Compound({"pages":
		List([String("Abe\nRex\nJim\nJeff\nTeepo\nToto\nWalter\nDamion\nFelix\nJay\nMaxwell\nAsh\nGrey\nRachel"),
		String("Tom\nImaginary Mike\nRose\nPeach\nChloe\nAnna\nBella\nBertha\nSheldon\nJaxin\nNorman")])}), "Count" :
		Byte(1)})`,

	`Found minecraft:written_book in chunk at x 272, z 448: Compound({"Damage": Short(0), "Count" :
		Byte(1), "id" : String("minecraft:written_book")})`,

	`Found minecraft:written_book in chunk at x 272, z 32:
		Compound({"Count": Byte(1), "tag" : Compound({"author": String("MusicalYoshi"), "title" :
		String("«+~=\"H</]}«¬([\\"), "pages" : List([String("0H/=æ<['/H)'/«+~=\"H/¬]'/!'+«>/æ
		<[' />*¬=['\\\nH(*</['¬]}x)'H«\"
		/('*¬/0H/[;<['+~\"]'/0¬]/=æ<['/!'x]'/}H<]¬]'«]'/=æ}¬@/)'æ=^!H('=/«\"]+«]H]\\\n0;¬/!H« />¬][;¬}<\\0¬]
		/\n=æ<['/.æ['/H/]\"}«H[/\n[«;{'H«\\¬[/}H<[;¬<['/\n0H,«;)'H=!{H<:«\"/)H<:[¬}/]}«¬([\\0H/:</(\"/;¬\\\n\n0H/]}«¬([/"),
		String("/.æ]'/('¬</H(\"H=¬@/\n:)'H«/]¬<]\\¬[/¬]'/\n(«H%:}[H['/0æ[/¬[/\n!'¬=/('\"/^!I=*¬]'['/('*¬/0H/«\"%H<]'/H)'/[:<['+~/)*«:<#H/]':0«+~/æ<['/*!][H<;¬H\\\n\n\n-----------------\n0H/)^!#H«/=~}]/(«*>
		¬]¬@/)_«/0H/«+~=\"H</\n]}«¬([\\")])}), "id" : String("minecraft:written_book"), "Slot" : Byte(0), "Damage" :
			Short(0)})`,

	`Found minecraft:written_book in chunk at x 224, z 96: Compound({"Count": Byte(16), "Slot" :
			Byte(0), "id" : String("minecraft:written_book"), "tag" : Compound({"pages":
			List([String("{\"text\":\"Damion\\u0027s Corner is where the villgar, who I named Damion, seems to stand
			everyday. He never moves he just stands and stares at what goes by. At night, day, or rain this little guy
			stays put. He\\u0027s a strange little one that Damion.\"}"), String("{\"text\":\"Written on:\\nNov. 7,
			2014\"}")]), "author" : String("Shpoozels"), "title" : String("Damion's Corner")})})`,

	`Found minecraft:written_book in chunk at x 272, z 240: Compound({"Slot": Byte(0), "Count" : Byte(1), "tag" :
			Compound({"author": String("Shpoozels"), "resolved" : Byte(1), "pages" : List([String("{\"text\":\"I renamed
			Embassy Town, Lucidea Town, after my older brother who built it. :D\\n\\nThis was written on\\nNov. 9
			2014\"}")]), "title" : String("Lucidea Town")}), "id" : String("minecraft:written_book")})`,

	`Found minecraft:written_book in chunk at x 224, z 416: Compound({"Count": Byte(1), "tag" : Compound({"author":
			String("MusicalYoshi"), "pages" : List([String("{\"text\":\"West Akks Sea Expat Cove, Akks Region\\n\\nWest
			of Akks Central River, North of Horn Town, Tendou Region.\\n\\n\"}"), String("{\"text\":\"This settlement
			was built in the Twelfth Month as a getaway destination for Farentian and Tendouese workers. It is
			accessable to Farentia via the Akks Central River and by Tendou via the West Akks Sea.\"}"),
			String("{\"text\":\"The cove is situatated at the Southern tip of the Akks Region\\u0027s Westernmost
			section and is tucked away underneath a mountain face. The area is generally tranquil, albeit sometimes
			chilly due to its proximity to the Tendou Region. The Expat Cove has become\"}"), String("{\"text\":\"the
			new functional embassy town in the Akks Region immediately following the Akks Region\\u0027s claim of the
			former Farentian Embassy in the east of the region near the Farentia/Akks Oversea Railway. Soon after the
			designation of the Farentian Embassy, \"}"), String("{\"text\":\"the Tendou Region too established its own.
			Despite the proximity to the Tendou Region\\u0027s Horn Town, the Expat Cove remains a predominantly
			Farentian settlement.\\nThe Cove is administered by the Farentia Region and claimed by the Akks Region.
			\"}")]), "resolved" : Byte(1), "title" : String("Akks Expat Cove")}), "Slot" : Byte(24), "id" :
			String("minecraft:written_book")})`,

	`Found minecraft:written_book in chunk at x 400, z 96: Compound({"id":
			String("minecraft:written_book"), "Count" : Byte(1), "Damage" : Short(0), "Slot" : Byte(0), "tag" :
			Compound({"title": String("Monumental House"), "author" : String("Shpoozels"), "pages" :
			List([String("{\"text\":\"This house is the very first building in the village of Merimoco of Cherica.It is
			both a monument and a resident home.\"}")])})})`,

	`Found minecraft:written_book in chunk at x 288, z 448:
			Compound({"tag": Compound({"title": String("«+~=\"H</]}«¬([\\"), "author" : String("MusicalYoshi"), "pages"
			: List([String("0H/=æ<['/H)'/«+~=\"H/¬]'/!'+«>/æ
			<[' />*¬=['\\\nH(*</['¬]}x)'H«\"
			/('*¬/0H/[;<['+~\"]'/0¬]/=æ<['/!'x]'/}H<]¬]'«]'/=æ}¬@/)'æ=^!H('=/«\"]+«]H]\\\n0;¬/!H« />¬][;¬}<\\0¬]
			/\n=æ<['/.æ['/H/]\"}«H[/\n[«;{'H«\\¬[/}H<[;¬<['/\n0H,«;)'H=!{H<:«\"/)H<:[¬}/]}«¬([\\0H/:</(\"/;¬\\\n\n0H/]}«¬([/"),
			String("/.æ]'/('¬</H(\"H=¬@/\n:)'H«/]¬<]\\¬[/¬]'/\n(«H%:}[H['/0æ[/¬[/\n!'¬=/('\"/^!I=*¬]'['/('*¬/0H/«\"%H<]'/H)'/[:<['+~/)*«:<#H/]':0«+~/æ<['/*!][H<;¬H\\\n\n\n-----------------\n0H/)^!#H«/=~}]/(«*>
			¬]¬@/)_«/0H/«+~=\"H</\n]}«¬([\\")])}), "Slot" : Byte(0), "Count" : Byte(1), "id" :
				String("minecraft:written_book"), "Damage" : Short(0)})`,

	`Found minecraft:written_book in chunk at x
				160, z 112: Compound({"id": String("minecraft:written_book"), "Slot" : Byte(0), "tag" :
				Compound({"pages": List([String("{\"text\":\"Occidental Byway\\nOccidental Distirict, Farentia\\n18th
				Month\\n\\nThe byway was originally a project designated for the notion of creating a West Farentian
				Coastal railway, stretching as north as the Infantasia Isles and\"}"), String("{\"text\":\"as south as
				the Tendouese border. \\nThe byway has long been abandoned due to the little population on Farentia's
				west coast who would benefit from its creation. Only upon a resurgence in appeal and thus an influx of
				population shall the byway receive \"}"), String("{\"text\":\"the attention and interest that it shortly
				maintained during the 9th month. \"}")]), "author" : String("MusicalYoshi"), "title" :
				String("Occidental Byway")}), "Count" : Byte(16)})`,

	`Found minecraft:written_book in chunk at x 240, z
				64: Compound({"id": String("minecraft:written_book"), "Count" : Byte(1), "Damage" : Short(0), "Slot" :
				Byte(0), "tag" : Compound({"pages": List([String("As of December 20th. 2012, the Rollian Continent has
				been annexed to the Tendou Region.\næ]'/H)'/['H]:>('H«/2O/ 2012/0H/«+~=\"H</\n}*<[¬<;<[
				/.æ]'/('¬</\næ<;}][/[!/0H/[;<['+~/\n«\"%H<\\")]), "author" : String("MusicalYoshi"), "title" :
				String("«+~=\"H</æ<æ}]")})})`,
	`Found minecraft:written_book in chunk at x 96, z 432: Compound({"Count":
				Byte(1), "id" : String("minecraft:written_book"), "tag" : Compound({"author": String("Player"), "pages"
				: List([String("{\"text\":\"This is truly astonishing. I may now create as I please. I am now
				considering enjoying minecraft again, Rejoice.\"}")]), "title" : String("Reconsideration"), "resolved" :
				Byte(1)}), "Slot" : Byte(11)})`,
	`Found minecraft:written_book in chunk at x 336, z 320: Compound({"id":
				String("minecraft:written_book"), "Count" : Byte(1), "tag" : Compound({"title": String("Attomoses'
				Islan"), "pages" : List([String("{\"text\":\"Welcome to Attomoses' Island, this island is where the
				fisherman Attomoses lives. He spends his days fishing and mining in the small mine next to this
				house\"}")]), "author" : String("Shpoozels")}), "Slot" : Byte(0)})`, `Found minecraft:written_book in
				chunk at x 432, z 0: Compound({"Count": Byte(1), "Slot" : Byte(3), "tag" : Compound({"author":
				String("mocha2007"), "pages" : List([String("{\"text\":\"some day this will be
				read\\n\\n\\n\\n\\n\\n\\n\\n\\n\\u003c3\\n\\nboop\"}")]), "title" : String("some day")}), "id" :
				String("minecraft:written_book")})`,
	`Found minecraft:written_book in chunk at x 80, z 384:
				Compound({"Slot": Byte(0), "id" : String("minecraft:written_book"), "Count" : Byte(1), "tag" :
				Compound({"title": String("Jane's Diary"), "author" : String("Shpoozels"), "pages" :
				List([String("{\"text\":\"Dear Diary,\\n\\nToday it started snowing... It wasn\\u0027t much at first,
				but then it became a blizzard.\\nThe tribe leader asked us all to stay in our homes until it
				passes.\\nIt\\u0027s cold, I hate cold!\"}"), String("{\"text\":\"Dear Diary, \\n\\nIt\\u0027s been two
				weeks and we are running out of food... The leader assures that the storm will end soon... I sure hope
				he\\u0027s right... I\\u0027m starting to get frightened...\"}"), String("{\"text\":\"Dear
				Diary,\\n\\nThe Tribe leader and all the other men have went hunting for food today. I hope dad comes
				back soon...\"}"), String("{\"text\":\"Dear diary...\\n\\nDad never came home,\\nit\\u0027s freezing...
				We\\u0027re out of firewood and there are monsters outside...\"}"), String("{\"text\":\"Dear
				Diary,\\n\\nDaddy\\u0027s back! YAY! Mom and I were starting to panic, all the men are back and our
				leader is back to guide us, we have food and wood, nothing seems wrong now.\"}"),
				String("{\"text\":\"EVERYTHING IS VERY WRONG!!! MOM AND DAD ARE DEAD!!! THE LEADER IS DEAD!!! IT\\u0027S
				SO COLD!!! THERE\\u0027S NO FOOD!!! HELP US PLEASE!!!!! ANYONE, PLEASE!!!! IF YOU FIND THIS PLEASE HELP
				US!!!!!!!!!!!!\"}")]), "resolved" : Byte(1)}), "Damage" : Short(0)})`,
	`Found minecraft:written_book in
				chunk at x 48, z 352: Compound({"Slot": Byte(9), "id" : String("minecraft:written_book"), "tag" :
				Compound({"title": String("Sheer District"), "author" : String("MusicalYoshi"), "pages" :
				List([String("{\"text\":\"Old Sheer District\\nFarentia Region \\n\\nNorth of Farentia C.D.\\n~300
				Blocks\"}"), String("{\"text\":\"The Old Sheer District, wherein this document was written and stored,
				has been the original source location for the extraction of wool due to its proximity due to the
				\\\"provenance\\\" and its seemingly high yield of sheep. The Sheer District Hilltop House was\"}"),
				String("{\"text\":\"one of the first five residences built in the Farentia Region and in the entirety of
				the Great Regions. The wool industry has moved from the Sheer District to the Oriental District in the
				Second Month, but the district nonetheless retains its historical\"}"), String("{\"text\":\"name. The
				Sheer District as of the Twelfth Month has become the frontier for the ever sprawling Capital of
				Farentia.\"}")])}), "Count" : Byte(16)})`,
	`Found minecraft:written_book in chunk at x 384, z 400:
				Compound({"tag": Compound({"title": String("Provisions"), "author" : String("Abwio"), "pages" :
				List([String("{\"text\":\"You found the first clue!\\n\\nHere you will find provisions you may need for
				the rest of your quest.\\n\\nIt may not be much, but you\\u0027ll find that these humble items will do
				you well.....\"}")])}), "Slot" : Byte(9), "Count" : Byte(1), "id" : String("minecraft:written_book")})`,
	`Found minecraft:written_book in chunk at x 144, z 432: Compound({"Slot": Byte(11), "tag" :
				Compound({"pages": List([String("{\"text\":\"This tower was erected in commemoration of the Twelfth
				Month (First Year) since the establishment of the Great Regions and the Sixth Month since the dawn of
				the Industrial Age. The honor was given to Farentia, wherein the Great Regions were
				established.\"}")]), "title" : String("Commemoration12m"), "author" : String("MusicalYoshi")}), "Count"
				: Byte(1), "id" : String("minecraft:written_book")})`,
	`Found minecraft:written_book in chunk at x 320, z 336: Compound({"id": String("minecraft:written_book"), "Slot" : Byte(0), "tag" : Compound({"author":
				String("MusicalYoshi"), "pages" : List([String("{\"text\":\"Farentian\\nGoverment\\nDeclaration of
				Annexation, 40m\\n\\n\"}"), String("{\"text\":\"As of today, 25th of the 40m, the Farentian region shall
				annex forcefully the regions of Zethro and Selunia, and hereby incorporate them into the Zethro and
				Selunia territories respectively. As a means to prevent uneconomical development in the fringes of\"}"),
				String("{\"text\":\"the land and in the proximity of land encroachments, the Farentia Region shall draw
				new borders along the previous regions\\u0027 borders, reducing the Farentian expanse into fringe and
				encroached lands. Development in the territories shall be closely\"}"), String("{\"text\":\"supervised
				by those appointed to zoning offices to ensure the security and integrity of settled zones.\\n\\nIn
				addition to the annexation and establishment of Farentian Zoning Offices, the Farentian Region shall
				hereby be known as the\"}"), String("{\"text\":\"Farentian Federation, and its colours shall be visible
				to all in the newly annexed territories. The implementation of this federal system is in good faith of
				the Farentian values of preservation and apt development, and it shall present all inhabitants a\"}"),
				String("{\"text\":\"challenging, yet grander endeavor to overcome.\"}")]), "title" : String("Federal
				Annex"), "resolved" : Byte(1)}), "Count" : Byte(1)})`,
	`Found minecraft:written_book in chunk at x 288, z 416: Compound({"tag": Compound({"pages": List([String("{\"text\":\"Arboreal Renovation\\nFarentia
				C.D.\\n18th Month\\n\\nIt has been decided that the trees of the historical capital shall be removed and
				replaced with biome suitable greenery. The capital needs much renovation and further development\"}"),
				String("{\"text\":\"in order to maintain the city\\u0027s visual appeal. This is among the many actions
				that must be taken to meet that much desired goal of both residents, citizens, and
				tourists.\"}")]), "author" : String("MusicalYoshi"), "title" : String("Arboreal Renov.")}), "Slot" :
				Byte(0), "Count" : Byte(16), "id" : String("minecraft:written_book")})`,
	`Found minecraft:writable_book in chunk at x 432, z 224: Compound({"Slot": Byte(26), "tag" : Compound({"pages": List([String("I can
				write a book...")])}), "id" : String("minecraft:writable_book"), "Count" : Byte(1)})`,
	`Found minecraft:written_book in chunk at x 432, z 208: Compound({"tag": Compound({"author":
				String("MusicalYoshi"), "title" : String("G.Selu Tower Dem"), "pages" :
				List([String("{\"text\":\"Demolition of Tower\\n-Grand Selunia, Selunia Region\\n-36m\\n\\nAs of this
				date, and in order to welcome a new age for the ancient sea region of Selunia, the monumentous tower of
				a by gone age that once loomed over the sea shall be surely\"}"), String("{\"text\":\"demolished. In
				accordance with the Selunia Mining Guild and Pinto Commission, it shall be done
				swiftly.\"}")])}), "Count" : Byte(16), "Slot" : Byte(12), "id" : String("minecraft:written_book")})`,
];