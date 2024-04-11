import Database from "better-sqlite3";
const db = new Database("database.db"); // either creates a db, or gets the existing one

// create games table
db.exec(`
    CREATE TABLE IF NOT EXISTS review (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reviewer TEXT,
        subject TEXT NOT NULL,
        message INTEGER NOT NULL,
        date TEXT NOT NULL,
        rating INTEGER
        
    )
`);

const insertStatement = db.prepare(
  `INSERT INTO review (reviewer,subject, message, date, rating) VALUES (?, ?, ?, ?, ?)`
);

insertStatement.run(
  "Jack Nicolson",
  "Views to die for",
  "The Overlook Hotel is a truly remarkable place. The grandeur and history of this hotel are awe-inspiring. The stunning mountain views and secluded location create a serene and peaceful atmosphere. The staff is welcoming and attentive, ensuring a comfortable stay. The architecture and design of the hotel are captivating, reflecting a bygone era of elegance. It's a perfect retreat for those seeking relaxation and tranquility. The Overlook Hotel offers an unforgettable experience that will leave you with cherished memories. Here's to the charm and beauty of The Overlook, I can see me staying forever",
  "10/06/1921 18:06:20",
  5
);
insertStatement.run(
  "Shelley Duvall",
  "Grand setting",
  "The Overlook Hotel is quite an experience, to say the least. The location is undeniably breathtaking, with the majestic mountains surrounding it. The hotel itself is grand and exudes a sense of history. However, I must admit, there were moments during my stay that left me feeling a bit on edge. There's an eerie ambiance that permeates the hallways, and certain areas seemed to have a lingering presence. The staff was professional, but I couldn't help but sense an underlying tension.",
  "01/02/1975 10:06:20",
  3
);
insertStatement.run(
  "Stephen King",
  "Time for a good book",
  "What a fascinating destination that sparks the imagination. From the moment you arrive, you can sense the rich history that permeates its halls. The grandeur of the architecture and the breathtaking mountain views make it an ideal setting for a writer seeking inspiration. The staff is friendly and accommodating, making you feel right at home. While there is a hint of mystery in the air, it only adds to the charm and allure of the place. The Overlook Hotel is a haven for creative minds, a retreat where the stories seem to come alive. It's a perfect blend of tranquility and inspiration, making it a great place to dive into a good book or let your own ideas take flight.",
  "23/06/1974 19:06:20",
  5
);
