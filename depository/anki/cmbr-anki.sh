#! /bin/bash

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
	for X in bash git js; do			
	echo -n "$X =====> "; which $X ;
	done
}
cyan-echo () {
	tput setaf 6 ; echo "$1" ; tput sgr0 ;
}
yellow-echo () {
	tput setaf 3 ; echo "$1" ; tput sgr0 ;
}
green-echo () {
	tput setaf 2 ; echo "$1" ; tput sgr0 ;
}
pink-echo () {
	tput setaf 5 ; echo "$1" ; tput sgr0 
}
closeout () {
	#@ $1 Closeout? true | Rerun? false
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
	sleep 0.5;
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
	sleep 0.5;
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
	# smso	Start “standout” mode
	# rmso	End “standout” mode
	# sgr0	Turn off all attributes
	# setaf <value>	Set foreground color
	# setab <value>	Set background color
	"
}

timerunner
IFS=,
txtdoc="CMBR_BUS-115.txt"
rm -f -v $txtdoc
pink-echo "Removing =====> $txtdoc"
closeout true
