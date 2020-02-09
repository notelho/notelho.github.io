SELECTED_BRANCH="$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')"

if [ "$SELECTED_BRANCH" == 'master' ]; then
    echo -e "\e[31m"
else
    echo -e "\e[34m"
fi

echo '$ branch '"$SELECTED_BRANCH"''
echo -e "\e[91m"
git add TODO.md
git commit -m "update TODO"
git add .
echo -e "\e[32m"
echo 'Enter the commit message:'
echo -e "\e[39m"
read COMMIT_MESSAGE

# echo "$COMMIT_MESSAGE"
# echo "$SELECTED_BRANCH"
# git remote get-url origin

git commit -m "$COMMIT_MESSAGE"
git push origin "$SELECTED_BRANCH"

return 0