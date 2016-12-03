var Cat = function(data) {
    "use strict";
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);
    this.catLevel = ko.computed( function() {
        let title, numClicks;
        numClicks = this.clickCount();
        if (numClicks < 10) { title = 'NewBorn'; }
        else if (numClicks < 15) { title = 'Infant'; }
        else if (numClicks < 20) { title = 'Child'; }
        else if (numClicks < 25) { title = 'Adult'; }
        else { title = 'Ninja'; }
        return title;
    }, this);
}
var ViewModel = function () {
    "use strict";
    const self = this;
    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames: ['Tab-Tab', 'T-Bone', 'Mr. T']
    }) );
    this.incrementCounter = function () {
        // this.clickCount( this.clickCount() + 1 );
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());