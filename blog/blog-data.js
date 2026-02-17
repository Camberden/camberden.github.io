/*
	`
	| Date…
	| Location
	| Time
	| &emsp;
	Journal Entry Input
	`
	,
*/

/*
<d‰ ‰d>
<l‰ ‰l>
<h‰ ‰h>
<t‰ ‰t>
<n‰ ‰n>
<b‰ ‰b>
*/


class BlogPost {
	/**
	 * @since November 12th, 2025
	 * @description To streamline blogData access.
	 * @param {String} date A date as String; @TODO Convert to Date Object
	 * @param {String} location 
	 * @param {String} time A time as String; @TODO Convert to Number
	 * @param {String} title 
	 * @param {Number} number
	 */
	constructor(date, location, time, title, number) {
		this.date = date;
		this.location = location;
		this.time = time;
		this.title = title;
		this.number = number;
	}
}

/**
 * @type BlogPost[]
 */
const blogPosts = [];


const blogData = [
	
	`
	| August 11th, 2024…
	| Chapel Hill, NC
	| 2200HRS
	| &emsp;
	At last, <b-title>the beginning</b-title> of my digital blogging page! I've been on a great trajectory since July.
	I am grateful for having had the lucidity of mind to adhere to routines.
	`
	,
	`
	| August 15th, 2024…
	| Chapel Hill, NC
	| 2250HRS
	| &emsp;
	I'm making considerable progress on my site. I almost feel too occupied with it to begin my fall semester classes.
	Regardless, I'll give it a break shortly once this blogging module is successfully given to its own separate page.
	Things seem to be working well: MVP as they'd say. <hr>&emsp; &emsp;
	Life is funny. More measurable progress is happening in the absense of self-imposed pressures. More so than ever before.
	Fitness, language study, reading, work, and coding: all of these things are going well. Nothing is difficult to approach.
	I feel no anxiety. I am content.
	Though I feel content, I occassionally feel a tinge of longing. Longing for a younger me who would have had this ability:
	the ability to adhere to routines, to generously indulge his creative and academic interests, to express his nature more fully.
	My social life is at a minimum right now, and that is fine. This is an intra-personal time for me.
	For years upon years my overwhelming thoughts and anxieties precluded me from engaging in such activity. 
	The delusion of my youth coupled with my neurodivergence formed within me a rotten value-system hinged upon
	dopaminergic reward. The delusion of my adulthood in my 20's further hinged it upon status and monetary reward.
	Oh the guilt I'd feel when doing ANY activity not for "career" or "financial security!" Every day I'd ask myself 
	whether or not whatever I was doing was WORTH it. 
	I am elated (though calmly) that this is OVER for me. I simply do, for the joy of doing. 
	I do, even when there is nothing to gain. I don't care if there is something to gain.
	True, there are multiple little and large goals <b-title>tied to my activities</b-title>, but I am no longer ATTACHED to ANY of them.
	If goals are attained, then cool. If not, okay. Just like you, reality, I'm simply expressing my nature.
	Your nature is to attenuate the coming and going of all activity. 
	My "interests" and whatnot are the means by which I may live skillfully and with finesse; there is a duty assumed
	in expressing my nature to live this life the best I could. I - my form, feelings, perceptions, predilections, and consciousness -
	are merely one lens through which interconnected phenomenal activity is witnessed and realized. 
	Given the choice, and recognizing reality for what it is, why not live more skillfully?
	I will aim myself in that direction, and go, with no destination in mind.
	Freely flowing, I am detached. Detached from the target: suspended in the outset.
	As Neil Hannon of the Divine Comedy said: "We need to live in a state of suspended animation, like a work of art, detached, detached."
	`
	,
	`
	| August 25th, 2024…
	| Chapel Hill, NC
	| 2303HRS
	| &emsp;
	I've being doing okay this weekend, though a bit somber at having missed out on a lot of sunshine and opportunity for
	hiking or long walks. I've gotten <b-title>over a week ahead</b-title> on my coursework, and have been continually doing other activities
	relevant to me, such as coding and language practice. There's still so much that deserves time. Even though I've
	done well to restrict my interests, they at times seem too numerous. <hr>&emsp; &emsp;
	I decided to drop the Business Law course because I did not want to be overburdened by coursework for these next few
	months. Gladly I will be getting a full refund, and will be able to better balance personal interests, work, and health.
	That extra course would have surely affected my mental health negatively in retrospect. Am I in no rush, after all.
	My lateral move will happen at some point, likely around late 2026. By then I will be more than ready for entry-level.
	Would I not like to enjoy the income and vacation time that my current position affords me during 2026 and perhaps beyond?
	It would be sensible, when of course I am free from SAL. So, overall: I will be selecting one and only one course per
	semester. Were I to take off most of summer 2026, I may do more; such classes then would be mostly prose/legal/reading.<hr>&emsp;
	I pushed my Laravel project again. I enabled CSS and images by moving such files to the 'Public' directory and interpolating
	in the blades as {{'asset(/css/app.css')}} for instance. I had to update database credentials in the .env file. 
	For sql, I needed to mysql -uroot following reset and follow mysql_secure_installation instructions.
	`
	,
	`
	| September 1st, 2024…
	| Chapel Hill, NC
	| 1555HRS
	| &emsp;
	Almost finished with another eighty-hour work-week. I'm grateful to have been enjoying work very much.
	Even so, I maintain <b-title>managed enthusiasm</b-title> for my intended career change, and am learning to better interweave that
	enthusiasm in my current position through stressing oft-overlooked procedures and offering solutions to streamline
	operations across shifts and teams. I anticipate my learning journey with coding to manifest my idea for a simple
	pay and pension prediction utility once I gain enough confidence in Laravel and attain the ability to deploy on an
	internet-accessible server, cloud or not.
	<hr>&emsp; &emsp;
	I wouldn't say I have too many interests or anything, but the amount of creative things I want to do can seem like much 
	though not to an overwhelming degree that would cause me to freeze up like I have prior to my brain's software update, 
	so to speak. I would like to gain a modest competence in creating digital assets, in producing music again, in font design,
	in simple game design (likely educational), in video creation, among others that may arise as this worldly self further 
	develops. 
	<hr>&emsp; &emsp;
	I've learned through writing the pension calculator about document.getElementById("").children.item(#) which will be 
	able to target and access the nth index tag within the gotten element's child. Cool! I can't wait to see how these all
	work with database connectivity through Laravel. Well, I actually can wait, and will. 
	<hr>&emsp; &emsp;
	I am secure; I am safe; I am content. 
	Missu.
	`
	,
	`
	| September 10th, 2024…
	| Chapel Hill, NC
	| 0731HRS
	| &emsp;
	So, though I have been doing okay for myself, I am experiencing old pangs of inadequacy. I attribute this to the return flight.
	Thoughts have arisen and continually arise of my 'not having amounted to enough' to merit the continuation of what we had.
	After years of having been reassured that this wasn't an issue, it had seemingly become among the reasons for separation.
	I become confused and question where I had made mistakes. Though I could say that I should have followed my gut feeling, it stands
	true that I am blessed with a very decent situation now, at least intra-personally. I mustn't forget that this course of events
	was possible because I had not acted on that gut feeling, and instead chose loyalty. This suffering I am enduring now exists 
	undertoned by the relief of it, for myself and for others. I take solace in this realization. Nonetheless, the sensation is 
	<b-title>emotionally burdensome</b-title>. I aim to act well as things become situated again, but I hold a sense that I would become excessively
	cautious with my speech to the extent it could be considered 'masking.' Such masking surely wouldn't be healthy for me.
	<hr>&emsp;
	I'm going to put on a smile as I approach my tomorrow, and power through. I am tired. That is fine. 
	`
	,

	`
	| September 14th, 2024…
	| Hillsborough, NC
	| 2201 HRS
	| &emsp;
	It still holds true that <b-title>community integration</b-title> for me is difficult. 
	On occasion I find myself disheartened by repeated acceptance that so little works with my schedule.
	One activity after the next, one event after the next, one person after the next; 
	I am unable to conform to externally sourced routines with any sort of socially expected consistency. 
	My schedule is something I enjoy, but no longer wish to maintain long-term; 
	I recall "wishing" I'd have this type of schedule, and that a 12-hour shift would be the best balance between too much and too little. 
	It's not only the length or frequency of shifts that causes difficulty, 
	it's that my off days are inconsistent on a week-by-week basis, 
	a basis that would be helpful in establishing myself as a reliable regular both online and in-person.
	Being more reliably regular seems to be the best for developing one's sense of community, especially within third spaces.
	<hr>&emsp;
	I affirm that there can be multiple "selves" through which one's life is lived. 
	My experience has shown me that the Chrispy of 2018 who highly desired such a lifestyle is simply not the Chrispy of 2024.
	Though "I" share the same life-lens as that previous self,  I couldn't agree that that person is "me" or the present self.
	My identities and values have shifted quite dramatically since; the actions taken previously I now consider unthinkable.
	College debt, liberal arts, fast food, luxury goods etc. 
	`
	,
	`
	| September 21st, 2024…
	| Chapel Hill, NC
	| 1952 HRS
	| &emsp;
	The weekend began with an overhaul of my digital security across all licenses and websites. I am surprised at just how much peace
	of mind that afforded me; I suppose it's due to an increased feeling control over my life for years to come, especially as I 
	increase my time sitting in front of a computer. I've uncovered most of my previously used email accounts and discovered many files
	and projects my previous selves created including videos, music, college papers, and even silly poems like "Vanilla FOrmula."
	Aside from things uncovered online, I plugged in my old external harddrive from undergrad, and uncovered my trashed iMac's backup
	from 2014. Inside, I found more even files to include plugins (like Magic 8-bit Plugin), my Japanese class video recordings,
	Minecraft multiplayer clips, old desktop screencaps, and albums that got me through my early college years. 
	I was really hoping to find my Finale music program files from 2007-2010 but sadly they're not present. Some compositions I forgot,
	like Mission Themes I and II, Floccinaucinilipilificated Tune, and Organ Composition I (my first produced tune).
	Needless to say, I'm <b-title>feeling the nostalgia</b-title> of that time, though I affirm that I am content in my current place in life.
	<hr>&emsp;
	During this time, I have successfully reloaded all my music plugins into my DAW, Logic Pro. Having been programming consistently, my DAW
	and its tools have become much easier to manage. I can now see the sense in how many parameters are interconnected and can muster
	the patience to learn the features that go beyond simply inputting MIDI data. My curiosity for what lies underneath the raw musicality 
	of the production process is actually alive. In years past, I'd hardly care. All of my interests are inteweaving at large, it seems.
	While typing this, I'm listening to videos on VST design. Heck, I could even consider making my own software synth plugins someday, 
	were I to engage dabble with C++ or Rust. Again, something to consider, nothing to involve myself deeply into at this time. 
	I must be wary to keep my interests limited, because at times lately I've noticed that I could overwhelm myself with new creative avenues to 
	explore. My time is limited. I long for weeks or months at a time where I can better catch up to who I could have become. Putting it that
	way seems a bit remorseful, rather, I long for weeks or months at a time where I can become who I will to be. I intend at nothing groundbreaking,
	but just will to aim my life skillfully.
	<hr>&emsp;
	Overall, I'm feeling okay. It's been a decent weekend so far, and I would like to produce a little thing shortly and place it on my website.
	I also would like to update the music page, and add a few more tracks. I should sort all lists by year. I should also update the dashboard 
	and use a different border style site-wide, because on mobile some borders do not appear properly. In addition, I want my JLPT page to 
	be able to prompt a Jisho iFrame by marshalling a chosen word to its URI query. This way, I could essentially use it as an API without
	a direct external call which would be permissible by github pages.
	<hr>&emsp;
	Work is going okay. I'm definitely improving in my role and am happy to have really established myself. I'm grateful to know that I am secure,
	and with that security my peace of mind is maintained. Randomly I feel uneasy about American politics and economy and it escalates to
	active worrying about societal collapse. This peace I enjoy, like all things, is impermanent. I need to keep working and fulfill my 
	financial obligations, because only then would I no longer be shackled to this geopolitical division where the negatives to exacerbate.
	The worry materialized into my having created that Travel Log page to include retirement ideas. I can live on little, now moreso than
	ever. I am concerned that others may follow a very frugal path, which, though potentially beneficial for individuals' lives, would 
	leave a negative impact on the economy if there are fewer and fewer consumers out there. If more desires are purged, then there would
	be fewer jobs geared towards fabricating desire and towards peddling goods for which such desire is fabricated. I am hopeful this 
	modern world, in all its good and bad, is at least able to avoid collapse. A glipse of collapse would surely increase my consideration
	for taking a stint at Antaiji. 
	`
	,
	`
	| October 9th, 2024…
	| Chapel Hill, NC
	| 2236 HRS
	| &emsp;
	October has been fine so far. I began a vacation which manifested as a staycation, more or less. Anxieties have arisen, possibly due to 
	the continuation of the acceptable mundane for me. There was little to break the monotony throughout the time; only one day remains.
	I began my Friday with a mind flooding with fanciful ideas of international travel, car rentals, and beach-bound trips. Perhaps I had
	gotten a bit too attached to the broad idea of "going somewhere far away." To add, I had consistent self-imposed pressure to adjust my schedule
	to the daytime which I had not been able to do successfully. These led to confusion resulting in <b-title>exacerbated executive dysfunction</b-title> and a 
	disruption to my sense of peace. I need to be careful; I need to reflect more, and I need to clear my head more. It is evident that ideas
	and thoughts have become too numerous. It is for that very reason I previously determined that I must remain consistent with my emptiness practice.
	<hr>&emsp;
	I prefaced by saying that this month has been fine. I had made considerable strides in programming and coursework. I am glad to have
	gotten full CRUD working in Laravel and had learned Rust basics. I should not forget <code>{{auth()->user()->name}}</code> for direct
	session user name access. I've also been pushing forward with the Accounting page and it's almost at the point where I could use it a as
	a passive study tool as I desire for it to become. I mustn't forget that any modules I make on the github.io can be ported over to 
	Laravel or other frameworks that would permit independent server hosting and deployment such that I could integrate user profiles, saving,
	and other database-enabled services.
	<hr>&emsp;
	As I have many times in the past, I should see the positives in my not having traveled far away during these seven days. No Home in PA,
	Outer Banks in NC, Bogotá in Colombia, or Baggs in Wyoming, heheh. Just here. Things are fine. Financially, I must be mindful of increased
	burden for the next year. Yes, I have been mindful of finances and saving very much, but I have a feeling that I will have to maintain the
	stronger sense of frugality throughout 2025; I do not want this staycation to leave me attached to the idea of consistent vacationing.
	I need to keep my income high, and to do that, I must fulfill my monthly work obligations with minimal leave taken. Besides, my leave accrual
	will ensure that my quotas are loaded up and ready to go for calendar year 2026! I have a lot to look forward to. The funny thing I'm realizing
	is that people will always find something to become dissatisfied with, and even someone such as myself armed with detachment practices can
	fall victim from time to time. All is fine, all is empty. Even if I were shackled for life, what should preclude me from experiencing the 
	present moment positively?
	`
	,
	`
	| October 10th, 2024…
	| Chapel Hill, NC
	| 2337 HRS
	| &emsp;
	Earlier today I recited the "Merging of Difference and Unity" in group. There's a line towards the end that struck a chord with me when I
	first read it, and now, it came to the forefront of my mind: "Progress is not a matter of far or near, but if you are confused mountains and
	rivers block the way." I was certainly confused about many things ranging from small to large. Should I travel? Should I stay? Should I 
	reach out to others? Should I remain focused on personal endeavors? Am I picking up too many endeavors? What should I eliminate? 
	Should I consider leaving in the long term? Staying near? Shall I take more leave, or work more?
	Will I back home for the long term? Should I give up everything, or cling to few things? Shall I fly solo or have a companion?
	Should I be loyal to people, or is no one but myself worth trusting? Should I concern myself with heated world affairs?
	Shall I have such affairs influence where I take myself?
	Do I enjoy my work, or do I revile it? Am I dwelling too much in the future at the moment, or am I being responsible in doing so?
	<hr>&emsp;
	Yet again in life, I'm forced to consider another move. Yet another move. My relocation to this place felt so right, and I do enjoy it, but
	I must be responsible and achieve my freedom, and aiming towards that steadily would require another drastic action. I have some plans.
	There is no plan that doesn't involve sacrifice of some sort. I am hopeful that I am mentally prepared for detaching to some of the 
	conveniences life has afforded me at this location. I know I can do this. I need to go with the flow of life as it presents itself to me.
	I know this. I should settle on a course of action for 2025. Firstly, I must be able to see all options available to me. 
	The debt of my past as a naive student is almost wholly paid; alas, it follows me to 2025 and affects where I will end up for that year.
	It's not much longer. I can do this. Right now, I must dispell this confusion a bit more such that the <b-title>mountains and rivers</b-title> aren't 
	blocking the way. Indeed, I should knock out Test 2. I must dedicate one off day ahead to completing the financially rewarding 
	progression program. I need to recover and unburden myself to see a path more clearly. I know what I must do.
	`
	,

	`
	| October 15th, 2024…
	| Chapel Hill, NC
	| 2228 HRS
	| &emsp;
	I spend a work shift at my first assignment location for my current role. I was quite apprehensive at first, but upon getting settled in,
	it was okay. Nonetheless, memories both good and bad had surfaced. I was given a moment to reflect and to but my life into perspective:
	I surely had come a long way, and I'm grateful for how my life had turned out. The fires, floods, and blood are no longer a frequent
	dealing of mine because I had taken action. I recalled those make-or-break moments I had. The anxieties and stresses of that time
	were necessary, and really put things into perspective. I appeared at briefing, and it was like a dream, seeing the old team still
	kicking. Still making it happen. They affirm that they just need people. More people on the team, just like when I started. I miss the
	days when we were stacked. I felt so pumped up to learn and to run that joint, every day, knowing we had almost 50 total people on
	shift. Sadly such is not the case now, and while yes, they need people, and they were refreshed to see me returning again, I am 
	certainly not considering returning, and I'm sure they all knew that. I have a feeling that I may be perceived as an inspiration
	for staff there to change their situation, and that management is aware of that. I feel such would be perogative for management
	to keep me more separated from staff. Anywho, I'm grateful for having had the opportunity to revisit and to glean this perspective.
	<hr>&emsp;
	I'm going to do some homework tonight, and give this digital nomad location browsing a little break. After all, it's my accounting
	studies that will help enable that lifestyle down the road. In this moment, I am feeling quite roasty inside. Ever since the return
	flight, I've not kept up with my routines and principles as well. But no worries, I can get the ball rolling again, so to speak.
	My routines and such will be quite different when 2025 rolls around, but I know something will work out. I have faith.
	I am confident in making another move; I've done it many times before and can do it again of course. My moves have led to successes.
	Though I'm a little saddened to leave this place, I understand that there is no absolute. I honestly have become attached to this 
	place, and still affirm that it is amazing for my needs, but it's a time to detach again and to put my mindset into action. 
	It's all impermanent, just like my time at that rough location. I can relinquish negatives and I can 
	<b-title>relinquish positives</b-title>.
	`
	,

	`
	| December 1st, 2024…
	| Chapel Hill, NC
	| 1216 HRS
	| &emsp;
	My headspace lately has been discordant. I am preparing for a move and nearly finished with this class. 
	I have had more responsibilities at work which are tolerable but not particularly desired.
	My health has been poor, not only because of family and friend visits but because of lackluster discipline on
	any given day. My loss of workout routine has made way for excess consumption, passivity, and general carelessness to creep.
	My proactivity has dwindled drastically. 
	<hr>&emsp;
	I am writing now such that I may take note of these problems, and because I have procrastiated on physically writing an entry for weeks: 
	I am in trouble. I need to force a fast or some sort of detox to get back on track. 
	I must avoid specific things I know to cause me harm: cereals are no good, sugary foods including ice cream are no good, eating 
	near midnight in general is no good. I must encourage specific things that I know to benefit me: <b-title>high protein</b-title> upon waking, 
	diversified caffeine sources, and fitting some sort of exercise in no matter what.
	<hr>&emsp;
	With the above in mind, I am hopeful to recover my better mode of being that I experienced when making this blog.
	I surely have the means to do so; this is merely another ebb of the flow of my life. I recall around this time last year I endured
	a similar situation with regard to self-care. Meh. In that case and in all other cases, I was able to recover and feel the 
	zest for life. After all, simply being is to endure both the lows and the highs. Otherwise being is not being as it is known to be.
	Heh heh.
	`
	,

	`
	| December 26th, 2024…
	| Pittsboro, NC
	| 1642 HRS
	| &emsp;
	I am returning slowly to a state of normalcy. The relocation was successful but to become situated is warranting an overhaul of lifestyle and routines. 
	I have done a few test runs over the last few days, waking up early, soaking up sunshine, heading to the old yellow and purple gym, and enjoying the library.
	Some days have shown that it was working well, while others have shown that it comes with a potential onset of extreme tiredness. I am unsure of which
	course of action I should take as part of a daily routine with such chaotic variation resulting. The cold, lengthy commuting, and multiple auxiliary places en route
	are showing themselves as a collective throwback to my time in my previous life before coming to North Carolina. It was a time when my hyperactivity was dominant,
	and my focus was absent; all that mattered was flowing onward, working, living, sufficing. Hardly was there any "living of life" in a generally accepted sense. 
	No hobbies, no dedicated fun, no activities. Just resource management, self-maintenance, sustenance, and work. Though now somewhat feels like that, I'm confident
	this will be different here at <b-title>this new place</b-title> - after all, my workload is lessened and I've crafted a truly lovely space. Looking forward to this weekend,
	I have nothing but time to learn to enjoy it and to solidify a new routine. In any case, I need to head out to work. Easy does it, me. Make that money and 
	get that credit.
	`
	,
	`
	| December 30th, 2024…
	| Pittsboro, NC
	| 1129 HRS
	| &emsp;
	I'm struggling to <b-title>sleep again</b-title>. I am displeased with how frequently this happens.
	I have lacked routine ever since I have come here, and I do blame myself, mostly.
	I need to drastically cut down on my caffeine intake, for good. I am making this a 
	serious point going into the new year; too many times do I feel peaceful and calm, 
	only to have the hyperactive urge compell me to down many hundreds of milligrams more.
	I want to enjoy a refreshing calmness free from CNS stimulation, and allow
	my body to adjust naturally to a healthier sleeping pattern.
	This improvement would surely come in tandem with others I have scoped out for
	2025. I worry that the mundanity of being stuck here may make me stir crazy, 
	especially if I'd reduce my dopeminergic load with less CNS stimulation and fewer 
	flavorful drinks to drink. Sigh. I should accept that these sacrifices are a 
	necessary part of the journey. I should treat this time now as an intermittent time:
	the time between crawling out from debt and into wealth generation.
	I would deserve to surface as a refined instance of self, yes? oof.
	`
	,
	`
	| January 3rd, 2025…
	| Pittsboro, NC
	| 0334 HRS
	| &emsp;
	It's a new year, and though the common greeting is "Happy" New Year, its happy quality is to-be-determined.
	That isn't to say that I'm not optimistic: I'm beyond grateful for my current situation and am still working to create a 
	routine here at my new place conducive to fostering those good habits and dropping those bad habits. So far, though, I've been
	struggling to achieve a satisfactory lifestyle. Why? I've been lax in adjusting to a consistent sleep schedule, and my minor tasks
	have taken priority. Driving the distance to the gym has been oddly unnerving, and I've drifted away from my practice. I have to 
	admit to myself that there is nothing wrong with the drive, and that I must better detach from the idea of the lifestyle that I lost.
	The wear on my vehicle is bound to happen no matter what. It's only a matter of time. A few more added commutes on my off days for 
	the purpose of my health is warranted. Besides, I'm paying for that access now. Even if I do not hit the mark of clearing my student loan
	by the end of the year, I will still continue to earn, and still continue to make progress. I don't know for how long I could stay here, 
	but it seems promising that I could eliminate this debt and get myself into a new vehicle, or perhaps take extended leave from work to 
	get far ahead on my accounting studies. After all, at some point I should focus heavily on my studies when the time comes; I will need to push through 
	industry certifications after achieving the baseline pre-requisites. Knocking out multiple courses could save me about a year in getting those pre-requisites.
	It would take four of them, and that's possible, perhaps even during a summer: summer 2026, maybe? I've been digressing.
	<hr>&emsp;
	I recall always asking myself "what did I do wrong here?" and "how did I cause this?" about things within and seemingly outside of my control.
	People would say I was being too hard on myself. I found the tyrant of the self to be beneficial, especially through my security career. 
	It reinforced the idea that I must take ownership of the situation. It would afford me a sense of control and of agency of my situation in life.
	As such, I reaffirm that, of course, a reality could exist where I embody positive habits and endure the momentary, fleeting moments of endured
	suffering. These days are going quickly. Calendar year 2024 showed much success in many ways, but some habits hadn't stuck around.
	There were seasons of occupation throughout the year, and the summer proved to be the best of them. By being here, working on my site among other things,
	I am stirring with a tad more confidence in the possibilty of having an even stronger 2025. I can fall back into a flow state and achieve my freedom.
	I must take each day without any fear-of-missing-out, and just execute. Just go with my flow, and focus on the few things central to my being.
	The factors surrounding a lot of my person are very fleeting. I mustn't overvalue the time that passes day-by-day. My sincere wish is freedom: freedom from
	debts and freedom from temptations. Funnily enough, it can make life much simpler than the one I have now. It doesn't matter if an off day is ending, or if 
	I just woke up and must hit the road. No mundane situations need to be sensationalized in my head like American news. Relax. All is well, all is fine. 
	If I don't get a dopamine hit, it's fine: it's a peaceful instance. If I feel a tad of anxiety for something, it's fine: it's an ebb of the flow of life.
	If I'm suffering, good. I should prove to myself I'm able to get through the situation. I may have proven myself in the past as a past self but I mustn't excuse my 
	present self from doing the same. "The struggle is not mine anymore" does not quite apply here. By demonstrating a life well lived, in my flow state, I am
	aimlessly aiming. Attached, yet detached. I experienced the sense of this last summer. Let's <b-title>do it again</b-title>.
	`
	,
	`
	| January 11th, 2025…
	| Pittsboro, NC
	| 2236 HRS
	| &emsp;
	Here's to the weekend! Three days off, mostly been productive on programming and language learning.
	I just learned that for setting classes dynamically, I should <code>setAttribute</code> first for specific cases that require
	a local scope variable in the class name, and then apply <code>classList.add()</code> afterwards for classes without
	variables. I really just wanted to drop this note, but aside from that, <b-title>Clozemaster</b-title> is an awesome site and it's 
	almost perfect for my pace of learning. Being barraged with real world sentences replete with various contexts seems
	to expedite retention without being particularly demanding. The gaps in knowledge presented by real world sentences
	are exciting, and that excitement coaxes learning and attention, and the frequency at which patterns tend to repeat
	across multiple sentences help reinforce the novel structures in memory. Having found this tool makes me feel so relieved 
	to no longer need Duolingo to aid in progress; I've grown really disenchanted with its model. 
	My biggest critique is that processing the content of a passage on Duolingo happens much quicker than actually
	answering the question, which mostly involves hunt-and-pecking English words from a bank to construct a translation
	that the passage author explicitly wrote. It's especially discouraging to have pecked one wrong English word
	from the bank even though I understood the content of the passage in the target language. In such case, I would be
	awarded no points. Nothing. Heck! I also didn't like how it became overdone with design, animations, characters,
	sounds, messages -- essentially pointless fluff that slows things down and distracts. The noded learning paths are long
	and disorienting, and how heavily monetized it is from the "heart" system to accessibility to challenges further
	make approaching learning a headache. Clozemaster does away with all the fluff and nonsense. It's direct from
	large sentence banks across the web, focused on input in target language only, integrated with AI to assist with context,
	and has plenty, plenty more languages than Duolingo. No node-like paths or excessive elementary review, just select
	a large bank at current competence and go. For me, I've been able to brush up so fast with Japanese and even Spanish.
	I've included Polish with which I'm not really at any competence, but it's still fun. I could imagine attaining
	a fair competency rather quickly in future languages with this approach. I will say, though, that for establishing
	a fundamental knowledge of basic words and structures, Duolingo may yet be helpful. My glossing over Polish would
	still be well served by Duolingo.
	<hr>&emsp;
	So I started Intermediate Accounting I and I plan to knock out the first chapter for the remainder of the weekend.
	I'm not awfully nervous, but I recognize that I really do need to brush up on plenty of concepts. I'll give myself
	some grace, since I'm still getting situated at this new place and this course serves to reintroduce topics.
	No worries. So, in the grand scheme, I've recovered my preoccupation with personal endeavors, made my space even
	cozier, and am on an upward trajectory. Health-wise, I still have work to do to recover the likeness of last summer, 
	but that time will come; I'm not worried. It's only been a month since uprooting. Progress. Huzzah.
	`
	,

	`
	| January 21st, 2025…
	| Pittsboro, NC
	| 2324 HRS
	| &emsp;
	I've been distressed somewhat over the potential for an upcoming "promotion" which wouldn't serve to afford me more
	income, but rather just a defined role and location assignment. I've weighed pros and cons: of course, I would have
	more immediate access to my personal endeavors while completing tasks I know I could likely handle well. I do have
	some doubts over my ability in the event of some high-stakes, novel situations, but perhaps that's normal. Of course,
	I am who I am, and so my personality and values will come into play, and as I've said, they're perhaps not the best
	fit in some situations. I would afford myself some relief from the chaos of <b-title>other roles</b-title> if I did not take the position,
	but nonetheless, the responsibility is higher. Yet, I am generally a responsible person as it is, and my workplace and
	indirectly my career at-large could benefit? Heh. Not sure. My class work and financial progress is paramount, and they are
	going well enough. Do I not have enough credibility? I surely don't need the role. There's no utility pursuing it for
	egoic reasons, I recognize. There's no money in it. It's essentially only the location inflexibility plus added 
	expectations. I am concerned with how teetering my mood seems to be and how that would affect my performance and the
	morale I could instill on fellow staff. Additionally, I would have to be that exemplar on a day-by-day basis. I do
	intend on traveling plenty once this burden is cleared later this year. I want my peace of mind, and focus. 
	This role may bring excess pre-occupation with assuming-the-role and masking, pulling me away from my own endeavors.
	Would I find it more fulfilling to do a good job at this higher role, and enjoy the occassional peace?
	Or maintain what I am and have, and enjoy the occassional peace? Either way, I will be afforded occassional peace. My workflow is better at the potential 
	assignment than the varied assignments. The potential for bad decisions is there and that's what's getting to me.
	That, coupled with the need to remain harmonious as a "leader" in a higher-stakes profession.
	Yet, I'm definitely becoming more mindful and incrementally more capable; I have garnered the trust of others both
	junior and senior. My flow is falling off, I think. I'm not sure what I'll do after writing this. 
	<hr>&emsp;
	My accounting page needs a revamp; the notes are of little use to me. I would rather have something practical and 
	interactive, as if I were actually performing a technical role, much as I enjoy coding and learning language in 
	context. Reading over things does not work with my learning style. 
	That being said, I much enjoyed building my own spreadsheets yesterday. It rekindled my excitement for the contents
	and helped instill the concepts and patterns in my mind seemingly more effectively.
	I placed my template worksheet on Sharepoint for use elsewhere, and will use my sheet locally, but I see the utility
	in having a client-side generator for common accounting patterns to solve questions as they appear and uncommitting
	the clutter to any memory. Now that I have some templates, I'm sure I could implement them. I believe T-Accounts would
	be practical to implement on the outset here.
	<hr>&emsp;
	I have not adopted a particular routine yet, but I am productive. I recently identified in a written entry that, yes,
	my after-work time does not incorporate use of the computer, so no coding or homework, really. That leaves me few other
	things to do, and I could acknowledge that the period is otherwise bust and should commit to heading to the gym. I must
	be mindful that the nearby site is not available on weekends at my time, so I must head to Chapel Hill. 
	I can start on Friday morning. Then, come Monday, the Tuesday morning would be great. 
	I acknowledge that restarting a habit is rough to approach, but it's doable. I just need to sacrifice.
	Then again, I must mention this point:
	<hr>&emsp;
	Once I am finished with this role and attain a better schedule, I will much more easily be able to incorporate health-focus
	into my lifestyle. Though I may have a relatively difficult time incorporating it now, the time is certain to come. 
	It will come back, anyway. It will come back, anyway, you know. So as long as I continue living responsibly, the 
	time is bound to come. After all, that's one reason I am in school, yes? That and community integration and 
	bettering my personal practices. It's the role beyond I aspire to. It's not this opportunity now.
	In any case, I mustn't attach to the idea of it. Nothing is guaranteed. I am, though, grateful for what I have now.
	I have a sink basically a meter away from me. I think I want to "relax," whatever that would entail. Good night.
	`
	,
	`
	| March 1st, 2025…
	| Pittsboro, NC
	| 1604 HRS
	| &emsp;
	Alright, it's March and things are heating up (gladly). I hit a tree, but no worry; things are being handled.
	I often advised to give myself grace amid my minor failings. The relevant worry is that I feel I may grant myself
	such grace in excess. I am told that I am handling plenty tasks and am making decent measurable progress, especially relevant
	to other people consulted who may endeavor to live life well. I suppose that, even in times where I am strident, I am prone
	to overthinking shortcomings whether in health or spirit, and among other aspects. Lately my difficulty has been in assuming 
	consistency in accounting studies and keeping up with my programming hobby. Work and language studies have been great. This 
	observation retells my account of how life focus seems divided into seasons, each bearing its own particular focuses. This 2025 
	Winter seems to hold a focus on language studies, financial frugality, and work excellence. 
	Can I accept this? Well, either way I am flowing onward. I must, however, continue to hit a baseline for my accounting studies,
	and even though I'm only self-imposing attainment of a baseline, I am compelled to achieve the highest grade. This is one proving ground
	on my <b-title>multi-layered redemption arc</b-title>. I suppose I'll detail some of that here:
	<hr>&emsp;
	My life was in complete disarray during and shortly following my college years. There were the following earlier aspects to fix:
	work ethic, control of psychoactives, physicality, commitment to language learning, commitment to career ascension. The following are
	later aims: commitment to career change, commitment to spirituality, commitment to health maintenance, and commitment to creativity.
	Since my fateful moment on my 24th birthday, I had redeemed my work ethic, ascended in career, and improved physically. I must not 
	forget the importance of just how far I've come. I occassionally have moments when I ponder just how... hopeless it would seem if
	I had to start over, years prior, with the same self that I am now. I am surprised that, yes, I in fact did all of that. I in fact
	endured those cruicial moments of transformation and suffering to a good end. That end is lived now, in this present moment. Yes, 
	plenty is ahead, but the foundation is clearer just as my mind. From those two lists, I forewent "socialization and interpersonal 
	connectivity." I know that my time is coming to redeem that, perhaps years from now; I refuse to welcome externally sourced pressures
	to any degree that would threaten the integrity of my peace of mind which I treasure.
	<hr>&emsp;
	In any case, before I head to work, I would like to note programming todos. I want to add a clozemaster-esque module for Eremoran at 
	the language page, to note the music that sets the tone for each season of my life, to create a gitlab alternate page for my webtools,
	and to eventually apply a PHP tunnel to host this site with my own domain and URI endpoints.
	I'll go ahead and list some of those music things, somewhere on this site, then log off. Cheers.
	`
	,

	`
	| March 9th, 2025…
	| Myrtle Beach, SC
	| 1213 HRS
	| &emsp;
	My dear car had passed away. On a foggy, rainy, and dark morning, I had stricken a pulpy tree that had covered
	the entire road. I braked as much as I could, and collided head-on, incuring damage to the fascia, engine filter, 
	fog lights, and a wheel. Gladly, she was resilent. She powered onward and took me home without any alarms or
	drivability issues. The following day after work it was below freezing and my attempts to fill a flat tire failed 
	thrice. I got a tow and had my spare affixed. The following day, I booked the vehicle into the collision center 
	pending repair. I knew she was still driveable, and it was my intent to eek out at least 50000 more miles!
	But, as fate had it, insurace declared her a total loss. And thus ends my journey in my black car; she served 
	well, and continued to serve posthumously with settlement value. I am beyond grateful, and I am back on the road again
	in my new companion, a white car hatchback of reliable make. I had decided to take this new companion on its first road
	trip, venturing into the legendary "Buc-ee's" and lodging at familiar Myrtle Beach where I will look at an axolotl and
	eat delectible Paula Deen food. I will head home shortly. The death of my dear car surely brought forth a new chapter
	in life, and I'm very much enjoying it so far. This is far more than I deserve. Yes, I may have a car payment again, 
	but given the aftermath, I am moving far ahead in life. Being freely mobile again for long distance trips without the need
	for a rental is refreshing, but I still hold a fair bit of hesitance to do so. I want to be safe and secure. 
	I'm not particularly volatile right now, but my security must be well managed, not sufficiently managed. It will be.
	I've laboured plenty to arrive at this point. This point marks the <b-title>outset of new journeys</b-title>, and gladly it coincides
	with successes met with family and friends.
	<hr>&emsp;
	I will admit, I had surely procrastinated on my accounting homework amid coordinating the car booking, the new purchase,
	and my forthcoming trip to Japan. I am finding it beyond difficult to focus on straight-up learning new content here
	on my laptop at this seaside Starbucks. I am committing to enjoy the remainder of my time after this entry, and to head 
	home early. I will surely find sufficient time upon arrival home to hunker down before pre-work dormition. This is 
	a brief trip, not a consistent lifestyle. I shouldn't squander it in front of a screen. By gosh I shall recline on this 
	beach and get to some writing and reading. I might forego a swim given it's a bit cold. 
	Anyway, I think I'll head out in just a second. Focused learning and solving complex problems due in a few days just isn't
	happening right now. This is a place for lighter learning and studying, like language and front-end dev.
	More interactive stuffs, I suppose. I'm taking my leave now.
	`
	,
	`
	| March 18th, 2025…
	| Pittsboro, NC
	| 2347 HRS
	| &emsp;
	Heading onward through March. I'm a bit dishearted to learn the return flight hadn't happened, but I can accept
	this reality and put it behind me. Tonight is my first day off in five days and I told myself to simply unwind.
	I suppose I'm doing just that. I've been talking to some new folks and it's been pleasant, though I can't help
	but notice the expected feeling shortly after a few conversations: the emptiness and the risk
	of further social obligation and burden. Heck.
	<hr>&emsp;
	I admit, I don't feel quite up to studies of any sort. I am just drained. I need to study quite a bit for the
	second test this semester. I will. It doesn't need to be today. I am calm and competent.
	<hr>&emsp;
	I reiterated in a conversation my assertion that work and career should be in service to achieving and supporting
	a daily lifestyle that affords peace of mind and measurable progress. I made the right choice in <b-title>buying my bicycle</b-title>.
	`
	,
	`
	| April 19th, 2025…
	| Pittsboro, NC
	| 2145 HRS
	| &emsp;
	I've on occassion been overwhelmed with work and school. Not only was work involving a lot more activity to include
	training of multiple people simultaneously, but also my schoolwork was technically dense with many assignments. 
	I prevailed, gladly. I'm glad again that I hadn't checked off earlier in the semester, and that I hadn't made 
	poor decisions concerning my work. Now, I'm off for two days and should make decent use of the time. Now, to mean
	this present moment, I'm particularly unmotivated and drained, but I did at the very least incorporate a new DNS 
	configuration and enabled this site to route directly to my domain. I will see if this alone was sufficient to 
	reenable a convenience I had previously lost. I'm going to take a caffeine pill now. Alright.
	<hr>&emsp;
	I observe a few insufficiencies in my studyflow. Where earlier this year I approached language at least on Clozemaster
	daily, I am now not keeping up with the habit. I attribute this to not only my assignment to a different post at work, 
	but also my note-taking. I have been treating my note taking for both accounting and languages the same way I would 
	treat my journalling: I would write on seperate full sheets of paper and then file them away once completed. 
	After filing them away, they would stay filed away. Indeed, this works well for journalling, but proves poor for
	consistenly learning. I will return to my Rhodia notebooks, and I may need to abandon my use of the brush pen for 
	writing in Japanese for notes inside them; the strokes are too thick and such. Alright, well, I just got my new
	Rhodia book for Japanese ready to go. Gotta refine a <b-title>note-taking method</b-title> for it still. Fitting characters into the
	cells is unlikely. I may just need to write using my Pilot Frixions as I would with Accounting notes. Erasability 
	is necessary. 
	<hr>&emsp;
	Aside from that, the gym will be closed during my times this weekend so I'll be riding my bike instead. Woo.
	That being said, it looks like I got myself into a decent off-day routine again. I anticipate keeping it up
	despite this weekend being what it is. Also, before I head out for a friend visit, I'll incorporate the new
	prospective pay scale for work. Woo.
	`
	,
	`
	| April 20th, 2025…
	| Pittsboro, NC
	| 2157 HRS	
	| &emsp;
	Often times I wonder if it is sensible for someone like myself to be investing much time into technology endeavors.
	Technology is advancing to the point that many are living in a hyper-reality where real-world experiences lose or have
	lost their lustre. This is inline with sociological work pre-dating social media that predicted decline in appreciation
	for the real-world. Baudrillard is a name that comes up. I recently watched videos of those who established simple lives
	for themselves in places like rural Paraguay and Japan who seem to have brought about a genuine contentment in living and
	wholehearted appreciation for the simplest of things, like "playing with rice." I ponder then, what do people really want,
	and what do I really want?
	<hr>&emsp;
	The taste of low-hanging fruit is becoming blander and blander. Pursuits lead to more plateaus which lead to more pursuits
	which lead to more plateaus. Climbing up this figurative tree that bears such fruit and siting atop a higher branch, the taste
	of the fruit there is hardly sweeter. Once I reach its top and consume its fruit, will I be amazed at its taste? Even if I would
	be, shall it go bland like the fruit farther down? There is no peak-euphoria during which the end is met. The taste is impermanent.
	Nonetheless, I'll keep climbing but maintain no expectations such that I may dispell the suffering of inconvenience and that maybe,
	just maybe, I'll be pleasantly surprised at the taste of the higher fruit. The surprise in itself would testify to the beauty of
	that moment, yes?
	<hr>&emsp;
	I remain here in the United States, burdened by obligations I created for my present self while a past self. Upon clearing the 
	obligations, say, no debts, no continual expenses, no burdensome social requirements, no child-rearing what is left to achieve?
	What value does legacy, children, and asset-generation even mean to me if all manifests as empty plateaus or unsweetening fruit?
	With so much achieved by society through governance and technology, it appears fair to return to a simpler mode of being unburdened
	by what is and what will be; this relative peace affords an adequate space for introspective escape. I keep telling myself that I would
	travel the world monthly and broaden my perspective on reality as it manifests in the present moment elsewhere. Right now, the sun is 
	shining when I am not witnessing it. Right now, people, incarcerated and free, are toiling, celebrating, suffering, and sleeping.
	Right now, there is wind blowing on Jupiter whose sound is unheard, turning a pebble through its flow whose form is unseen. Of course,
	I will not witness that, yet, there is phenomenal activity, always. There is no need to witness directly phenomena through my lens,
	though I sense that broadening my perspective may be useful to my understanding of reality. My humanity may grow tiresome of the 
	compulsion to witness places and people physically. I predict becoming burnt out from travel, and again turning inwardly.
	Dogen writes that there is no practice but the practice, and that its calling is the beckoning to return to one's true nature.
	I find parallels in zazen in many phenomena: the passage of time, sickness, happiness, work, money, pain, society, water, trees, wind
	etc. There is a stillness amid activity: a baseline to all phenomena from which they diverge. The divergence internally would 
	constitute my form, feelings, perceptions, predilections, and consciousness. In dropping them in practice, I can experience reality
	as it is, <b-title>unfettered</b-title>, in equanimous being, in solely being, and nothing more. Having tied in my questioning to my practice, I could 
	foresee taking a leap, once obligations are clear, to a, shall I say, committed absenteeism from external affairs for life. 
	I could consider it a goal, but it is no goal. At least, right now, I cannot foresee any long-term human endeavor for this skin-bag
	being meaningful while tied to external affairs.
	`
	,
	`
	| May 4th, 2025…
	| Pittsboro, NC
	| 0951 HRS
	| &emsp;
	So, I just wrapped up my first intermediate accounting course. I'm tired, but certainly feeling somewhat at ease knowing that it won't be
	looming over me anymore. Though I have been enjoying a week off from work, the pressure to get through the content had been routinely bothersome.
	In any case, here I am, and I'm grateful to have achieved more progress. I'll likely sleep in a moment. 
	<hr>&emsp;
	Throughout the week I have been studying Japanese intensively in preparation for my travel. I have been using Olly Richard's reader, 
	Tae Kim's guide, and of course, Clozemaster. I'm noticing that I can conjure up sentences more readily, and that my reading has quickened.
	I do think I may be somewhat burning out, though. I'm not accustomed to taking in so much input like this. I've coupled study with watching
	many videos about Japan travel, culture, language, future, and prospects. I must be wary of the <b-title>shiny veneer</b-title> the country tends to have through
	the eyes of foreigners like myself. First things first: I should just allow myself to experience it, simply. I mustn't conjure up (and definitely
	not attach to) too many ideas of another personal reinvention on that side of the planet. It may not be for me, but the appeal is surely there.
	<hr>&emsp;
	I'm going to write a letter today, just sit, and relax. That is all.
	`
	,
	`
	| May 7th, 2025…
	| Pittsboro, NC
	| 1800 HRS	
	| &emsp;
	Look at me, starting my off day at the same time I'd start an on day. Honestly I'm glad.
	I've been yearning for more time for personal attention badly over the last couple of days.
	<hr>&emsp;
	When I write, there are words whose <b-title>spelling</b-title> always manages to confuse me.
	These words are fairly frequently used, too. Though I have them written in my planner, I want to address them here
	as well with a little more detail. Also, I just happened to use among those words in the last sentence... and now this one.
	<hr>&emsp;
	Writing, but written; sense, tense, intense, but pence, presence, sentence, but license, incense; essence, essential, but finance, financial.
	It's mostly monosyllabic present progressive orthographic consonant doubling and ense/ance words that trip me up. 
	When writing, I routinely stop after the first T in "writing." I should think of the verb "to hope"
	to help ground me: "hop" is monosyllabic with a plosive final. "hope" is monosyllabic with a plosive final. The verb without an orthographic final E
	takes another orthographic plosive. "hop, hopping, hope hoping." So "writting" would've been the present progressive of the non-existent verb "to writ;" 
	there's only a noun, "writ" which is a fairly common word in my money-job.
	Concerning sense/presence, I notice that, typically, bi-syllabic words would contain a C post-nasal. This applies to my most commonly used words of the group:
	presence, essence, and sentence. Of course, there's license and insence, aren't in line with this sense.
	I'd like to consider finding out the reasonings further, later on.
	`
	,
	`
	| May 16th, 2025…
	| Pittsboro, NC
	| 2258 HRS
	| &emsp;
	I went to meet the group with which I would travel abroad. I had a decent time and definitely had a bit of a nostalgia trip
	seeing N64 Mario Party on the screen at the game store. Sigh. I would say I'm excited for what's ahead, but I'm mellow.
	Pretty mellow. I think I need more sleep; I really cut it short trying to make it at a decent time. 
	<hr>&emsp;
	Even now, I feel a bit burnt out despite not having had too many work related stressors. I suspect this may be the isolation
	taking a toll on me. I'm not sure. I think I should force myself to <b-title>sleep and live</b-title> during the day for a while, while I can. 
	Heck. I'm grateful to have this unexpected extra time afforded to me. I should go now.
	`
	,
	`
	| May 21st, 2025…
	| Pittsboro, NC
	| 2023 HRS
	| &emsp;
	My Japan trip class has begun and the online content to be finished before the trip is dense but relatively simple. 
	I've been powering through it while balancing my time with language studies and programming. Gladly during these many off days,
	my discipline had rearisen and I'm living as I should, making progress in ways meaningful to me. I really cannot understate just
	how important my diet is to my day-by-day wellbeing. Since fasting - it's been a day and a half - I've felt so much more alive
	and focused. It's been a long time since I had <b-title>a prolonged fast</b-title>, something I used to do regularly before my current role. I see
	why doing this was so important to me back then, and it stands to reason that I should do these on occassion as the need arises: 
	the need to do a hard reset on my body. I will hit two days, and may consider a third. I want to feel my best. It's almost as if 
	the more food that is consumed, the more food is desired. I am not hungry, and I am doing well. This couples well with my practice
	and I must acknowledge this again and again. Do what is meaningful, not what is expedient. To feel well is meaningful to me.
	<hr>&emsp;
	I had been working on plentiful updates to the site and I'm glad. The time for moving on to PHP/Laravel projects should be coming
	soonish. I would say, around the end of this year when hopefully Laracasts would go on sale for Christmastime. By then I should be
	basically proficient in the front-end side of things enough to make sense of the backend tie-ins, and the next college course should
	be completed.
	<hr>&emsp;
	Life is progressing okay-ly. I am going to work on financial projections at dashboard and lifecraft. Once my debts are cleared, it's
	all about generating wealth. That leads me to question my future for that point: should I drop my current role quickly to attain a
	better lifestyle, or should I maintain it so that I could more rapidly regenerate my finances? Surely with my current role, I could
	entertain the prospect of frequent travel more expediently, given leave flexibility. Then again, without it, I could have more time
	in general to establish routines and become more community-integrated. I would say that, yes, I should at least aspire to generating
	and holding six figures which should provide me the necessary security in life ahead. It would lead me to question then what I would
	do after attaining even that. I would question my whole retirement through current employer. One of the securities that's provided
	for medical issues. It's commonly known that, in the US, medical expenses can ruin lives because of the privitization of insurance.
	It's almost as if the medical benefit exists only to enable people to comfortably stay in the US long-term. If I were change my life
	by starting anew in a country with a socialized healthcare system, it would be a non-issue. Instead, it would just be a matter of 
	finding meager pay to sustain living, and maybe a little more. The idea of leaving after 2030 sounds exciting but worrying.
	The excitement comes from the idea of liberation and personal redemption. The worry comes from the uncertainty of a lifestyle to be
	lived outside of my norms: language, culture, industry, pressures, stresses etc. It also comes from the socioeconomic factors abroad.
	Are the socialized systems in other countries going to last given aging populations and system exploitation? I certainly see these
	concerns growing in Japan and places in Europe. In any case, I can only speculate and see what reality unfolds for me to witness.
	`
	,
	`
	| June 1st, 2025…
	| Pittsboro, NC
	| 0214 HRS
	| &emsp;
	It's June, and much like around this time last year, I'll begin by attempting a radical push for some changes.
	I consistently tell myself that I fall short on certain lifestyle goals. I've been giving myself too much "grace" it seems.
	I will execute this push for this month until my trip to Japan. I can deliver, of course. 
	<ol>This will constitute <b-title>Campaign 2025</b-title>:
	<li>The first order of business is to remove Youtube from my phone, again.</li>
	<li>The second order of business is to empty myself of the recurring urges to consume sweet things.</li>
	<li>The third order of business is to read before sleeping, and to place the phone with an active alarm at my desk.</li>
	<li>The forth order of business is to do pushups immediately after getting out of bed.</li>
	<li>The fifth order of business is to head to the gym after work if I do not hold over; this includes preparing a gym bag.</li>
	</ol>
	<hr>&emsp;
	Starting a new campaign would likely bring me a new sense of conviction and consistency. I am confident to be able to deliver, 
	especially that I am only requiring myself for just about three weeks.
	I've noticed that some days I would do well, and some days very badly, almost to the point of wasting them.
	I am incorporating responsibility through discipline again; <u>freedom without responsibility is chaos.</u>
	One could attribute the worsening social culture in the West due to such point.
	The most localized application of responsibility is to the individual over which I have control.
	I need to practice what I preach better, and to be rather than to seem.
	I acknowledge that, still, my time after work is largely lost to incessant browsing on the phone.
	It's not what I will for my life on the regular. I will take habitualized activities with me whereever I go, so I must put an 
	end to such things. I do not need this. I don't need to "kill time." I need to ground myself in the present moment with my time.
	Passive browsing as mentioned only serves as a dopamine farm. Paying little attention to videos doesn't lead to internalizing
	knowledge for the most part.
	<hr>&emsp;
	I am informed here and there that I am among the more responsible people they know, and yet, I fall short on my own expectations for myself.
	I don't particularly have people in my life that I look up to so much. Sure, there are some qualities I admire in others, but as an overall
	model I don't have such person. I've used former friends, bosses, figures in media, among others. The ideation of a former friend had inspired me 
	implictly through 2018-2020 to learn to type properly, to learn technical skills, and to aspire for a new career; a boss had inspired me to commit myself
	to my job, and to force myself through excess discomforts to achieve goals; a psychologist in media had inspired me to adopt more responsibility
	and self-care and to take ownership of my situtation no matter what; a coworker inspired me to push my physical limits; the one closest to me 
	inspired me to appreciate solace and stability, and to continue pursuing technical fields like math and programming. 
	Right now, in this present moment, I don't quite have a role model. I do feel that I would want one, especially a male one, to set me on a good course.
	Instead, I seem to be the person other people emulate. There are social qualities I appreciate in some, like having normative social know-how, 
	down-to-earth-ness, more out-going personalities, but I acknowledge that such things are incongruent with my being and how my character informs my 
	approach to navigating social contexts. Being very outgoing would be very burdensome to me in that it would be distracting and somewhat egoic. 
	I do not generally need validation, I say. I am fairly comfortable with myself and satisfied with the trust I have among the few people I likewise trust
	in my periphery. I am incentivized very little to over-extend myself. Though if I had a particular role model or people similar enough to me, I may feel 
	an aspiration to emulate and earn approval. Overall, I would be more satisfied on the regular were I to have people around who would push and discipline 
	me better. I have crossed that inadequacy complex hurdle of the past, and am simply flowing aimlessly but forward still. Yet, I would say I do not want
	another hurdle in inadequacy's likeness; rather, I just want a role model who I feel is in this struggle with me and progressing similarly.
	It sounds egoic to claim I'm not normal.
	<hr>&emsp;
	My hurdle right now is to pay off two things and to complete my final year, 2026, in my current job role.
	<ol>Projections from now till then:
	<li>Come December 2025, I will have one debt removed and will be about 47% CPA pre-requisites completed.</li>
	<li>Come December 2026, I will have my job role standards certificate, will have completed the basic and advanced accounting core certificates with 70%
	CPA pre-requisites completed, and will have paid my final private debt if only I save just over a grand per month; I could begin 
	travelling the world and pursue Colombian residency.</li>
	<li>Come 2027, I could start planning for monthly hiatuses abroad while pursuing FMAA Licensure and finishing CPA-prerequisites; I could 
	change my job to whatever lateral role.</li>
	<li>Come 2028, I could complete the CPA exam while continually travelling monthly.</li>
	</ol>
	全て大丈夫、全て順調である。
	
	`
	,
	`
	| June 5th, 2025…
	| Pittsboro, NC
	| 2219 HRS	
	| &emsp;
	I can envision the better self. It comes down to intentionality.
	Having re-read some part of Suzuki's main work, I am reminded of that subtle call to do what is right.
	Following up on that subtle call is part of practice. 
	I must accept that my role is a training ground for this, as is the rest of my life.
	Practice is everything, and to avoid that subtle call is not skillful, right action.
	<hr>&emsp;
	Now, envisioning this self, I will outline some qualities:
	<ol>
	<li>Being able to read daily</li>
	<li>Being able to fill downtime with intentional action or inaction</li>
	<li>Being able to wholly control what I consume</li>
	<li>Being able to be mindful always what my body is calling for</li>
	</ol>
	Just now, Youtube was about to autoplay onto a video about Ireland. It would have played passively in the background while
	I'm typing here, but would have I learned anything from it? Likely not. I would not have been intentional with my listening 
	there. This reminds me of a strategy to retaining information on Youtube videos: mini-essays. 
	Were I to learn about a topic, I could make better use of the listening my actually recording my thoughts in writing.
	I am thinking of incorporating this strategy into this blog and elsewhere on the site.
	I'll admit that I went tangential the other day on some world politics topics and may have made some half-baked points. 
	Were I to write on the relevant topics, I would have had more confidence in my delivery.
	<hr>&emsp;
	I am feeling a bit better now, having detoxxed a bit I'd say. I have been delivering on my June goals, but there has been some
	wavering on some points. For instance, there was an appreciation dinner and I attended, loading up on some foods. 
	I recall a day in my previous career where there was delicious catered food all around, and I resisted the temptation for the 
	whole day, knowing that it would not have been worth my while. I'll be forthright: I'm growing extremely tired of extenuating
	circumstances messing with my conviction. I'm tired of rationalization. It's tiresome. Screw it all. Just do what I must, silly.
	What am I really missing? Nothing. I am <b-title>missing nothing</b-title>. All would be better were I to just do as I know I should, damn it.
	In retrospect, my resistance reinforces my own character. Such is practice, no?
	<hr>&emsp;
	Lately I've felt on the down-low about my situation and the day-by-day being filled with just so much darkness and isolation and work.
	Obligation, responsibility, and ethics: all have been weighing on me. I have not been able to satisfy my own expectations of myself.
	Upon consideration, I ruminate over whether or not it's worth the effort. Some responsibilities of mine seem to have little value to
	me either intra-personally or financially. Some responsibilities I take on knowing that I may do a better job and that I'm relied upon,
	though intra-personally I feel little value as they pertain to my longer-term earthly goals. It may come down to complacency in a sense,
	and resting on laurels, so to speak. It's also a sense that what I earn isn't truly mine to keep. I'm not living the life I want right 
	now through my effort. Yes, the time is coming, but it I feel stuck in a mode of saving and conserving just to achieve baseline later on.
	It's coming. I mustn't overworry. I notice that falling into ruts happens so much more when I'm knocked out of my practice and 
	my health requirements in consumption and exercise. My wellbeing is closely tied to those things. I must accept this, and I must 
	follow the blueprint I adopted: to exhibit right action.
	It comes down to following that subtle call to action or inaction.
	`
	,

	`
	| June 22nd, 2025…
	| Pittsboro, NC
	| 0200 HRS
	| &emsp;
	I sit here an hour before routing to the airport.
	I have plenty upon which to reflect, and will garner so much more so very soon:
	<ul>
	<li>I have made a great new friend who shares a lived experience and future vision akin to my own.</li>
	<li>I have been staggering in some convictions but overall I've been successful.</li>
	<li>I shall still consider the option of relaxing an aforementioned work responsibility in my distance from it all.</li>
	<li>I made it to the date of this flight; upon arrival in Japan, I will have redeemed failed teenage aspiration of studying 
	abroad there.</li>
	</ul>
	There will be a lot of walking. I will allow my curiosity to guide me. To take any turn and to peruse any nook would serve to expand my world.
	I have reduced my hiking and walking that I had done during and before my early twenties, and the reason is working life and renewed focus.
	It has not been prioritized as it had been when living life with fewer responsibilities.
	I would say, it was a lovely experience to walk around my town, my campuses, and beyond. Even with my condition, I felt the impetus to explore.
	It was my motivator, and the seed of my wanderlust as a teen who sought for an experience just as the one I will have shortly.
	I liked the phrase "<b-title>Inner Cartography</b-title>." The world is just the world as it's always been, but to wander and witness with one's own senses the novel and 
	curious in places familiar and very unfamiliar - such is to chart life itself, as the only lens of experience for anyone is their own senses; one's own
	configuration of form, perception, feeling, volition, and consciousness. Every being charts a different map, some similar to others, and some dramatically 
	different. I would like to futher ponder my association with exploration and contentment, since, yes, I understand that contentment may
	be fostered without dramatic forays into new territory; in fact, that was an aspect that kept me relatively isolated in recent seasons of life.
	There's so much to explore, every day, in spaces vast and confined. I should remember this point. By no means should I internalize fear
	of more restrictive moments.
	<hr>&emsp;
	I will endeavor to enjoy the exciting and the peaceful, the ebb and flow of the present moment as it unfolds abroad.
	I feel privileged to do so in such proximity to sites that reinforce such right mindfulness and my practice at large.
	I will make meaning of my past, experience that present, and to discover new avenues for the future.
	この十日間には、過去の意味を見出し、現在を経験し、新たな将来の夢を発見するつもりだ。
	`
	,
	`
	| July 1st, 2025…
	| Nagoya, Japan
	| 0833 HRS	
	| &emsp;
	This has surely been an adventure.
	I am making this update on a Tokyo-bound Shinkansen. The countryside, with its towns, mountains,
	and rice padddies, are passing by at incredible speeds. Right now, I had a view of the Ise Bay.
	<hr>&emsp;
	One thing I surely appreciate is the complete detachment from my labor and nighttime mundanities.
	They are so distant that their significance in the present moment is negligible. Empty.
	On Mt. Wakakusayama「若草山」in Nara Prefecture, I spoke briefly with some natives on its peak. They told me where they are from: Kyoto, Ebisu, Fukuoka etc.
	Upon explaining where I and my buddy were, they neither knew of North Carolina nor Washington D.C. as a reference point.
	My life in North Carolina seemed like nothing but a burning memory where even the people around me know nothing of such place.
	In that observation I felt further relief.
	<hr>&emsp;
	Were I to ask myself, "Would I want to stay here?" I would likely say "no."
	This is a theme I would like to continuely explore at another time.
	The overarching theme of this trip was the poem of the day at the tea ceremony center:「山是山、水是水」
	It really is an expression of the supreme "it is what it is-ness" for "Mountain is Mountain;
	Water is Water." My buddy finds it silly af. I agree, on a superficial level it sure does seem that way.
	It's got a silly ring to it, but yes, it comes down to that ruthless acceptance of circumstances.
	The weather's been hot. I have been too. It's rough, but that's good.
	<b-title>Mountain is Mountain</b-title>; Water is Water. Heheh. Bye.
	`
	,
	`
	| July 3rd, 2025…
	| Pittsboro, NC
	| 2343 HRS	
	| &emsp;
	I returned from Japan. There is very much for me to process yet. 
	It's refreshing to know that during my nighttime life here, there is so much life being lived actively under the sun,
	in another world on the same planet. Though it's an obvious thing, having lived in that other world is profound.
	I am presently unpacking things both physical and mental, and the former is happening much more quickly. 
	<hr>&emsp;
	I spoke with the tour guide personally for a while as the rest of the group took different trains. 
	He felt comfortable enough to disclose some of his personal challenges as tour leader; I was empathetic.
	He like myself is a very inwardly-focused individual. He felt the need to apologize and seek avenues to improve, much 
	as I would in the course of my own working-life. We discussed life and societal differences. His perspective has been
	tempered by hardship and past mistakes, and is very reality-grounded, detached from the rose-colored glow of "Japan as a playground."
	There are real lives being lived. Real hardships. Real emotions. They underlie any society and its people.
	I referenced our experience at the tea ceremony again, and the simple profundity of Mountain is Mountain, <b-title>Water is Water</b-title>.
	We both understood that we should enjoy the stillness, more. I am happy to have made that superficially simple scroll's message the theme for my
	trip, and perhaps, the theme for others in my group.
	We proceeded to investigate the Kanji used in that wall scroll, and I provided him my recommended Japanese reference app, for 
	which he expressed gratitude. I'm hoping he'll make great use of it.
	I supposed the middle character was "goro" or「頃」from the Japanese though "shì" from the Chinese「是」would make more sense semantically and is consistent
	with its use historically in Zen sutras through Sino-Sanskrit as "ze", even though it had not the likeness in appearance.
	I just discovered here that it was in fact「是」, though written in what is called sousho or 「草書」, a highly-cursive form of calligraphy also
	called grass-style. I learned of two others, kaisho 「楷書」, the square style or block style, or standard style, and of reisho 「隷書」, the clerical script which
	is an ancient and highly angular style. <a href="https://drawingandpaintingstudio.com/brushing-mountains-and-waters-at-shodo-japanese-calligraphy">I found this information here</a>,
	and I will share it with him shortly. Surprisingly enough, it comes from the Shobogenzo "Mountains and Waters Sutra"「山水経」by Dogen himself.
	<hr>&emsp;
	He then shared with me his recommended spots for me to visit,
	including Takayama city 「高山市」, the Shikoku Henrou 「四国遍路」 pilgrimage, and the Nakasendo 「中山道」. He supposed that they would fit my vibe very well, having 
	gauged me throughout this trip. He suggested those places over my original plan to Hokkaido「北海道」, which he said is more like the US being 
	the open frontier of Japan; "it's not very Japanese," he said.
	He amicably called me an old man, and for once I took that solely as a compliment, and smiled.
	`
	,
	`
	| July 4th, 2025…
	| Pittsboro, NC
	| 0322 HRS
	| &emsp;
	So I'm still really obsessed with digesting findings on the Mountain is Mountain, Water is Water thing, and delved further into historical orthography.
	I'm surprised that the "wa" particle is omitted in 「山是山、水是水」, which would be "yama wa kore yama; mizu wa kore mizu." It seems that some particles 
	were implicit in older Japanese, and I am continuing to investigate this. Along the way, I've learned more of Kana itself:
	<a href="https://en.wikipedia.org/wiki/Man%27y%C5%8Dgana">Manyougana</a> is an ancient form of Kana used previously to Hiragana and Katakana. 
	Katakana developed directly from its sound-mapped characters, from either the first strokes or the last strokes of each character, 
	and Hiragana developed from the sousho versions of such characters. Such really reflects the rigidity of Katakana and the fluidity of Hiragana.
	The city of Nara「奈良」which I visited uses the direct mappings from Manyougana. 
	<hr>&emsp;
	Nara is a town where the deer have been revered for generations, and have learned to live alongside the human population and even 
	acclimated to the cultural norm of bowing. There, the deer would bow to humans, and may bow back if one bows first.
	There they sold shika-senbei, or deer cookies that the deer would clamour for. I bought my first stack of senbei and I essentially 
	got mugged by four deer before even walking a short distance to my seat. Heck!
	I would say, the experience in Japan has shown that properly getting accustomed required plenty of failure at first, from transactions 
	with natives to being served at a restaurant, from navigating the train lines to feeding the deer.
	I learned that I must pocket the senbei immediately, and only feed pieces of each cookie at any one time, concealing them shortly thereafter.
	<hr>&emsp;
	Upon hiking through the Nara temple grounds en route to the Kikuichi knife shop for a scheduled business visit, I encountered a kind deer among the bunch
	and isolated from the rest. I feed her a piece of sanbei, and she proceeded to follow me. I continued to feed her pieces, and she continued to follow, 
	more and more. I spoke to her and encouraged her to continue in Japanese, and she well complied. We walked together for a solid 20 minutes through
	multiple sites and up many hills! I gave her the nickname Shikaka 「鹿蚊」because she was a deer who'd stick close like a desirous mosquito, wanting another hit.
	Shikaka and I made it to the narrow street where the knife shop was, and decided to part ways with me. I thanked her for the memory; she alone deserved
	my sanbei, and though others were trying to butt in, they got the message that Shikaka was the only deer I'd provide for, and left.
	<hr>&emsp;
	Following our visit to the knife shop, I made the personal decision to hike the nearby mountain called Wakakusayama 「若草山」
	My buddy tagged with me, and endured the hike together. The summer sun was relentless, but we had a short respite through a 
	forested ascent from one level to the next.
	Many deer lived at all levels of the mountain, and once I reached its summit, I was graced by a gorgeous view of the valley.
	I took at seat underneath a tree overlooking it all, and there, a deer with a great rack of antlers approached me and 
	greeted me with copious bows. I bowed back, and reached into my pocket for whatever senbei crumbs I'd have to repay the kindness.
	This deer decided to receive payment his own way though. He shot his muzzle forward, and ripped my highlighter straight from my 
	pocket! He backed away and chewed on it rigorously, and I couldn't help but order him to stop! My orders were to no avail, but soon
	he understood that it surely was no senbei. He dropped it from his mouth, and I pet him, glad that he hadn't decided to swallow it. 
	I picked it up, and decided to call him Bakaka「馬鹿鹿」, or "dumb deer," literally "horse deer deer" lol. But, shortly thereafter, 
	I realized how special the moment really was. He chose that ordinary item of mine, and graced it with his teethmarks. 
	Given the reverred status of such deer in Nara, I consider my highlighter specially chosen by deer, and thus, in a sense, blessed. 
	I now call him Tashikaka 「確鹿」, or "trustworthy deer," because in retrospect I could have trusted his action given that he so politely greeted me. 
	He bestowed upon me this great memory, and enchanted my highlighter into a truly special souvenir.
	<hr>&emsp;
	I will never forget <b-title>Shikaka & Tashikaka</b-title>, or any friends made along the way.
	Surely there is more to digest, and that'll come in coming days and weeks. 
	Shikaka, too, has a lot to digest, but she's probably done with all of that.
	`
	,
	`
	| July 27th, 2025…
	| Pittsboro, NC
	| 2045 HRS
	| &emsp;
	Certainly feeling a bit relieved to know that the bulk of writing and reflection is done for the study abroad class. I spent most of this 
	off weekend exploring Raleigh, dabbling with new feelings, and getting a sense for a new life ahead. What's true is that I'm continuing 
	my pursuit of career change despite many of the comforts afforded to me in the present. I must ask myself, would I feel content in jumping ship
	immediately upon my ability to, or rather, to continue my current role such that I may explore the world while maintaining my schedule that well 
	accomodates my leave? I like to say in jest that I have "dangerous" amounts of leave, the utility of which would much better serve me in my current
	role than in the first role of my nascent career change. There would be the implicit expectation of proving myself yet again. Yes, I like to 
	believe that I have done that already and figuratively am resting on laurels, but this would be something entirely different. 
	I know that it's best that I remain doing what I'm doing at least until killing my newest obligation which would afford me very much peace of 
	mind; I always stress peace of mind as its own currency. I won't have that if I jump ship too early; my pondering over this, though a bit 
	recurring and seemingly excessive, serves to assist in reminding myself of a structured and responsible course of action. It's needed because
	the temptation to seek alternatives arises with a regular frequency due to stresses and lifestyle plans. Leaving now may be convenient and
	comfortable; convenience and comfort breeds weakness. These temptations that arise are but an instance of training; life is the training ground.
	I must train, and must train harder. I need to re-adopt this framework. As with any framework, there is structure. Structure requires discipline.
	I am working an 80HR week starting tomorrow. I must forge rituals. I must get up, and simply do, much like I have in those hotel rooms in a
	previous life. I must ritualize more. In doing so, I'll glean the freedom from chaos that it'll afford me. It'll be a satisfaction greater than
	that of my present flow. I can do, and will do. Silly. How I do anything would be how I do everything.
	I will restart my <b-title>previous tradition</b-title> of cold showers. I will establish a healthy flow this week and rekindle discipline. I have no class; no 
	external obligations. It's a great time to do so.
	<hr> &emsp;
	Grounding in the present moment, I am sitting here, typing. All is okay. I have little pressures; the only tasks I have are those that I create
	for myself. I am not tired, but I am not enthused. This is fine. There is no fire; only the subtle one that propells me to continue my "day-job"
	restarting for tomorrow. Perhaps I could read a book and have some tea. I have license to enjoy the silence. It's often small habit building over 
	which I guilt myself, such as reading books instead of browsing phone. I mustn't forget that the career change will aid in that end;
	after all, 8HR workdays would afford me so much more freedom to incorporate more with minimized barriers and hustle.
	My practice too would likely improve. Such are among the purposes of this endeavor, yes?
	<hr> &emsp;
	I have been talking with my roommate in Japan, now friend, about his plan to return for language school for a period of 3 months.
	His enthusiasm for the prospect seems boundless as evidenced through his talks with me and his written reflections.
	I am being highly considered for joining him in the trip, though I have my doubts. Principally, it's the time frame: he's choosing early-mid 2026.
	This entry speaks to the fact I must remain on-track with my plan, and this would only serve to disrupt it and swallow over half of my leave quotas.
	I do affirm that 2027 seems much, much more possible. For whatever reason, I haven't been firm on saying no about 2026. I believe this is due
	to my "keeping options open." I don't feel as if he would defer his enthusiastic planning for so farther into the future. 
	Regardless, that future will come, he should know. We're both young. In addition, I'm not too keen on the choice of location, that being Tokyo.
	Not only is this from a financial perspective, but from a cultural one. A better fit for me would be somewhere like Kawazaki, a recommendation by 
	my tour guide where there is more calmness and nature, and where there is fewer accomodation for foreigners. Nearly all of Japan is a train ride
	away anyway, in the event a Tokyo visit was a desire. Furthermore, I question my own motivations. I may already have the foundations for a secure
	and stable life here, and so the prospect of living abroad, particularly in a country such as Japan, may not be part of my long-term career or 
	living, but rather just a recurring travel destination for self-development. Were I to have a stronger tie an committment to the land, then maybe
	I would feel more compelled to pursue language school full-time. While it's true I still consider Antai-ji from time to time, I wonder if 
	current and developing attachments would disuade me from that pursuit. Even now, that avenue remains, and holds precendent over present attachments, 
	yet I couldn't be sure until such time comes. I feel that my friend and I may go separate ways as our motivations are quite different. 
	It's almost as if my involvment with Japan at this point is mostly through a spiritual motivator, whereas his is through potential careers, dating
	partners, and unabashed fun.
	<hr> &emsp;
	I am going to continue my work through 2026 until hitting my 6th year work anniversary and a little beyond. I should have most obligations purged by
	that time, and 2027 would become the most explorative year of my life. I would be 33 years old.
	On my lifecraft page, I will consider making time-frame bars for months to better display ongoing tasks that occur during them, such as semester
	progress visualized throughout the years. On my travel page, I could write on 2027 plans. Trips in the Americas could be arraged with 24.5HRS of leave
	for one week off. Trips beyond to Europe and Asia could use 61.25HRS of leave for 12 consecutive days off. 
	I could do something like, Americas, Americas, Europe/Asia, Americas, Americas, Europe/Asia, etc.
	I will lastly just say that I'm glad that I restructured my aspirations following the ruin of my previous car.

	`
	,
	`
	| August 5th, 2025…
	| Pittsboro, NC
	| 2303 HRS
	| &emsp;
	So I'm thinking of foreign residencies and todos on this site again. Been delving into the histories of the immigration issue in Japan
	and the demarkation lines of southern South American nations.
	<hr> &emsp;
	I'm finding myself <b-title>a bit disenchanted</b-title> with Japan at the moment. 
	I allow myself the liberty to accept this disenchantment as just another instance of learning myself.
	Though yes, I enjoyed my experience very much, I'm seeing little return on investment in my case for continuing to learn the language as a hobby.
	I may settle on N3 level and call it quits until I find future impetus to return for a more career-focused purpose in the country.
	Japan is unlikely to become a place of future residency as a global citizen amid the growing but sensible anti-foreigner sentiment in the 
	national politics which I can respect. Attaining some job over there would require such a hefty, hefty investment of valuable attention 
	just to attain a similar quality of life I enjoy here, right now, in the present moment.
	<hr> &emsp;
	Earlier today I was heckled and called some slur. I find it funny that the individual prefaced their solicitation with: "I'm not asking
	for money." She then explained that she wants food for her not-currently-present 13-year old daughter. I happened to be near a fairly 
	expensive food hall. "You'll have to ask someone else, ma'am," was my response. I'm grateful to have not wasted my time or resources
	on a hateful individual, given her quip. Funny how she claimed "not-asking for money" while desiring food items, which cost money. Money
	is the representation of my labor in hours, and food would bear the value of my labor following purchase. 
	She should go forth and labor.
	`
	,
		`
	| August 9th, 2025…
	| Myrtle Beach, SC
	| 0853 HRS
	| &emsp;
	Today marks five years of having been in the Carolinas as a resident.
	I once again returned to the Grand Strand, a spot I'd visit randomly since 2020, and this time meeting with some family; it's also my first time here on-season.
	It's definitely a bit busier, warmer, and active with businesses open later than I remember. At least I will have liberty
	to relax a bit more, if I could. I gladly don't have classes running at the moment, but I am fuzzy in the head from melatonin used
	such that I may adjust to the sun. Meh, I suppose I also had a bit too much at the breakfast joint.
	<hr> &emsp;
	I'm glad that I no longer highly value minor dining experiences so much, especially on my own. Oh, what a time and money sink it
	all collectively was in the past. I'll enjoy a single, modestly portioned plate tomorrow morning instead of what I did today.
	This reminds me of something I told myself that I occassionally forget: There is no need to get "my money's worth" by overloading
	on food items, as there is value in reaching satiety or near-satiety in the sense of wellbeing following the fact. 
	Expense on food is to be had regardless. It's a "bill" that could never vanish anyway.
	<hr> &emsp;
	Tomorrow will mark my fifth year anniversary in public service and I formally vest. I'm truly grateful to have made it this far
	and to be officially vested. Though I have plenty to learn ahead for both my current role and for my future role, my tact and 
	composure is improving. I've been enthusiastic and proactive with bodies of knowledge to which I was previously adverse.
	I have even been feeling more comfortable with the idea of promotion in the same job class. I won't let this feeling cause
	any impulsive mistake however; I am aware and should remain aware of the positives of my current environment. Again, this idea
	may just be a fleeting one; just another little cloud in the sky. In the present moment from my 10th floor condo on the Grand Strand,
	the sky is stricken with hazy, grey bands of thin clouds through which a glimpse of blue is sparsely visible amid their concealment, casted
	forth from the Atlantic shore to the horizon. A look to the sky in the other direction is a quintessential "mostly sunny" where blue dominates
	overhead. The waves are a greenish blue-grey in tone; their tide is moderate. There is a pier a short walk from my tower undergoing
	construction. A tank empties a continuous, arching stream of water; <b-title>a red crane</b-title> stands tall.
	In the direction from this seat to that red crane, Nassau, Bahamas would lie far beyond the horizon.
	`
	,
	`
	| August 10th, 2025…
	| Myrtle Beach, SC
	| 0858 HRS
	| &emsp;
	So today I am <b-title>vested</b-title> and bear more leverage in my career. My feet are not only in the door but also settled inside the space.
	I hit my five years. During my time here in 2020, when I was newly trained, I wouldn't've thought that I would endure this
	role for as long as I had. Yet, I did. I am grateful. It's a strange feeling, knowing that I came here near the beginning of 
	this journey, and made it to this point, and it has in fact been five entire years. All that had occurred within these five years
	was profound.
	<hr> &emsp;
	The rain has just begun and the beachgoers are clearing out; the tide intensifies. 
	I'll be checking out shortly. I anticipate getting wet just a little. 
	`
	,
	`
	| August 24th, 2025…
	| Raleigh, NC
	| 1907 HRS
	| &emsp;
	For whatever reason, possibly from my disillusionment with travel right now, I've been immersing in my Minecraft world again, and 
	frankly its been to my detriment. My time in game is just floating around and assessing landscape damage and thinking of fixes 
	rather than actually building anything or playing anything. Over this weekend, I taught myself the Amulet & Worldedit mods, and revisted 
	world painter. Yes, it seems that I can do a lot now that I couldn't've done even in 2017ish, like even use all of these on Mac.
	Regardless, I may have learned the tools and I've run into fewer errors in the past, the experience is still dead and I find myself
	overwhelmed because there is simply too much for me to manage. I'm tired already of being overwhelmed. I want to quit again, just as 
	I angrilly quit No Man's Sky. I'm tired of it all and want to get back to reality already. No more <b-title>chunk manipulation</b-title> for a while.
	`
	,

	`
	| September 21st, 2025…
	| Raleigh, NC
	| 0357 HRS
	| &emsp;
	Time is going by very quickly. Work duties have seemed to increase in demand. School duties too have seemed to increase 
	in demand. For the first time in a while I recall coming home and immediately crashing. Currently, Black Mirror is playing
	on the television here, and I'm seeing this episode's protagonist flip through his calendar on which he marked increasingly
	more days with overtime as the months passed. A few months in, and every day filled with overtime. He then starting 
	streaming absurd self-injurious behavior for more money. More money all for sustaining the life of the person he loves 
	just a little longer; a person whose life depended on a company's subscription plan. Huff.
	The dedication and committment by the protagonist was nothing short of admirable, but alas it ended in tragedy.
	Debt with no maturity is just contemptable. 
	<hr> &emsp;
	I went to the local symphony hall and listened to Dvorak's New World Symphony in concert, and the second movement had 
	me in tears, especially during the passages featuring the English Horn lead. Oof. 
	<hr> &emsp;
	My dilemma in the present moment is whether or not I will <b-title>pick up</b-title> a shift tomorrow. I don't know. I do need my time to get ahead on other things.
	Eh. I cannot get myself to commit, oddly. Perhaps I should head back to my normal space to focus or something.
	I must know that nowadays isn't like years ago; I have much more on which to spend my time, obligations and not.
	I need to push this already and get to the store. I grow tired of this couch sitting.
	<hr>
	`
	,
	`
	| October 1st, 2025…
	| Pittsboro, NC
	| 0325 HRS
	| &emsp;
	The working hours have been coming along easily. My free time has been passing by quickly as I've been highly
	engaged with my coursework which has taken quite a difficult turn. Yesterday, I had put in 12 HRS on a single
	assignment. There were just so many intermediate calculations.
	<hr> &emsp;
	I'm farther along than I give myself credit for. I've bridged my interest in accounting to investing, and rebooted
	my additional investment accounts for the third time. A recent chapter stressed the time value of money, and really
	catalyzed my return to the practice. It's essentially planting seeds and letting them grow, and it's a test of 
	patience and discipline. For a moment, I was a bit overwhelmed with all the options, but then I remember: it's 
	the excess options that oppress rather than free. I am going to stick with my choice and that's that. 
	I will have an inkling of faith for the nation to prevail for its sake and for my <b-title>investments</b-title>.
	`
	,
	`
	| October 31st, 2025…
	| Pittsboro, NC
	| 1717 HRS
	| &emsp;
	This October had been the best month for advancing my accounting skillset. Not only had I spent the majority of my off time working relentlessly
	on completing my coursework, I've been seeking practice beyond what my class provides and lately had my first interview for an accounting related
	position. Though I'm hopeful for a positive outcome, I mustn't allow myself to grow dejected over a possible rejection, if that would end up being
	the case. I was reassured by the hiring manager that I was a top candidate and that it's all just a waiting game now. Perhaps I'll be able to 
	close out this year in my current role so that I may preserve my income.
	<hr> &emsp;
	I have my sights set on this career move more so than ever before. As my confident builds, it all seems closer. That being said, yesterday I went
	ahead and reviewed my current coursework pathway. Seven (7) of the elective credits can be of any combination of courses to qualify to sit for 
	the CPA exam. Now that I have nearer sights set on trying out for the FMAA exam en route to the CPA, my perceived value of knocking out some 
	prescribed community college diploma/associate's has quite lessened. The fact remains that I will need an accounting related role to even be 
	granted the licensure upon completing the CPA exam. Say, if I don't get the position I interviewed for, I will still try to remain as persistent
	as I have been this month to find my opportunity. It stands that I do need more leverage in order to have a fair shot at plenty available lower-level
	roles, either an associate's or "<b-title>equivalent education</b-title> and/or experience." To achieve that end without a poor investment in mandated & undesired courses 
	such as "Intro to Computers," I could obtain an FMAA certification through the Institute of Management Accountants. I'd say, all I'd want for my 
	birthday is an FMAA study package, and I'm seriously eyeing one right now. Huff.
	<hr> &emsp;
	Aside from all this career rambling, I have been feeling unwell physically lately and felt it necessary to stay home and recover, as was also
	evident to medical staff upon seeing me. This is an odd medication but it has relieved my aching, fever, and exhaustion. It also turns out 
	that it acts as a contra-melatonin, like what the heck. Well, I'll accept for now, but I do sincerely want some more quality sleep again this 
	weekend and take a break from obsessing about accounting.
	`
	,
		`
	| November 20th, 2025…
	| Weatherly, PA
	| 0428 HRS
	| &emsp;
	The lamp beside me emits a light at such an angle that I feel distressed. I will turn it off, and power on the portable mushroom-lamp.
	Portabella lamp. Heh. Well now, as I lie here, I'm pent up with unsorted thoughts and felt the call to write something here.
	I'll expound on paper later. I'll start by listing some things of import lately:
	<ul>
	<li>I have been excessively focused on both accounting studies and programming.</li>
	<li>Those activities have taken over my life to such a degree that 
	I chose them over much else and become anxious when occupied elsewhere.</li>
	<li>I accept that this season of life is dedicated to progress in those domains.</li>
	<li>I do not desire to continue this lifestyle indefinitely.</li>
	<li>I am not in the best health lately, having been very sedentary, mostly <b-title>screen-facing</b-title>, and prone to illness.</li>
	<li>I have been lax in my practices such as journaling, reflection, and reading.</li>
	<li>I have been struggling to achieve peace of mind and mental wellbeing, often compromising my quality and duration of sleep.</li>
	<li>I have been unsettled by familial events that unfolded lately.</li>
	<li>I have become dejected at the idea of continuing my current job assignment for another year.</li>
	<li>I now regularly apply to alternative positions that will provide experience for my new career.</li>
	<li>My age again upticked and I feel somewhat stirred with urgency to escape this unrelated job.</li>
	<li>I am engrossed by shame when pondering my use of leave for personal and familial illness in spite of its legitimacy.</li>
	<li>I completed 4 of 5 tests for the last 4-credit accounting course; I'm on track.</li>
	<li>The course has been highly demanding of my time, moreso than ever before.
	In fact, I believe I have never invested this much time into a course.</li>
	<li>Due to the demand, I am pressured and naturally that presents an impediment to peace of mind.</li>
	<li>I have been leveraging programming to augment my accounting studies, but often I'd digress and pursue
	novel ideas and projects in technology.</li>
	<li>I had configured web hosting and VPS services and can now develop multiple sites concurrently.</li>
	<li>I have a long drive ahead of me, and I must return to work on Friday.</li>
	<li>I must develop a sort of plan to breathe some more structure and routine into my life, because the
	excessive screen-facing, despite the benefits in learning, are to the detriment of other life facets.</li>
	<li>I should also make a plan for 2026.</li>
	<li>I have been spending time with some good company, but can't help but feel detached and contently blasé.
	Any emotive expression is inhibited now more than ever.</li>
	<li>Old friends and cherished companions are still long gone.</li>
	<li>It seems this lifestyle is causing increasingly avoidant and awkward tendencies.</li>
	</ul>
	&emsp;
	I believe that my peace is disrupted recently primarily due to the coursework and secondarily due to workplace
	dissatisfaction. I just imagined for a brief moment no longer having the obligation to complete coursework and
	I felt quite at ease doing so. I'm almost there; relax. In the present, all is quiet, all is safe. I am secure.
	<hr>&emsp;
	Though I mentioned wanting to create potential 2026 plans, I need to afford myself some respite and time away from 
	this computer. I have gotten very ahead again with my coursework and I have programmed plenty. I can afford to focus 
	my energy elsewhere for over a week ahead; perhaps I could muster a renewed enthusiasm for my current role and discard
	the frustrations for a time. Well, 2026 ideas for next time, and perhaps then I'll recap some experiences in Raleigh.
	Cheers,
	`
	,
	`
	| November 25th, 2025…
	| Marshall, NC
	| 0405 HRS
	| &emsp;
	It seems heading back to work had relieved some of the uneasiness of my situation, even though
	workplace concerns remain. I am pressured to care less, it seems. I keep attempting to rationalize
	my additional efforts but it seems for naught and as a result I am driving myself crazy.
	I should only continue my efforts in so far as they are of service to covering myself
	and generating superficial values. This is not a major departure from my typical workflow, but
	rather a minor adjustment; I just need to worry less, and of course, to  allow the self-arisen
	guilt in entitlement usage to fade away.
	<hr> &emsp;
	I'm here in WNC for the first time in over 2 years. It was quite the nostalgia trip to return,
	driving on the once commonly driven I-240, Future I-26, and US-25. I'm near the towns of Marshall
	and Hot Springs, areas in Madison County deep within Appalachia where my former coworkers taught
	me to fish. Sadly my career as an angler only yielded the sole catch of a rock, I remember the time
	very fondly. I do sort of miss the work environment and my coworkers, but I'm fairly comfortable in 
	not living here again. The triangle is more my speed. 
	<hr> &emsp;
	Curently I'm at a large house on an isolated mountain. The stillness is gratifying to the senses. 
	I laid out on a blanket and looked up to the clear night sky, much as I have on July 9th, 2022 at
	UNC Asheville's campus. The stars were brilliant, and I could only make out the Orien's Belt constellation.
	Alas, I could not spot Triangulum. I wandered around with my flashlight in the dead of night, exploring.
	Despite the theme of this spot being the mountain laurel, I spotted <b-title>no mountain laurel</b-title>.
	So, some things were not spotted, but that's all quite okay. I'm comfortable here now. All is well.
	All is secure, and I endeavor to make sure of it.
	`
	,
	`
	| November 29th, 2025…
	| Pittsboro, NC
	| 2107 HRS
	| &emsp;
	Well, I'm nearly finished with my course now. It seems I'm healthily on track for the A. Good. Even though that's the case,
	I can't shake my addiction to programming right now. I've had an excellent pace in learning PHP full-stack and already have something
	that functions decently from end-to-end for once. I had to do some very hard digging around to configure and maintain the homebrew-spawned
	mysql database. For instance, I had to offload the files from a pre-configured deamon file-generator to a custom folder and had to deeply 
	seek for hidden sql files that botched my paths. After that, I ran into an troublesome issue in using the $_GET superglobal with a mysql
	query handler, and it turns out I was only missing the value in that small string passed as part of a parameter - if only I knew that the
	superglobal was actually reading that substring, I likely wouldn't have spent a couple hours debugging it. Heck. I will say, also, that
	this programming addiction has got me binging relevant content during any drives, and I've developed this mild fear of compromising time
	for much else besides my accounting coursework. Though it's true I'm not particularly looking for any job in software development, the idea
	is becoming tantalizing again, though I must know that such a prospect is really silly in this day-and-age given the rise of 
	large-language-models and agentic, generative AI. Were I to incorporate software development into my career, well, I would believe I would
	have the most leverage applying skills to the tech stacks used at my employer at large, which seem to be Z/Os CICS Mainframe, Java Servlet
	MVC, ASP.net, and some PHP Frameworks. It does from time-to-time feel a bit empty knowing that my focus on PHP Frameworks isn't best tailored
	to career tragectory, but then again this is a hobby, no? There are many possible things to do with these skills, and they will long hold some
	relevance in industry despite the robots. More importantly on a personal front, these skills are helpful in writing my life story. I mustn't
	fret. I'm just happy I can prove to myself the ability to do things I never thought I could do early in life. It's refreshing.
	<hr>&emsp;
	Though I say that, am I particularly refreshed right now? Well, the off time from work grants that sensation, but I have been on a prolonged 
	fast again and I have indeed stayed awake for... let's see, about <b-title>44 hours</b-title> now. I'm really making the most of this time but damn 
	do I feel roasty inside. Before taking a brief break out in the elements (it's freezing), I stalled on my attempt at fixing up my accounting page's 
	t-account prompter. I'm not quite dynamically generating the pieces in the proper fashion so that I could make use of it as a study tool yet.
	The page is over-bloating with functions and variables and is near spaghetti. I have too many appended table/tr/th/td generators with just so
	many interpolations of i. I took the liberty to crack out one of my older Rhodia writing pads that I dedicated to computer science over 5 years
	ago with the idea that I should paper-draft the class & function connections and UI/UX prior to doing an overhaul. I also need to make space 
	for creating a decent library of standard formulas and journal entries such that I can better visualize and reinforce expected patterns in
	their respective contexts. On that train of thought, it would be useful to create a side bar of traversable coding concerns, such that I do 
	not lose sight of strategies specific to my workflow and tech stack that have proven useful throughout my work.
	<hr>&emsp;
	I'm going to push this update and get to work on the accounting refactor. I should also pursue ridding myself of using html tables which
	seem to show their age in their antagonistic styling and UX-damaging qualities. Well, right before then, I suppose I'll quickly shoot off
	some messages; I've still been a bit isolated. Actually, I've been very isolated. In summary, I'm glad to have been working hard and have
	likely burned off the copious Thanksgiving bean pie I had the pleasure of experiencing lately. Cheers,
	`
	,
	`
	| December 31st, 2025…
	| Pittsboro, NC
	| 2242 HRS
	| &emsp;
	The year is about to end, and I'll be heading to Raleigh again.
	It's been replete with progress, through shaky concerning balance.
	The seasons of life during the year were varied and wholly consuming of my focus.
	<b-title>I'll aspire</b-title> to better balance in the year ahead.
	Cheers,
	`
	,

	`
	| January 20th, 2026…
	| Pittsboro, NC
	| 2356 HRS
	| &emsp;
	Happy 2026. So, it took hitting a relative low point to conjure up the figurative fire beneath me and drive me
	to action in ridding vices and establishing better balance and habits. The 18th of this month marks that important
	day when I felt a certain anger I hadn't in years. Much as I've said times before, there's a very positive angle to
	fucking up, and that is, if you perceive it as the push needed to correct course. 
	My <b-title>resolve is taking flight again</b-title>.
	I wonder if I will follow through this time. Heh. Conviction isn't eternal. It's wavering, multi-seasonal at best.
	<hr>
	That aside, I am pretty successful in many of my endeavors lately, from classwork to programming, from music composition
	to writing, and I'm restarting my increased physical activity and cold endurance as well. Overall, I'm excited to
	be correcting course, bit by bit. My head feels so much clearer.
	<hr>
	I closed out 2025 with applications to new jobs, fair health, Intermediate Accounting II finished with an A, 
	new friends and close company, having written bash scripts to facilitate remote server usage, hosted two sites
	on remote server, blah blah blah. Frankly, post-Japan 2025, the year was replete with obsessive programming
	and coursework. Still, I'm grateful and want to get better. This month is hallmarked by my return to music,
	though using a meager but competent app called "Beepbox." I actually used one of the many modded versions of it
	called Jummbox. Eh, it's gone out of fashion during 2024 since UltraBox and others had released, but I'll at least
	have this one tune on the books for Jummbox.
	<hr>
	A new-year resolution, I suppose, would be to finally quit biting my damned nails.
	`
	,

	`
	| February 12th, 2026…
	| Pittsboro, NC
	| 0952 HRS
	| &emsp;
	<br>
	&emsp;I'm killing this hobby. Today. I've now surfaced a deep resentment for it.
	I may stop by to blog here and there, but that's about all.
	I'll use my learning platforms separately.
	I don't need to care about this nonsense, anymore. 
	I need to learn how to live again. I failed to be anyone deserving.
	<hr class="hr-cmbr-gradient">
	&emsp; It's funny, because throughout most of my life I struggled to focus on learning and creating.
	It was never anything enduring, and for the last couple years it seems I've been more able to do so.
	But for what. For what? Just to reclaim my sunshine? What use is it if all I'll do is absolutely nothing
	but type on this stupid ass keyboard I didn't nead, burning my eyes out "having fun" doing trivial, 
	meaningless bullshit whose related skills are increasingly made irrelevant by AI as the weeks go by.
	I am so happy I'm done with all of this. I used to love doing things that would've made my partner happy.
	But I failed. Instead, I'd succumb to an addiction that'd parallel the one for video games in my teen years.
	I had completely gone full circle. I stopped journalling, working out, meditating, reading, and enjoying the
	present moment. I stopped it all, and left nothing but a shitty impression for someone who has given me more than
	I'd deserve. Were I not over involved with this bullshit coding and server nonsense, I could have done so much
	more... so much more. I'm sorry, and I failed. I failed myself, and Luna, and Jake. 
	<hr class="hr-cmbr-gradient">
	&emsp; I hadn't felt I was so easy to abandon, but a trend emerges that such is the case.
	Though I wholly take responsibility for failing you both, I do recognize the negative 
	effect this job has had on my ability to be present for you. My circumstance always had 
	a way of pushing my priorities away from others. Of course, this job has direct relation
	to my unfortunate history of heading to college without money: I need public service loan forgiveness.
	I kept telling myself "I'm not ready, I'm not ready." Come to find out, I was absolutely correct.
	I wasn't in 2020 for one. I wasn't in 2025 for two. Though, I'm glad I could have at least made them
	genuinely happy for a chapter in this life. You are missed. This hurts, very much.
	<hr class="hr-cmbr-gradient">
	&emsp; I hope either to never be in a relationship ever again, or to be in a position to be able to give one the attention and care it deserves. 
	I can't say I wasn't cautious. I was: I've been guarded all year last year. I've long believed that love is a <u>strong</u> word not to toy around with.
	I've also long believed that relationships are very serious business. Though cautious, I just wasn't cautious enough. 
	Midyear 2025, I was too optimistic, and I was too hopeful. I thought I could do it all, and I thought I could do it all well.
	I thought I could be a good student, a good hobbyist, a good friend, a good employee, and a good partner:
	To balance all facets of life. I was wrong. I was not ready to a pitiful extent. I was so confused at how I warranted the love and care of such a wonderfully
	admirable person whose qualities I aspire to emulate. I was so unsure and took the plunge, knowing it would not the best for this time in my life.
	I recall saying on the grounds of the NC Museum of Art that, <span class="marker">"I wished you found me just a year or two later,
	because then life would've just made more sense." </span> I am not decoupling my responsibility by saying this, 
	I do believe I'd've been in a much better place to provide a better self for another.
	As the months went on, the last however many months had been among the most imbalanced of my life; I had been so consumed with the idea of redeeming
	my lost youth and college years. I committed to my hustle to reclaim my potential and my sunshine.
	I committed for the sake of a better future at the detriment of your better present. During my husting and your push for a big move,
	the outwardly mutual loving support was so reassuring that I didn't even realize how much I was fucking up until it was too late.
	<hr class="hr-cmbr-gradient">
	I'll agree, that some things weren't the most compatible with me either.
	The dynamic was unfamiliar to me.
	I do believe I fell short on a few other things I could and will improve. 
	I had way too many inhibitions in your presence.
	I was self-conscious of my present-state, knowingly feeling unready, regularly.
	I wouldn't articulate affection well. Not in this state.
	I felt too reserved and too much of a "work in progress."
	<hr class="hr-cmbr-gradient">
	&emsp; Thank you for everything. I'll miss our chapter in this story of life.
	Though that's the case, I refuse to give myself grace: I <u>will</u> hold myself accountable.
	For my temperament, emotional damage is such a delicious catalyst for action.
	<hr class="hr-cmbr-dark-gradient">
	Comfort is the thief of my joy. The long suppressed <b-title>tyrant of the self</b-title> had some damn good sense.
	To paraphrase a yesterdecade icon, "Emotional damage? Good."
	That's right. It's fucking good. I've made it good before;<span class="cmbr-furious"> damn straight I'm gonna make it good again.</span>
	`
	,

	`
	| February 13th, 2026…
	| Pittsboro, NC
	| 1634 HRS
	| &emsp;
	It's that superstitious <b-title>Friday the 13th</b-title>. Hasn't ever meant much to me, but it's neat how days with some meaning are coinciding: Half-year anniversary
	on the 10th, A personal holiday on the 10th, a loss of a relationship on the 11th, and dropping this hobby on the 12th. Then of course, Valentine's Day.
	I've never been one to attribute much to that one, but heck, it did burn for a while knowing that I was ousted right before then. But it was deserved. 
	I wasn't ready. My hope is that I would not allow dejection to take over me as I recover my better lifestyle. The possibility for saying "if only I were
	living like this" more, seems likely. But no worries. All is well, all is secure. I do wish I could better pay back, though. There is so much that was
	undeserved, regardless.
	`
	,
	`
	| February 13th, 2026…
	| Hillsborough, NC
	| 2331 HRS
	| &emsp;
	So, here I am again with another control booth entry. The night before the breakup was the first one, so it comes with a little pain to pull this up again. Still, though, I need to continue working through these thoughts such that I may move forward more peacefully. It will always hold that I wasn't ready. I wasn't ready. I was far from it. I wasn't supposed to be the Momo to a Kippi, so to speak, but that's what I was, almost entirely. It was a very unfamiliar dynamic to me, and my current life situation poised me as too much a child rather than an independent man. Furthermore, I certainly can say that pursuing someone was not at all a priority; my attention and care and desire absolutely reflected that. I was consistently self-conscious and gave myself too much grace, becoming complacent as my coding hobby and schoolwork took over my life and overshadowed my desire to seek balance.
	I was just not ready. I did not deserve what I had received. It was all too much. I can't believe I was seen so highly for a time, only for me to reciprocate so little. So damn little. I really could've made something beautiful of it, if only I were ready. Well, my readiness is on the horizon. I have the capability. I have the power, the resilience, and the courage. I will not let my next one down, if there would be a next one. There are a few notes of advice I can glean from reddit boards. I will list them here: 
	<ul>
		<li>When you miss someone asking you how your day was: text a friend to ask how their day was</li>
		<li>When you miss having someone to celebrate achievements with: be extra involved in celebrating your friends' and family's achievements. Set a reminder to text a friend on their birthday, send your mom flowers for her new job, etc.</li>
		<li>When you don't even want to move from the couch: go for a walk</li>
		<li>When you miss physical contact: do some yoga or lift some weights (it'll release similar brain chemicals)</li>
		<li>When you see something that makes you think "She would love that": mentally add, "and so would Friend - let me text Friend about it"</li>
</ul>
<hr class="hr-cmbr-gradient">&emsp;
Such an irritating point about all of this is that aspects I've learned of my former person are rendered irrelevant since my remarks are likely unwelcome. What about asking about goals, the family, and how trips are going, now? It's all been soured. It's all behind me. I'm not included in anything, anymore, and yes, I deserve it. I wasn't ready. So what use is sharing anything about me, now, hmm? About my dumbass life, my struggle to ascend to a situation that others share that I do not, hm? 
Let's be fair to myself, though: I struggled at times to feel <b-title>the spark of compatibility</b-title>. I was hesitant, so very much. I knew of the potential damage to arise, that which I am experiencing now, and proceeded anyway. I struggled to emote and to feel that spark when I would have needed it. I just wasn't ready, okay? I didn't understand how I could've been picked up so fast, anyway. I was perhaps a choice of desperation. Perhaps I should have deleted that profile of mine and spared myself the potential contact. I would have been much safer. My peace of mind is paramount, and I was not protective of it. I traded future peace of mind for a false sense of commitment and being loved. I wasn't certain. I was just not ready. I don't need another chance, just as I don't need another prospect who bears the same name. Well, that last point was just venting. Huff. I was just not ready. Just as I haven't been hungry all day. This'll probably bite me in the ass soon, so I'm going to have a bite soon, yeah? Yeah. 
<hr class="hr-cmbr-gradient">
So, describe the kind of person that you should be when it's time to date again:
<hr class="hr-push-down">
<ol> 
	<li>Ensure You are Ready (Pre-Commitment) *[Unburdened by What Has Been]*</li>
	<br>
		<ul>
			<li>You need to be desirous to share your life with someone</li>
			<li>You need to be unburdened enough to prioritize them</li>
			<li>You need to be unburdened enough to invest in them plentifully</li>
			<li>You need to acknowledge that, going forward, life wouldn't be about only you anymore; it'll be about you and them, together.</li>
		</ul>
		<hr class="hr-push-down">

	<li>Prove Yourself Desirable (Pre-Commitment & Ongoing) *[What Will Be]*</li>
<hr class="hr-push-down">

		<ul>
			<li>You need to make yourself desirable in character</li>
			<li>You need to make yourself desirable through habits</li>
			<li>You need to make yourself desirable through stability</li>
			<li>You need to make yourself desirable physically</li>
			<li>You need to make yourself desirable through adventure</li>
		</ul>
	<hr class="hr-push-down">

	<li>Affirm They are Desirable (Post-Commitment & Ongoing) *[What Will Be]*</li>
<hr class="hr-push-down">

		<ul>
			<li>You need to make them feel wanted</li>
			<li>You need to be undistracted by activities enough</li>
			<li>You should never consider them a distraction but rather a worthy focus</li>
			<li>You need to incorporate their life into yours through your actions</li>
			<li>You need to give them signals of appreciation and affection clearly</li>
			<li>You need to notice the little things, and subtly convey your appreciation for them</li>
		</ul>
</ol>
<br>
<hr class="hr-cmbr-gradient">

&emsp; I do believe that I could expound upon these points. There's still plenty to think about, but this should be a fairly decent framework for gauging whether I'm ready and whether I'm on point or entirely fucking up. Each one could be assessed on a regular basis throughout a relationship. It's extremely evident to me right here that I failed on very many points, few from each category.
If there's anything I should internalize from my dormant practice, it's that "not feeling" like doing something positive is exactly why I should do such thing.
	`,

	`
	| 02/15/2026
	| Hillsborough, NC
	| 2310 HRS
	| &emsp;
I decided that I will simply write my remote blog posts in an email such that they would better conform to my site's format. 
There's no need for me to be using markdown format. Most of my pernicious coding habit during the last few months only served to overcomplicate otherwise simple processes.
These include using different means to store my blog data, creating means to display and play Anki data when the resources exist for me to do it easily from any location through Anki web, 
creating a desktop app with typical utility links that are otherwise available at my Vivaldi splash page, easily accessible, 
utilizing Obsidian markdown app when in truth I have no need to do my work through markdown formats, and I could create canvases in other ways, 
perhaps through JSON canvas. I am no longer enthusiastic for much of the little things. I just want a clean, workable site for personal use at this point. 
I want it to aid me, much as my dashboard does. 
<hr class="hr-cmbr-gradient">&emsp;
I will tie in the concept of <b-title>strict-liability</b-title>: the one who caused certain damages is to be held accountable regardless of his intent. 
I consider myself strictly-liable for my mistakes in the past with Azerai, Luna, and Jake. I am taking action. This is gonna be good, I swear.
I feel my resolve, a more wholly encompassing resolve, is taking flight again. 
	`
	,

];

