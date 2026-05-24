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
remote_user="$( yq '.configuration.remote.user' runner.yaml)" ;
remote_host="$( yq '.configuration.remote.host' runner.yaml)" ;
remote_dir="$( yq '.configuration.remote.dir' runner.yaml)" ;
ssh_port="$( yq '.configuration.remote.ssh-port' runner.yaml)" ;
git_enabled="$( yq '.configuration.git.enabled' runner.yaml)" ;
git_dry_run="$( yq '.configuration.git.dry-run' runner.yaml)" ;
rsync_enabled="$( yq '.configuration.rsync.enabled' runner.yaml)" ;
rsync_pull="$( yq '.configuration.rsync.pull' runner.yaml)" ;
rsync_dry_run="$( yq '.configuration.rsync.dry-run' runner.yaml)" ;
remote_path="$remote_user$remote_host:$remote_dir" ;

git_add () {
	#@ $1 GIT Dry Run? true | false
	#@ $2 Rsync Dry Run? true | false
	#@ $3 GIT Enabled? true | false
	#@ $4 Rsync Enabled? true | false
	if $3 ; then
		if $1 ; then
			git add . --dry-run ;
			git status ;
			build-echo "[=====[GIT ENABLED]===" 2 ;
			build-echo "==[DRY]=====[NO COMMIT & NO PUSH]==> " 4 ;
			echo ;
		else
			echo ;
			git add . ;
			git status ;
			build-echo "[=====[GIT ENABLED]===" 5 ;
			build-echo "==[WET]=====[COMMIT & PUSH]==> " 3 ;
			echo ;
		fi

		if $4 ; then
			build-echo "[=====[RSYNC ENABLED]===" 3 ;
			if $2 ; then
			build-echo "==[DRY]=====[SAFE MODE]==> " 2 ;
			echo ;
			else
			build-echo "==[WET]=====[OVERWRITE MODE]==> " 1 ;
			echo ;
			fi
		else
			build-echo "=====> [RSYNC DISABLED] =====> " 2;
			echo ;
		fi

	else
	build-echo "=====> [GIT DISABLED] =====> " 7;
	echo ;
	fi
}

git_commit () {
	#@ $1 GIT Dry Run? true | false
	#@ $2 Message? string() from $message
	#@ $3 GIT Enabled? true | false
	if $3 ; then
		if $1 ; then
			git commit -m "$2" --dry-run ;
		else
			git commit -m "$2" ;
		fi
	else
	echo "$2" ;
	fi
}

rsync_push () {
	#@ $1 Git Dry Run? true | false
	#@ $2 Rsync Dry Run? true | false
	#@ $3 Git Enabled? true | false
	#@ $4 Rsync Enabled? true | false

	if $3 ; then
		if $1 ; then 
			green-echo "=====> DRY GIT PUSHED THE FOLLOWING: =====>" ;
			git push --dry-run ;
			cyan-echo "=====> DRY COMMIT & PUSH COMPLETE =====>" ;
			else
			cyan-echo "=====> GIT PUSHED THE FOLLOWING: =====> " ;
			git push ;
			yellow-echo "=====> GIT COMMIT & PUSH COMPLETE =====>" ;
		fi

	if $4 ; then
		if $2 ; then
			green-echo "=====> DRY RSYNC TO SERVER: =====> " ; #-havzune
			rsync -havzun -e "ssh -p $ssh_port" --exclude-from=.gitignore ./* "$remote_path" ;
			cyan-echo "=====> DRY RSYNC COMPLETE =====>/" ;
			closeout ;
		else
			pink-echo "=====> RSYNC TO SERVER: =====> " ; #-havzue
			rsync -havzu -e "ssh -p $ssh_port" --exclude-from=.gitignore ./* "$remote_path" ;
			yellow-echo "=====> RSYNC COMPLETE =====>" ;
			fi
			closeout ;
		fi
	fi
}

rsync_pull () {
	#@ $1 Dry Run? true | false
	#@ $2 Rsync Pull? true | false
	if $1 ; then
		cyan-echo "=====> DRY RSYNC PULL FROM SERVER: =====> " ;
		rsync -avh --dry-run -e "ssh -p $ssh_port" "$remote_path" "$local_dir" ;
		yellow-echo "=====> Dry RSYNC Complete =====>" ;
		# yq -i .configuration.rsync.pull=false runner.yaml ;
		closeout ;
	fi
	if $2 ; then
		cyan-echo "=====> RSYNC PULL FROM SERVER: =====> " ;
		rsync -avh --exclude "*.git" -e "ssh -p $ssh_port" "$remote_path" "$local_dir" ;
		# rsync -chavzuP --ignore-times -e "ssh -p $ssh_port" --exclude-from=.gitignore "$remote_path" ./* ;
		yellow-echo "=====> RSYNC Complete =====>" ;
		yq -i .configuration.rsync.pull=false runner.yaml ;
		closeout ;
	fi
}
# % ================================================================= % #
# % ==================== PROCEDURE DIVISION ========================= % #
# % ================================================================= % #
yellow-echo "SOURCE DIRECTORY =====> $local_dir" ;
yellow-echo "TARGET DIRECTORY =====> $remote_path" ;

if "$rsync_pull" ; then
	build-echo "=====> [PREPARING FOR SERVER RSYNC PULL] =====> " 1;
	echo ;
	if "$rsync_dry_run" ; then
		build-echo "[Dry TESTING Pull Mode Enabled] =====> " 3;
		echo ;
		else 
		build-echo "[RSYNC " 6 ; build-slowly "LIVE" 6 ; build-echo " STANDING BY] =====> " 1;
		echo ;
	fi

		build-echo "[Press r to proceed with server pull from target directory] =====> " 5;
		echo ;
		read -r serverpull ;
		serverpull="$(printf '%s' "$serverpull" )" ;

	if [ "$serverpull" == "r" ] ; then
		build-echo "=====> [SERVER RSYNC PULL ACTIVATED] =====> " 3;
		rsync_pull "$rsync_dry_run" "$rsync_pull" ;
	else
		build-echo "=====> Server pull cancelled and disabled. Rerun utility to enable." 2;
		yq -i .configuration.rsync.pull=false runner.yaml
		closeout ;
	fi
	
fi

git_add "$git_dry_run" "$rsync_dry_run" "$git_enabled" "$rsync_enabled";

if "$git_enabled" ; then
build-echo "=====> Enter your commit message, " 6 ; build-slowly "$local_user". ;
	if "$git_dry_run" ; then
	cyan-echo "[Press h to enable Git Wet Run] =====> " ;
	echo ;
	else 
	cyan-echo "[Press t to enable Git Dry Run] =====> " ;
	echo ;
	fi 
else
build-echo "=====> Input command, " 6 ; build-slowly "$local_user". ;
build-echo "[Press g to enable Git] =====> " 5 ;
fi
if "$rsync_enabled" ; then
cyan-echo "[Press z to disable RSYNC ] =====> " ;
	if "$rsync_dry_run" ; then
		cyan-echo "[Press w to enable RSYNC Wet run (overwrite mode)] =====> " ;
		build-echo "[Cancels under 3 characters] =====> " 4 ;
	else 
		cyan-echo "[Press x to enable RSYNC Pull from Server] =====> " ;
		cyan-echo "[Press d to enable RSYNC Dry run (safe mode)] =====> " ;
		build-echo "[Cancels under 3 characters] =====> " 4 ;
	fi
else
blue-echo "[Press s to enable RSYNC ] =====> " ;
build-echo "[Cancels under 3 characters] =====> " 4 ;
fi

read -r message ;
message="$(printf '%s' "$message" )"

if [ "$message" == "" ] ; then
git reset ;
cyan-echo "=====> Push cancelled..." ; closeout ;
fi
if [ "$rsync_dry_run" ] && [ "$message" == "w" ] ; then
	build-echo "=====> [RSYNC WET RUN (OVERWRITE MODE) ENABLED] =====> " 3 ;
	git reset ;
	pink-echo "=====> Rerunning rsync enabled utility. Exiting..." ;
	yq -i .configuration.rsync.enabled=true runner.yaml
	yq -i .configuration.rsync.dry-run=false runner.yaml
	closeout false ;
fi
if [ "$rsync_dry_run" == false ] && [ "$message" == "d" ] ; then
	build-echo "=====> [RSYNC DRY RUN (SAFE MODE) ENABLED] =====> " 2;
	git reset ;
	pink-echo "=====> Rerunning utility for safe testing. Exiting..." ;
	yq -i .configuration.rsync.enabled=true runner.yaml
	yq -i .configuration.rsync.dry-run=true runner.yaml
	closeout false ;
fi 



if [ "$rsync_enabled" == true ] && [ "$message" == "z" ] ; then
	build-echo "=====> [RSYNC DISABLED] =====> " 3;
	git reset ;
	pink-echo "=====> Rerunning with rsync disabled. Exiting..." ;
	yq -i .configuration.rsync.enabled=false runner.yaml
	yq -i .configuration.rsync.pull=false runner.yaml
	yq -i .configuration.rsync.dry-run=false runner.yaml
	closeout false ;
fi 
if [ "$rsync_enabled" == false ] && [ "$message" == "s" ] ; then
	build-echo "=====> [RSYNC RE-ENABLED] =====> " 3;
	git reset ;
	pink-echo "=====> Rerunning with rsync enabled. Exiting..." ;
	yq -i .configuration.rsync.enabled=true runner.yaml
	closeout false ;
fi 
if [ "$rsync_enabled" == true ] && [ "$message" == "x" ] ; then
	build-echo "=====> [RSYNC PULL ENABLED] =====> " 3;
	git reset ;
	pink-echo "=====> Rerunning under pull procedure. Exiting..." ;
	yq -i .configuration.rsync.pull=true runner.yaml
	closeout false ;
fi 


if [ "$git_enabled" == false ] && [ "$message" == "g" ] ; then
	build-echo "=====> [GIT ENABLED] =====> " 7;
	git reset ;
	pink-echo "=====> Rerunning utility with git. Exiting..." ;
	yq -i .configuration.git.enabled=true runner.yaml
	yq -i .configuration.git.dry-run=false runner.yaml

	closeout false ;
fi
if [ "$git_enabled" == true ] && [ "$message" == "t" ] ; then
	build-echo "=====> [GIT DRY RUN ENABLED] =====> " 7;
	git reset ;
	pink-echo "=====> Rerunning, git commits and pushes are disabled. Exiting..." ;
	yq -i .configuration.git.enabled=true runner.yaml
	yq -i .configuration.git.dry-run=true runner.yaml

	closeout false ;
fi
if [ "$git_enabled" == true ] && [ "$message" == "h" ] ; then
	build-echo "=====> [GIT COMMIT & PUSH ENABLED] =====> " 7;
	git reset ;
	pink-echo "=====> Rerunning, git now commits and pushes. Exiting..." ;
	yq -i .configuration.git.enabled=true runner.yaml
	yq -i .configuration.git.dry-run=false runner.yaml

	closeout false ;
fi
if [ "$git_enabled" == true ] && [ ${#message} -gt 2 ] ; then
	echo "[SUCCESS] =====> "
	commit=$message\
	yq -i '.configuration.meta.latest-commit = env(commit)' runner.yaml ;
	git_commit "$git_dry_run" "$message" "$git_enabled" ;
	else
	git reset ;
	echo "=====> Too few characters (# < 3) Exiting..."
	echo "=====> Commit cancelled..." ; closeout true;
fi

cyan-echo "=====> Push data? "
cyan-echo "[Press p to confirm] =====> " 6;
build-echo "[Other inputs cancel process.] =====> " ;

read -r pushed

if [ "$pushed" == "p" ] ; then
	echo "Data pushing: " ; echo ; pink-echo "$message" ; echo ;
	rsync_push "$git_dry_run" "$rsync_dry_run" "$git_enabled" "$rsync_enabled" ;
	else
	git reset ;
	cyan-echo "=====> Push cancelled..." ; closeout ;
fi
#@ $1 Git Dry Run? true | false
#@ $2 Rsync Dry Run? true | false
#@ $3 Git Enabled? true | false
#@ $4 Rsync Enabled? true | false