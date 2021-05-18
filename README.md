## **ReactJS**

#### **Personal Projects**
* Project01 「[P1-MoneyConverter](https://github.com/s20016/ReactJS/tree/convert-currency)」
* Project02 「[P2-BMICalculator](https://github.com/s20016/ReactJS/tree/bmi)」
* Project03 「[P3-RealTimeInput](https://github.com/s20016/ReactJS/tree/rt-input)」
* Tutorial: Intro to React「[T1-Tictactoe](https://github.com/s20016/ReactJS/tree/tictactoe)」

#### **Class Projects**
* 作りながら学ぶ REACT「[C1-Moneybook](https://github.com/s20016/ReactJS/tree/moneybook)」
* 作りながら学ぶ REACT「[C2-Janken](https://github.com/s20016/ReactJS/tree/janken)」


#
<details>
<summary>How To Deploy React App To Git Pages?</summary>

```bash
# Create a new react-app
npx create-react-app <app-name>
cd <app-name>
npm start

# Open browser and check React App in http://localhost:3000/
# Create new repository in Github. Then copy the URL.

# Back to Terminal
npm add gh-pages
git add .
git commit -m "Initial Commit"
git remote add origin <URL>
git push -u origin master

# Open browser
# Refresh Page > Go to Settings > Github Pages > Select "master" branch > save

```
```bash
# Back to Terminal, open package.json
nvim package.json

# Add the following lines...
//... 
"homepage": "http://<username>.github.io/<react-pages>"

"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Save and exit
```

```bash
# Finally deploy React App to Git Pages

git add .
git commit -m "Modified Github Pages config."
npm run deploy

# Open browser
# Refresh Page > Got to Settings > Github Pages > Select "gh-pages" branch > save

# Congrats!
```
</details>