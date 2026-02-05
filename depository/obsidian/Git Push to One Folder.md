So I'm trying to #git push these obsidian data to my GitHub Pages site but I only want to push to one new folder. I've found these commands which I'll try shortly:
````
git init
git remote add -f origin <url>
git config core.sparsecheckout true
echo <dir1>/ >> .git/info/sparse-checkout
echo <dir2>/ >> .git/info/sparse-checkout
echo <dir3>/ >> .git/info/sparse-checkout
git pull origin master
````
Okay, so I'll get to it now.
I'll specifically write:
````
git init
git remote add -f origin https://github.io/Camberden/camberden.github.io
git config core.sparsecheckout true
echo https://github.io/Camberden/camberden.github.io/obsidian/ >> .git/info/sparse-checkout
git pull origin master
````
I ended up using github/info/exclude. 