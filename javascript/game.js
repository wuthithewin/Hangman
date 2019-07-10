   



   var cars = ['Mclaren', 'Ferrari', 'AstonMartin', 'Lamborghini', 'Koenigsegg', 'Pagani', 'Maserati', 'Porsche'];
    let randCar = Math.floor(Math.random() * cars.length);
    let choosenCar = cars[randCar];
    console.log(choosenCar);

    var counter = 0;
    
  
    
    var letters = [];
    function updateCorrectWords(){        
        for(let i=0; i<=choosenCar.length; i++){
            letters.push('_');

        }
        return letters;
       
    }

// 1.Create an array of words
// 2.choose randomly

        // 3.create underscore from the word

// 4.get users to guess

// 5.check if correct

// 6.if correct push to correct array

// 7.if wrong push to wrong array
    