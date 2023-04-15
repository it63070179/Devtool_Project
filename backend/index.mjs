import {
    ScanCommand,
    DynamoDBClient
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from '@aws-sdk/util-dynamodb';

const dynamo = new DynamoDBClient({});


export const handler = async (event) => {
    try {
        switch (event.path) {
            case '/getdata': {
                return await post(event);
            }
            case '/getdatanote': {
                return await note(event);
            }
            case 'OPTIONS': { // เพิ่ม options เพื่อทำการ preflight สำหรับ CORS
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                        'Content-Type': 'application/json'
                    },
                    body: ''
                }
            }
        }
    }
    catch (err) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ error: err.message })
        };
    }
};
async function post() {
    try {
        const params = {
            TableName: 'post'
        };
        const data = await dynamo.send(new ScanCommand(params));
        const items = data.Items.map((item) => unmarshall(item));
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: err })
        };
    }
};

async function note() {
    try {
        const params = {
            TableName: 'notetable'
        };
        const data = await dynamo.send(new ScanCommand(params));
        const items = data.Items.map((item) => unmarshall(item));
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: err.message })
        };
    }
};