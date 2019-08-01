import Singleton from "./patterns/singleton";

const instance1 = Singleton.getInstance("Subhan");
const instance2 = Singleton.getInstance();
console.log(instance2);
console.log("Same instance? " + (instance1 === instance2));
