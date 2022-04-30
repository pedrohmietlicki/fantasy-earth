import { HandlerInput, RequestHandler} from "ask-sdk";
import {Response} from 'ask-sdk-model'
const LaunchHandlerRequest: RequestHandler = {
    canHandle(input: HandlerInput): boolean {
        const request = input.requestEnvelope.request;
        return request.type == "LaunchRequest";
    },
    handle(input: HandlerInput): Response{
        const speechText = 'Olá vamos criar nosso personagem, primeiro vamos escolher sua classe, você quer ser um cavaleiro ou um mago ?';
        return input.responseBuilder.speak(speechText).withShouldEndSession(false).getResponse();
    }
}
export default LaunchHandlerRequest;