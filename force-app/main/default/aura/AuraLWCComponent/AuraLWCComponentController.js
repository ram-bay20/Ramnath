({
    msgHandle: function (component, event) {
        var print = event.getParam('msg')
        component.set("v.messenger", print)
    }
})
