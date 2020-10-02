import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { openDbChamp } from "./openDb";
import { verify } from "jsonwebtoken";

export interface NextApiRequestExtended extends NextApiRequest {
  userId: number | string | null;
  userName: string | null;
}

export default nextConnect<NextApiRequestExtended, NextApiResponse>({
  onError(error, req, res, next) {
    res.status(501).json({ error: `${error.message} ` });
  },
  onNoMatch(req, res, next) {
    res.status(405).json({ error: `Method ${req.method} is Not Allowed` });
  },
}).use((req, res, next) => {
  req.userId = null;
  req.userName = null;

  const { authorization } = req.headers;
  if (!authorization) {
    throw new Error("Not authorized!");
    next();
  } else {
    verify(authorization, "your-256-bit-secret", (error: any, decoded: any) => {
      if (!error && decoded) {
        req.userId = decoded.userId;
        req.userName = decoded.userName;
      } else {
        throw new Error("Not authorized!");
      }
      next();
    });
  }
});
