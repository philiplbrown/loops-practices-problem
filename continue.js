var numbers = ['55','88','99','25','68','358','586','33','47'];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        continue;
    }
    console.log(number)
}