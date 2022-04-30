import { ServiceAccount } from 'firebase-admin';
import {initializeApp, applicationDefault, cert} from 'firebase-admin/app';
import {getFirestore, Timestamp, FieldValue} from 'firebase-admin/firestore';
import serviceAccount from '../../service_accountKey.json';

initializeApp({
    credential:cert(serviceAccount as ServiceAccount)
});
const db = getFirestore();
export {db};