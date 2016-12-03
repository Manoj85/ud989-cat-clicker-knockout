var ViewModel = function () {
    "use strict";
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/');

    this.incrementCounter = function () {
        this.clickCount( this.clickCount() + 1 );
    };

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
};

ko.applyBindings(new ViewModel());