#!/usr/bin/env bash
set -euo pipefail

# macOS: prefer CLT git when Xcode license blocks /usr/bin/git
export PATH="/Library/Developer/CommandLineTools/usr/bin:${PATH}"

cd "$(dirname "$0")/.."

gh auth setup-git

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  git init -b main
  git remote add origin git@github.com:marttiku/scottish-dream.git 2>/dev/null || git remote set-url origin git@github.com:marttiku/scottish-dream.git
fi

npm run build:pages

git add -A
git status

if git diff --staged --quiet; then
  echo "No changes to commit."
else
  git commit -m "chore: deploy to GitHub Pages"
fi

git push -u origin main

echo ""
echo "GitHub Actions will deploy to: https://marttiku.github.io/scottish-dream/"
echo "Check status: gh run list --repo marttiku/scottish-dream"
