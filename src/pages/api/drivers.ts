// import { NextApiRequest, NextApiResponse } from "next";
import handler from "../../handler";
import { openDbChamp } from "../../openDb";

export default handler
  .get(async (req, res) => {
    const db = await openDbChamp();
    const allDrivers = await db.all(`SELECT * FROM Driver`);
    res
      .status(200)
      .json({ name: req.userName, userId: req.userId, allDrivers });
  })
  .post(async (req, res) => {
    if (req.userId !== 1234) {
      res.status(401).json({ message: "Sorry you are not 1234!" });
      return;
    }
    const db = await openDbChamp();
    const { lastID } = await db.run(
      `INSERT INTO Driver (name, titles) values (?, ?)`,
      req.body.name,
      req.body.titles
    );
    res.status(201).json({ ...req.body, id: lastID });
  });

/*
export default async function getDrivers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      {
        const db = await openDb();
        const allDrivers = await db.all(`SELECT * FROM Driver`);
        res.status(200).json(allDrivers);
      }
      break;
    case "POST":
      {
        const db = await openDb();
        const { lastId } = await db.run(
          `INSERT INTO Driver (name, titles) values (?, ?)`,
          req.body.name,
          req.body.titles
        );
        res.status(201).json({ ...req.body, id: lastId });
      }
      break;

    default:
      res.status(405).end(`Method ${req.method} is Not Allowed`);
  }
}
*/
