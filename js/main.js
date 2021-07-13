function InventoryViewModel() {

    var self = this;

    var iconTypes = [
        { icon: "icon-bone", text: "Bone"},
        { icon: "icon-ball", text: "Ball"},
        { icon: "icon-circle", text: "Circle"},
        { icon: "icon-rabbit", text: "Rabbit"},
    ];
     
    self.inventory = ko.observableArray([
        iconTypes[1],
        iconTypes[2],
        iconTypes[3],
    ]);
}

ko.applyBindings(new InventoryViewModel(), document.querySelector("#knockout-app"));