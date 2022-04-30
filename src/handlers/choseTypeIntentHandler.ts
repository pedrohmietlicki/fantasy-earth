import { getIntentName, getRequestType, getSlotValue, getUserId, HandlerInput, RequestHandler } from "ask-sdk";
import {Response} from 'ask-sdk-model';
import UserRepository from "../database/repository/UserRepository";
const userRepository = new UserRepository(); 
const choseTypeIntentHandler : RequestHandler = {
    canHandle: function (input: HandlerInput): boolean | Promise<boolean> {
        return getRequestType(input.requestEnvelope) == 'IntentRequest' && getIntentName(input.requestEnvelope) == 'choseType';
    },
    handle: async function (input: HandlerInput): Promise<Response> {
        const character_type = getSlotValue(input.requestEnvelope, 'type');
        const speech = `Agora que você é um ${character_type}, você está pronto para entrar nesse mundo`;
        const amazon_id = getUserId(input.requestEnvelope);
        await userRepository.CreateUser({character_type,amazon_id})
        return input.responseBuilder.speak(speech).getResponse();
    }
} 
export default choseTypeIntentHandler;