let counter = 0;

function printHello() {
    console.log("hello")
    counter++;
    console.log(counter)

    if (counter <6) {
        printHello()
    }
    return;

}
printHello()