# web-19-rep
assigments


Quick setup — if you’ve done this kind of thing before
or

Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.
…or create a new repository on the command line

echo "# demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ChandanPandeygithub/demo.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/ChandanPandeygithub/demo.git
git branch -M main
git push -u origin main

…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

-----
Basic Shared Repository Workflow

    update your local repo with git pull origin master,
    create a working branch with git checkout -b MyNewBranch
    make your changes on your branch and stage them with git add,
    commit your changes locally with git commit -m "description of your commit", and
    upload the changes (including your new branch) to GitHub with git push origin MyNewBranch
    Go to the main repo on GitHub where you should now see your new branch
    click on your branch name
    click on “Pull Request” button (URC)
    click on “Send Pull Request”
