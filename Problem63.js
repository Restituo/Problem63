const matrix = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
  ]
//Words to find
const wordOne = 'FOAM'
const wordTwo = 'MASS'
const wordThree = 'ABCD'

console.log(wordOne, wordSearch(matrix, wordOne))
console.log(wordTwo, wordSearch(matrix, wordTwo))
console.log(wordThree, wordSearch(matrix, wordThree))

function wordSearch (matrix, word){
    //variables
    const wordLength = word.length;
    const firstWord = word[0];
    
    for (let i = 0; i < matrix.length; i++){
        //look at each matrix to see if the first letter exists
        const currentArray = matrix[i]
        const firstPosition = currentArray.indexOf(firstWord)
        //if doesnt exist, skip this loop and continue on the next
        if (firstPosition == -1){
            continue
        }
        //search ACROSS
        if (currentArray.length - firstPosition >= wordLength){
            const guessArray = currentArray.slice(firstPosition, firstPosition + wordLength)
            if (guessArray.join('') === word){
                return true
            }
        }

        //search DOWN
        if(matrix.length - i >= wordLength){
            let guessArray = []

            for (let j = 0; j < wordLength; j++){
                guessArray.push(matrix[i+j][firstPosition])
            }

            if (guessArray.join('') === word){
                return true
            }
        }

    }
    return false
} 