({
    msgHandler : function(component, message) {
        if (message != null && message.getParam("dataRM") != null) {
            component.set("v.receivedMsg", message.getParam("dataRM").value)
        }
    },
    handleKey : function(component, event) {
        component.set("v.messages", event.target.value)
    },
    handleClick : function(component) {
        let msg = component.get("v.messages")
        let message= {
            dataRM: {
                value: msg
            }
        }
        component.find("DemoLMS").publish(message)
    }
})
