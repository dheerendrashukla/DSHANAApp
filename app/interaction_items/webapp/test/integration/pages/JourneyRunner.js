sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"interactionitems/test/integration/pages/Interactions_ItemsList",
	"interactionitems/test/integration/pages/Interactions_ItemsObjectPage"
], function (JourneyRunner, Interactions_ItemsList, Interactions_ItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('interactionitems') + '/test/flpSandbox.html#interactionitems-tile',
        pages: {
			onTheInteractions_ItemsList: Interactions_ItemsList,
			onTheInteractions_ItemsObjectPage: Interactions_ItemsObjectPage
        },
        async: true
    });

    return runner;
});

