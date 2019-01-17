var app = new Vue({
    el: '#root',
    data: {
        appName: 'sandbox',
        once: 'After being generated, this content promises to never change!',
        myHtml: '<a href="www.sinalite.ca">SinaLite</a>',
        imagePointer: 'images/coke.png',
        cokeStyle: {
            color: '#FF6A00',
            fontSize : '5em',
            borderBottom: '1px solid black',
        },
        cokeImage: {
            maxWidth: '100px',
        },
        doubleBlue : 'doubleBlue',
        boolean: 'false',
        userInput: '',
        textArea: '',
        pain: [],
        gender: '',
        dropdown: 'Never',
        trimmedInput: '',
        numericInput: '',
        lazyBinding: '',
        buttonOutput:  document.getElementById("buttonOutput"),
        modifierChart: 'images/vue-modifiers.jpg',
        keyModifiersChart: 'images/common-keyboard-events.jpg',
        specialKeyChart: 'images/special-keys.jpg',
        anyMouseOutput: document.getElementById('anyMouseOutput'),
        rightMouseOutput: document.getElementById('rightMouseOutput'),
        mouseClicks: [
            {count: 0},
            {count: 0},
        ],
        showCustomMenu: false,
        toggler: 2,
        listSize: 0,
        listNumber: 0,
        list: [],
        fishes: [
            {name: 'Goldfish', color: 'orange'},
            {name: 'Deepwater Redfish', color: 'pink'},
            {name: 'Carp', color: 'yellow'},
            {name: 'Iridescent Shark', color: 'black'},
            {name: 'Siamese', color: 'blue'},
            {name: 'Southern Platyfish', color: 'teal'},
        ],
        locations: [
            {   
                country: 'Canada',
                majorCities: ['Toronto', 'Montreal', 'Vancouver']
            },
            {   
                country: 'Mexico',
                majorCities: ['Mexico City', 'Ecatepec', 'Guadalajara']
            },
            {   
                country: 'USA',
                majorCities: ['New York', 'Los Angeles', 'Chicago']
            },
        ],
        medal: ['&#x1f947;', '&#x1f948', '&#x1f949'],
    },
    methods: {
        fillInOn: function(e){
            // the last parameter within an event handler is the event object that triggered the event
            // within a method, "this" is bound to the Vue instance
            this.userInput = 'Do not attempt';
            this.textArea = 'to adjust your TV';
            this.pain= ['Arms', 'Legs'];
            this.gender= "Male"
            this.dropdown = 'Sometimes';
            console.log("An " + e + " event was fired!")
        },
        fillInAt: function(e){
            // the last parameter within an event handler is the event object that triggered the event
            // within a method, "this" is bound to the Vue instance
            this.userInput = 'We are the champions';
            this.textArea = 'my friend!';
            this.pain= ['Torso'];
            this.gender= "Female"
            this.dropdown = 'Often';
            console.log("An " + e + " event was fired!")
        },
        captureClick: function(generation){
            buttonOutput.innerHTML += "<span class='parentFirst'>Parent listener was triggered first, and child after. </span>";
            generation == 'parent' ? console.log("%c parent listener was triggered first", "color: white; font-size: 16px;") : console.log("%c child was triggered after", "color: pink");
        },
        bubbleClick: function(generation){
            buttonOutput.innerHTML += "<span class='childFirst'>Child listener was triggered first, and parent after. </span>";
            generation == 'parent' ? console.log("%c parent was triggered after", "color: white; font-size: 16px;") : console.log("%c child listener was triggered first", "color: yellow;");
        },
        clearText: function(){
            buttonOutput.innerHTML = '';
        },
        logThisInstead: function(){
            console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)", "color: limegreen;" );
        },
        logMe: function(){
            console.log(this);
        },
        pressEnter: function(e){
            alert('You pressed enter by hitting "' + e.which + '"! Horrayy!!')
        },
        pressNine: function(){
            alert('You pressed nine!')
        },
        pressEight: function(){
            alert('You pressed eight!')
        },
        anyMouseDown: function(){
            anyMouseOutput.innerHTML = "You clicked this element with the mouse";
        },
        rightMouseDown: function(){
            rightMouseOutput.innerHTML = "You clicked this element specifically with the right mouse button";
        },
        clear: function(){
            anyMouseOutput.innerHTML = '';
            rightMouseOutput.innerHTML = '';
            this.closeCustomMenu();
        },
        customMenu: function(e){
            if (e.button === 2){
                this.showCustomMenu = true;
                this.top = e.y + 'px';
                this.left = e.x + 'px';
            }
        },
        closeCustomMenu: function() {
            this.showCustomMenu = false;
        },
        ctrlEnter: function(){
            alert('You pressed CTRL+ENTER!')
        },
        toggleValue: function(){
            this.toggler++;
        },
        generateList: function(){
            // if (this.list.length > 1){
            //     for(i=0; i<this.list.length; i++){
            //         this.list.removeChild();
            //     }
            // }

            for(i=0; i < this.listSize; i++ ){
                this.listNumber++;
                this.list[i] = i;
            }
        },
    }
}); 

Vue.config.keyCodes = {
    nine: 57,   // the key 57 (9) has been set to the word "nine"
    eight: 56,  // the key 56 (8) has been set to the word "eight"
};
