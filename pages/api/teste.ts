import { teste } from "@/scripts/db/neon";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const resp = await teste()
    res.send({response: resp});
}
