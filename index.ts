import express from 'express';
import {getRequestType, getSlot, ResponseFactory,} from 'ask-sdk';
import { Router, Request, Response} from 'express';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { SkillBuilders } from 'ask-sdk-core';
import LaunchHandlerRequest from './src/handlers/LaunchHandlerRequest';
import choseTypeIntentHandler from './src/handlers/choseTypeIntentHandler';


const app = express();
const route = Router();
const skillBuilder = SkillBuilders.custom().addRequestHandlers(
    LaunchHandlerRequest,
    choseTypeIntentHandler
    );
const skill = skillBuilder.create();
const adapter = new ExpressAdapter(skill);

route.post('/',adapter.getRequestHandlers());

app.use(route);
app.listen(3000,()=> {
    console.log('Rodando');
});