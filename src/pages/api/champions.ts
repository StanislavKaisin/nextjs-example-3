import { openDbChamp } from "../../openDb";

import handler from "../../handler";

export default handler
  .get(async (req, res) => {
    const db = openDbChamp();
    const champions = await (await db).all(`
    SELECT * 
    FROM Driver
    WHERE titles > 0 
    ORDER BY titles DESC, name ASC`);
    res.status(200).json(champions);
  })
  .post((req, res, next) => {
    throw new Error("Somethihg went wrong, sorry!");
  });

/*
export default async function getChampions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = openDbChamp();
  const champions = await (await db).all(`
    SELECT * 
    FROM Driver
    WHERE titles > 0 
    ORDER BY titles DESC, name ASC`);
  res.status(200).json(champions);
}
*/
