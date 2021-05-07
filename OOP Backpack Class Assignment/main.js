//OOP Backpack Class Assignment
"use strict";
//Task 1
class Backpack {
    //Properties (State)
    constructor(color, size) {
        this.color = color;
        this.size = size;
        this.items = [];
        this.open = false;
    }

    //Methods (Behaviour)
    openBag() {
        this.open = true;
        console.log("The backpack is now open.");
    }
    closeBag() {
        this.open = false;
        console.log("The backpack is now closed.");
    }
    putin(item) {
        if (this.open) {
            this.items.push(item);
            console.log("'" + item + "'" + " is now placed into the bag.");
        }
    }
    takeout(item) {
        if (this.open) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i] == item) {
                    this.items.splice(i, 1);
                }
            }
            console.log("'" + item + "'" + " is now taken out of the bag.");
        }
    }

}
//Task 2
let blue = new Backpack("Blue", "Small");
let red = new Backpack("Red", "Medium");
let green = new Backpack("Green", "Large");
//Task 3
red.openBag();
red.putin("Lunch");
red.putin("Jacket");
red.closeBag();
red.openBag();
red.takeout("Jacket");
red.closeBag();