function cocktailSort(arr){
    var left = 0, right = arr.length-1, control = right;
    while(left < right){
        for (var i = 0; i < right; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                control = i;
            }
        }
        right = control;
        for (var i = right; i > left; i--){
            if(arr[i-1]>arr[i]){
                var temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
                control = i;
            }
        }
        left = control;
    }
    return arr;
}


document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("toggleButton");
    const info = document.getElementById("toggleInfo");
    
    button.addEventListener("click", function(){
        const currentDisplay = window.getComputedStyle(info).display;

        if (currentDisplay === "none"){
            info.style.display = "block";
        }
        else{
            info.style.display = "none";
        }
    });

    const inputElem = document.getElementById("unsort");
    const sortProcess = document.getElementById("process");
    const outputElem = document.getElementById("sort");
    
    sortProcess.addEventListener("click", function(){
        const inputString = inputElem.value;
        var isValid = /^[0-9,\s.-]+$/.test(inputString);

        if (isValid){
            const inputNum = inputString.split(',').map(parseFloat);
            outputElem.textContent = "Отсортированный массив: " + cocktailSort(inputNum);
            outputElem.classList.add("successRes");
        }
        else{
            outputElem.textContent = "Ошибка! Вводить только числа!";
            outputElem.classList.add("error");
        } 
    });
});

