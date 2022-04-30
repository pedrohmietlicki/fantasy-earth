import { getIntentName, getRequestType, getSlotValue, HandlerInput, RequestHandler } from "ask-sdk";
import {Response} from 'ask-sdk-model';
const choseTypeIntentHandler : RequestHandler = {
    canHandle: function (input: HandlerInput): boolean | Promise<boolean> {
        return getRequestType(input.requestEnvelope) == 'IntentRequest' && getIntentName(input.requestEnvelope) == 'choseType';
    },
    handle: function (input: HandlerInput): Response | Promise<Response> {
        const charaterClass = getSlotValue(input.requestEnvelope, 'type');
        const speech = `Agora que você é um ${charaterClass}, você está pronto para entrar nesse mundo`;
        return input.responseBuilder.speak(speech).getResponse();
    }
} 
export default choseTypeIntentHandler;