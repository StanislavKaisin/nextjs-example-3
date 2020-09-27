const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: "./microphones.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });
  const microphones = await db.all("select * from microphone");
  console.log(JSON.stringify(microphones, null, 2));
})();
