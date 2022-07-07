
export class Patient {

    id: String;
    name: String;
    city: String;
    number: Number;
    isEditable: Boolean

    constructor(id: String, name: String, city: String, number: Number, isEditable: Boolean) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.number = number;
        this.isEditable = isEditable;
    }
}