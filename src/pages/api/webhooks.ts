/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream';

async function buffer(readable: Readable) {
    const chunks = [];

    for await (const chunck of readable) {
        chunks.push(
            typeof chunck === "string" ? Buffer.from(chunck) : chunck
        )
    }

    return Buffer.concat(chunks)
}

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const buf = await buffer(req);
        const secret = req.headers['stripe-signature'];

        console.log("secret =>", secret)

        res.status(200).json({ok: true});
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed')
    }
}