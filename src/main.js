
class Person {
    constructor(name) {
        this.name = name
    }
    showName() {
        console.log(this.name);
    }
}




function component() {
    const element = document.createElement("div");
    element.innerHTML= "Hello Webpack1!";
    return element;
}
const me = new Person("kenta");
me.showName();
document.getElementById("content").appendChild(component());
