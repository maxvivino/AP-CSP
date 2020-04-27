let headCount = 0
let count = 0
while(headCount < 12){
    let coin = Math.floor(Math.random() * 2)
   console.log(coin)
    if(coin == 1){
        headCount = headCount + 1
    } else {
        headCount = 0
    }
    console.log(`Head Streak: ${headCount}`)
    //console.log (`Heads: ${headCount}`)
    count++
    //console.log(`Count: ${count}`)
  } 
  console.log(`Total Flips: ${count}`)