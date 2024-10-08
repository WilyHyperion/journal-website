import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    ["token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT ", "username=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT ", "id=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT "]
  );
  res.status(200).json({ message: "Logged out" });
}
