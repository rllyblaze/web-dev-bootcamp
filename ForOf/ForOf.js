const subreddits = ['cringe', 'books', 'chicken', 'funny', 'pics', 'soccer', 'gunners']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let sub of subreddits) {
     console.log(`Visit reddit.com/r/${sub}`)
}

colors = ['blue', 'yellow', 'green']
for (let col of colors){
    console.log(col)

}

const numbers = [1,2,3,4,5,6,7,8,9];
for (let multi of numbers) {
    console.log(Math.pow(multi,2));
}