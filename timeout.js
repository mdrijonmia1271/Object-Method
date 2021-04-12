function doSomeThing(){
    console.log(3333);
}
console.log(4444);
// setTimeout(() => {
//     console.log('see you timeout.');
// }, 2000);

setInterval(function(){
    console.log('doing it again');
}, 2000);
console.log(5555);
