#! /bin/bash
# % ===== DISPLAY DIVISION ===== % #

timerunner () {
	rt=$(tput sgr0); r=$(tput setaf 1); g=$(tput setaf 2); y=$(tput setaf 3); c=$(tput setaf 6); b=$(tput bold);
	start="$(date +%s)"
	echo "${b}${r}[${rt}${b}${y}$(date +"%m-%d-%Y %H:%M:%S")${b}${r}]${rt}" ;
	echo "${g}Working from${rt} ${b}${c}${PWD}${rt}" ; 
	echo "${c}as${rt} ${b}${g}${USER} with Bash Version ${BASH_VERSION}${rt}" "${b}${y}...${rt}";
	sleep 1; 
	echo "$start" ;
}
lang-paths () {
	for X in bash git yq ; do			
	echo -n "$X =====> "; which $X ;
	done
}
black-echo () {
	tput setaf 0 ; echo "$1" ; tput sgr0 
}
red-echo () {
	tput setaf 1 ; echo "$1" ; tput sgr0 
}
green-echo () {
	tput setaf 2 ; echo "$1" ; tput sgr0 ;
}
yellow-echo () {
	tput setaf 3 ; echo "$1" ; tput sgr0 ;
}
blue-echo () {
	tput setaf 4 ; echo "$1" ; tput sgr0 
}
pink-echo () {
	tput setaf 5 ; echo "$1" ; tput sgr0 
}
cyan-echo () {
	tput setaf 6 ; echo "$1" ; tput sgr0 ;
}
white-echo () {
	tput setaf 7 ; echo "$1" ; tput sgr0 
}
closeout () {
	#@ $1 Closeout? Rerun? true | false
	rt=$(tput sgr0) ; 
	r=$(tput setaf 1); 
	g=$(tput setaf 2); 
	y=$(tput setaf 3); 
	c=$(tput setaf 6); 
	b=$(tput bold) ;
	unset IFS ;

	if $1 ; then
		echo "${b}${r}[${rt}${b}${y}Closing out${b}${r}]${rt}${b}${c}=====> ${rt}" ; 
		build-echo "[====> Ended =====> " 1;
		# echo "${b}${r}[====> Ended =====> ${rt} ${b}${y}...${rt}" ;
		exit 0;
	fi

	exec bash "$0" "$@" ;
}
build-echo() {
	#@ $1 $string()
	#@ $2 $color
	rt=$(tput sgr0) ; 
	buildstr=$1
	for (( i=0; i<${#buildstr}; i++ )); do
		# j=$(( i % 4 )) ;
		c=$(tput setaf "${2}") ;
		u=$(tput smul) ;
		printf '%s' "${u}${c}${buildstr:$i:1}${rt}" ;
		sleep 0.01 ;
	done
	sleep 0.2;
}
build-slowly() {
	#@ $1 $string()
	rt=$(tput sgr0) ; 
	buildstr=$1
	for (( i=0; i<${#buildstr}; i++ )); do
		j=$(( i / 7 )) ;
		c=$(tput setaf "${j}") ;
		u=$(tput bold) ;
		printf '%s' "${u}${c}${buildstr:$i:1}${rt}" ;
		sleep 0.2 ;
	done
	sleep 0.2;
	echo ;
}
notes-do () {
	echo "
	# 0	Black
	# 1	Red
	# 2	Green
	# 3	Yellow
	# 4	Blue
	# 5	Magenta
	# 6	Cyan
	# 7	White
	# 8	Not used
	# 9	Reset to default color

	# sc	Save the cursor position
	# rc	Restore the cursor position
	# home	Move the cursor to upper left corner (0,0)
	# cup <row> <col>	Move the cursor to position row, col
	# cud1	Move the cursor down 1 line
	# cuu1	Move the cursor up 1 line
	# civis	Set to cursor to be invisible
	# cnorm	Set the cursor to its normal state

	# bold	Start bold text
	# smul	Start underlined text
	# rmul	End underlined text
	# rev	Start reverse video
	# blink	Start blinking text
	# invis	Start invisible text
	# smso	Start 'standout' mode
	# rmso	End 'standout' mode
	# sgr0	Turn off all attributes
	# setaf <value>	Set foreground color
	# setab <value>	Set background color
	"
}
read_json () {
	jq . admin.json
}

# % ===== ENVIRONMENT DIVISION ===== % #
timerunner
IFS=,;
local_user=$USER \
yq -i '.configuration.local.user = env(local_user)' runner.yaml ; 
local_dir=$(pwd)/ \
yq -i '.configuration.local.dir = env(local_dir)' runner.yaml ;

#@ yaml_value="$( yq '.configuration._____' runner.yaml)" ;
local_user="$( yq '.configuration.local.user' runner.yaml)" ;
local_dir="$( yq '.configuration.local.dir' runner.yaml)" ;
local_cloud="$( yq '.configuration.local.cloud' runner.yaml)" ;
remote_cloud="$( yq '.configuration.remote.cloud' runner.yaml)" ;
git_enabled="$( yq '.configuration.git.enabled' runner.yaml)" ;

jsonStr='{ "key1": "value1", "key2": "value2", "key3": "value3", "k": "old value"}' ;
# jsonAdmin=jq '.["admin.json"]' ;


# % ================================================================= % #
# % ==================== PROCEDURE DIVISION ========================= % #
# % ================================================================= % #

yellow-echo "SOURCE DIRECTORY =====> $local_dir" ;
blue-echo "JSON CONNECTED =====> " ; read_json ;
blue-echo "REMOTE CLOUD =====> " ; $remote_cloud ;
red-echo "cp -r remote to local" ;
cp -r "$remote_cloud" "$local_cloud" ;

# ! jq 'del(.key3)' <<<"$jsonStr"
# ! jq '.key1 = "new-value1"' <<<"$jsonStr"
# ! jq '.key1 = $newVal' --arg newVal '3 " of rain' <<<"$jsonStr"
# % Create test file.
# ^ echo '{ "key1": "value1", "key2": "value2", "key3": "value3" }' > test.json
# % Remove "key3" and write results back to test.json (recreate it with result).
# ^jq -c 'del(.key3)' test.json > tmp.$$.json && mv tmp.$$.json test.json

build-echo "=====> Input command, " 6 ; build-slowly "$local_user". ;
build-echo "[Cancels under 3 invalid characters] =====> " 4 ;

read -r message ;
message="$(printf '%s' "$message" )"

if [ "$message" == "" ] ; then
cyan-echo "=====> Admin utility cancelled..." ; closeout true;
fi

if [ "$git_enabled" == true ] && [ "$message" == "cmbr" ] ; then
	build-echo "=====> RUNNING COMMAND: " 3 ; red-echo "${message}" ;
	# % { "key1": "value1", "key2": "value2", "key3": "value3", "k": "old value" }
	# jq '. + { "key4": "value4" }' <<<"$jsonStr" ;
	# echo '{ "k": "old value" }' > admin.json

	cat admin.json | jq '.k = $v' --arg v 'new value' | sponge admin.json ;
	# node -p "JSON.stringify({...require('./admin.json'), key4: 'fff'}, null, 2)" > data.json

	pink-echo "=====> Writing to admin.json. Exiting..." ;
	# yq -i .configuration.rsync.dry-run=false runner.yaml
	closeout true ;
fi

if [ "$git_enabled" == true ] && [ "$message" == "g" ] ; then
	build-echo "=====> RUNNING COMMAND: " 3 ; 
	red-echo "git add ." ;
	# red-echo "cp -r remote to local" ;
	# cp -r "$remote_cloud" "$local_cloud" ;

	git add . ;

	build-echo "=====> Input commit message, " 6 ; build-slowly "$local_user". ;
	build-echo "[Cancels under 3 invalid characters] =====> " 4 ;
	read -r commitmessage ;

	commitmessage="$(printf '%s' "$commitmessage" )"
	
	if [ "$commitmessage" == "" ] ; then
		cyan-echo "=====> Git commit cancelled..." ; 
		git reset ;
		closeout true;
	fi

	if [ ${#commitmessage} -gt 2 ] ; then
		echo "[SUCCESS] =====> "
		commit=$commitmessage \
		yq -i '.configuration.meta.latest-commit = env(commit)' runner.yaml ;
		git commit -m "$commitmessage" ;
	else
		git reset ;
		echo "=====> Too few characters (# < 3) Exiting..."
		echo "=====> Commit cancelled..." ; closeout true;
	fi

fi

if [ ${#message} -gt 2 ] ; then
	build-echo "=====> [UNSPECIFIED COMMAND] =====> " 3 ;
	pink-echo "=====> NOT writing to cmbr.json. Exiting..." ;
	closeout true ;
	else
	echo "=====> Too few characters (# < 3) Exiting..."
	echo "=====> Commit cancelled..." ; closeout true;
fi
