var app = new Vue({
    el: '#root',
    data: {
        appName: 'Growler',
        welcome: 'Welcome fam,',
        name: 'Adam',
        once: 'never update me!',
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
    },
    methods: {
        fillIn: function(e){
            // the last parameter within an event handler is the event object that triggered the event
            // within a method, "this" is bound to the Vue instance
            this.userInput = 'Do not attempt';
            this.textArea = 'to adjust your TV';
            this.pain= ['Arms', 'Legs'];
            this.gender= "Male"
            this.dropdown = 'Sometimes';
            console.log("An " + e + " event was fired!")
        },
        captureClick: function(generation){
            generation == 'parent' ? console.log("%c parent listener was triggered first", "color: white; font-size: 16px;") : console.log("%c child was triggered after", "color: pink");
        },
        bubbleClick: function(generation){
            generation == 'parent' ? console.log("%c parent was triggered after", "color: white; font-size: 16px;") : console.log("%c child listener was triggered first", "color: yellow;");
        },
    }
}); 
