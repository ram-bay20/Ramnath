({
    getId : function(component) {
        var pageRefer = component.get("v.pageReference")
        var ids = pageRefer.state.c__id
        component.set("v.id", ids)
    }
})
