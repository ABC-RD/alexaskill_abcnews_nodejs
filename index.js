'use strict';

const Alexa = require('alexa-sdk');
var constants = require('./constants');
var stateHandlers = require('./stateHandlers');
var audioEventHandlers = require('./audioEventHandlers');
var categories = require('./categories');


const languageStrings = {
    'en-GB': {
        translation: {
            CATEGORY: categories.CATEGORIES_EN_GB,
            SKILL_NAME: 'ABC news',
            WELCOME_MESSAGE: "Welcome to %s. You can say, get me the news.",
            WELCOME_REPROMT: 'You can say, get me the news, to begin.',
            HELP_MESSAGE: "You can ask ABC such as, get me the news, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMT: "You can say things like, get me the news, or, read the breaking news, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            CATEGORY_REPEAT_MESSAGE: 'Try saying repeat.',
            CATEGORY_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            CATEGORY_NOT_FOUND_REPROMPT: ' You can say, get me the news, to begin.',
            CATEGORY_NOT_FOUND_WITH_ITEM_NAME: 'the news for %s. ',
            CATEGORY_NOT_FOUND_WITHOUT_ITEM_NAME: 'that news. ',
        },
    },
    'en-US': {
        translation: {
            CATEGORY: categories.CATEGORIES_EN_US,
            SKILL_NAME: 'ABC news',
            WELCOME_MESSAGE: "Welcome to %s. You can say, get me the news.",
            WELCOME_REPROMT: 'You can say, get me the news, to begin.',
            HELP_MESSAGE: "You can ask ABC such as, get me the news, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMT: "You can say things like, get me the news, or, read the breaking news, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            CATEGORY_REPEAT_MESSAGE: 'Try saying repeat.',
            CATEGORY_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            CATEGORY_NOT_FOUND_REPROMPT: ' You can say, get me the news, to begin.',
            CATEGORY_NOT_FOUND_WITH_ITEM_NAME: 'the news for %s. ',
            CATEGORY_NOT_FOUND_WITHOUT_ITEM_NAME: 'that news. ',
        },
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    //alexa.registerHandlers(handlers);
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        stateHandlers.startModeIntentHandlers,
        stateHandlers.playModeIntentHandlers,
        stateHandlers.remoteControllerHandlers,
        stateHandlers.resumeDecisionModeIntentHandlers,
        audioEventHandlers
    );
    alexa.execute();
};
