const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: "f1.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });

  const drivers = await db.all("SELECT * FROM Driver");
  console.log("ALL Drivers", JSON.stringify(drivers, null, 2));
})();
