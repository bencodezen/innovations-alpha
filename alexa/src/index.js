var Alexa = require('alexa-sdk')

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context)

	// alexa.appId = 'amzn1.echo-sdk-ams.app.1234';

	///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

	alexa.registerHandlers(handlers)
	alexa.execute()
}

var handlers = {
	LaunchRequest: function() {
		this.emit(
			':tell',
			'Good afternoon Sally! You have three upcoming calendar events, two changes to tracked legislation, and one new contract opportunity.'
		)
	},

	OpIntelIntent: function() {
		this.emit(
			':tell',
			'You were matched with an opportunity with the US Navy for IT Services that is due on October 20th, 2017.'
		)
	},

	FavoriteOpportunityIntent: function() {
		this.emit(':tell', "No problem. I've added it to your favorites!")
	}
}
