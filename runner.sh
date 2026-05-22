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
	for X in bash git yq ; do			
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
	# smso	Start 'standout' mode
	# rmso	End 'standout' mode
	# sgr0	Turn off all attributes
	# setaf <value>	Set foreground color
	# setab <value>	Set background color
	"
}

timerunner
IFS=,;
local_user=$USER \
yq -i '.configuration.local.user = env(local_user)' runner.yaml ; 
local_dir=$(pwd)/ \
yq -i '.configuration.local.dir = env(local_dir)' runner.yaml ;

#@ yaml_value="$( yq '.configuration._____' runner.yaml)" ;
local_user="$( yq '.configuration.local.user' runner.yaml)" ;
local_dir="$( yq '.configuration.local.dir' runner.yaml)" ;
remote_user="$( yq '.configuration.remote.user' runner.yaml)" ;
remote_host="$( yq '.configuration.remote.host' runner.yaml)" ;
remote_dir="$( yq '.configuration.remote.dir' runner.yaml)" ;
ssh_port="$( yq '.configuration.remote.ssh-port' runner.yaml)" ;
# git_enabled="$( yq '.configuration.git.enabled' runner.yaml)" ;
# git_dry_run="$( yq '.configuration.git.dry-run' runner.yaml)" ;
rsync_enabled="$( yq '.configuration.rsync.enabled' runner.yaml)" ;
rsync_pull="$( yq '.configuration.rsync.pull' runner.yaml)" ;
dry_run="$( yq '.configuration.rsync.dry-run' runner.yaml)" ;
remote_path="$remote_user$remote_host:$remote_dir" ;


git_add () {
	#@ $1 GIT Dry Run? true | false
	#@ $2 Rsync Enabled? true | false
	if $1 ; then
		build-echo "=====> [GIT DRY RUN] =====> " 2;
		echo ;
		git status ;
		git add . --dry-run ;
	else
		build-echo "=====> [GIT WET RUN] =====> " 3;
		echo ;
		git add . ;
		git status ;
	fi

	if $2 ; then
		build-echo "=====> [RSYNC ENABLED] =====> " 3;
		echo ;
	else
		build-echo "=====> [RSYNC DISABLED] =====> " 2;
		echo ;
	fi
}

git_commit () {
	#@ $1 GIT Dry Run? true | false
	#@ $2 Message? string() from $message
	if $1 ; then
		git commit -m "$2" --dry-run ;
	else
		git commit -m "$2" ;
	fi
}

rsync_push () {
	#@ $1 Dry Run? true | false
	#@ $2 Rsync? true | false
	if $1 ; then 
		cyan-echo "=====> DRY GIT PUSHED THE FOLLOWING: =====>" ;
		git push --dry-run ;
		yellow-echo "=====> DRY COMMIT & PUSH COMPLETE =====>" ;
		if $2 ; then
		cyan-echo "=====> DRY RSYNCED TO SERVER: =====> " ; #-havzune
		rsync -havzun -e "ssh -p $ssh_port" --exclude-from=.gitignore ./* "$remote_path" ;
		cyan-echo "=====> DRY COMMIT, PUSH, & RSYNC COMPLETE =====>/" ;
		fi
		closeout ;
	else
		cyan-echo "=====> GIT PUSHED THE FOLLOWING: =====> "
		git push ;
		yellow-echo "=====> GIT COMMIT & PUSH COMPLETE =====>" ;
		if $2 ; then
		cyan-echo "=====> RSYNCED TO SERVER: =====> " ; #-havzue
		rsync -havzu -e "ssh -p $ssh_port" --exclude-from=.gitignore ./* "$remote_path" 
		yellow-echo "=====> RSYNC COMPLETE =====>" ;
		fi
		closeout ;
	fi
}

rsync_pull () {
	#@ $1 Dry Run? true | false
	#@ $2 Rsync Pull? true | false
	if $1 ; then
		cyan-echo "=====> DRY RSYNCED PULLED FROM SERVER: =====> " ;
		rsync -avh --dry-run -e "ssh -p $ssh_port" "$remote_path" "$local_dir" ;
		yellow-echo "=====> Dry RSYNC Complete =====>" ;
		# yq -i .configuration.rsync.pull=false runner.yaml ;
		closeout ;
	fi
	if $2 ; then
		cyan-echo "=====> RSYNCED PULLED FROM SERVER: =====> " ;
		rsync -avh --exclude "*.git" -e "ssh -p $ssh_port" "$remote_path" "$local_dir" ;
		# rsync -chavzuP --ignore-times -e "ssh -p $ssh_port" --exclude-from=.gitignore "$remote_path" ./* ;
		yellow-echo "=====> RSYNC Complete =====>" ;
		# yq -i .configuration.rsync.pull=false runner.yaml ;
		closeout ;
	fi
}

yellow-echo "SOURCE DIRECTORY =====> $local_dir" ;
yellow-echo "TARGET DIRECTORY =====> $remote_path" ;

if "$rsync_pull" ; then
	build-echo "=====> [PREPARING FOR SERVER RSYNC PULL] =====> " 1;
	if "$dry_run" ; then
		build-echo "[Dry TESTING Pull Mode Enabled] =====> " 3;
	else 
		build-echo "[RSYNC " 6 ; build-slowly "LIVE" 6 ; build-echo " STANDING BY] =====> " 1;
	fi
		build-echo "[Press r to proceed with server pull from target directory] =====> " 5;
		read -r serverpull ;
		serverpull="$(printf '%s' "$serverpull" )" ;

	if [ "$serverpull" == "r" ] ; then
		build-echo "=====> [SERVER RSYNC PULL ACTIVATED] =====> " 3;
		rsync_pull "$dry_run" "$rsync_pull" ;
	else
		build-echo "=====> Server pull cancelled and disabled. Rerun utility to enable." 2;
		yq -i .configuration.rsync.pull=false runner.yaml
		closeout ;
	fi
	
fi

git_add "$dry_run" "$rsync_enabled" ;
build-echo "=====> Enter your commit message, " 6 ; build-slowly "$local_user". ;
cyan-echo "[Cancels under 3 characters.] =====> " ;

if "$dry_run" ; then
build-echo "[Press w to enable wet run (overwrite mode)] =====> " 5;
else 
build-echo "[Press d to enable dry run (safe mode)] =====> " 5;
fi

read -r message ;
message="$(printf '%s' "$message" )" ;

if [ "$dry_run" ] && [ "$message" == "w" ] ; then
	build-echo "=====> [WET RUN (OVERWRITE MODE) ENABLED] =====> " 3;
	git reset ;
	pink-echo "=====> Rerun enabled utility. Exiting..." ;
	yq -i .configuration.rsync.dry-run=false runner.yaml
	closeout false ;
fi

if [ "$dry_run" == false ] && [ "$message" == "d" ] ; then
	build-echo "=====> [DRY RUN (SAFE MODE) ENABLED] =====> " 2;
	git reset ;
	pink-echo "=====> Rerun utility for safe testing. Exiting..." ;
	yq -i .configuration.rsync.dry-run=true runner.yaml
	closeout false ;
fi 

if [ ${#message} -gt 2 ] ; then
	echo "[SUCCESS] =====> "
	commit=$message\
	yq -i '.configuration.meta.latest-commit = env(commit)' runner.yaml ;
	git_commit "$dry_run" "$message" ;

	else
	git reset ;
	echo "=====> Too few characters (# < 3) Exiting..."
	echo "=====> Commit cancelled..." ; closeout true;
fi

cyan-echo "=====> Push data? "
build-echo "[Press p to confirm] =====> " 6;
read -r pushed

if [ "$pushed" == "p" ] ; then
	echo "Data pushing: " ; pink-echo "$message" ;
	rsync_push "$dry_run" "$rsync_enabled" ;

	else
	git reset ;
	cyan-echo "=====> Push cancelled..." ; closeout ;
fi
