function mixedRandom() {
    return Math.random() * 2 - 1
}

        // function placeFood() {  //Créer un array "foodArray" qui contient la position des différentes nourritures puis les dessines en même temps
        //     for(let i = 0; i < foodNumber; i++) {
        //         foodArray.push({
        //             posX : Math.round( Math.random() * (canvasWidth - foodSizeX) ),
        //             posY : Math.round( Math.random() * (canvasHeight - foodSizeY) ),
        //             energy : foodEnergy,
        //         })
                
        //         ctx.fillRect(foodArray[i]['posX'], foodArray[i]['posY'], foodSizeX, foodSizeY)
        //     }
        // }

        // function draw() {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     for(let i = 0; i < creaturesArray.length; i++) {
        //         if (creaturesArray[i]['energy'] > 0) {
        //             ctx.fillRect(creaturesArray[i]['posX'], creaturesArray[i]['posY'], xSize, ySize)
        //             creaturesArray[i]['energy'] = creaturesArray[i]['energy'] - 0.1

        //             creaturesArray[i]['posX'] = creaturesArray[i]['posX'] + mixedRandom()*xSize
        //             creaturesArray[i]['posY'] = creaturesArray[i]['posY'] + mixedRandom()*ySize

                    
        //         }
        //         if (creaturesArray[i]['energy'] == 0) {
        //             ctx.clearRect(creaturesArray[i]['posX'], creaturesArray[i]['posY'], xSize, ySize)
        //         }

        //     }
        //     requestAnimationFrame(draw);
        // }



        //         function initArray(number) {  // initialise un array de points avec une position aléatoire
        //     let array = [];
        //     for(let i = 0; i < number; i++) {
        //         array.push({
        //             id : i,
        //             posX : Math.round( Math.random() * (canvasWidth - xSize) ),
        //             posY : Math.round( Math.random() * (canvasHeight - ySize) ),
        //             energy : energyStart,
        //             isAlive : 1,
        //         });
        //     }
        //     return array;
        // }