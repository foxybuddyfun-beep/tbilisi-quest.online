// Shared data for all pages

export const LOCATIONS = {
  Hotel: {
    title: "Location — Hotel (The Biltmore Hotel)",
    howTo:
`The Biltmore Hotel
Go to the main entrance of the hotel.
Stand facing the building and walk towards the left side of the building.
There you will find a sculpture shaped like a head in a raised area with stairs.`,
    links: ["https://maps.app.goo.gl/dv6CPX44Wceowc1t6"]
  },

  MoMA: {
    title: "Location — MoMA (Museum of Modern Art)",
    howTo:
`[[Museum of Modern Art]]
Explore the area around the building from the main entrance.`,
    links: ["https://maps.app.goo.gl/eAj17x2wFSpje9J17"]
  },

  "National Gallery": {
    title: "Location — National Gallery",
    howTo:
`[[National Gallery]]
Go to the main entrance.`,
    links: ["https://maps.app.goo.gl/YDCnjBTZRxwo5SY36"]
  },

  Parks: {
    title: "Location — Parks (April 9 Park + Alexander Park)",
    howTo:
`April 9 Park
Alexander Park
The two parks are located next to each other.`,
    links: [
      "https://maps.app.goo.gl/WgYVXnt3roBrHykx8",
      "https://maps.app.goo.gl/4PsYhED29uhffrs96"
    ]
  },

  Orbeliani: {
    title: "Location — Orbeliani Garden",
    howTo:
`Orbeliani Garden
Go to Orbeliani Garden.`,
    links: ["https://maps.app.goo.gl/5jVNjS5ZWBceLamJ8"]
  },

  Laghidze: {
    title: "Location — Laghidze (Revaz Laghidze Sculpture)",
    howTo:
`Revaz Laghidze Sculpture
Find the sculpture.`,
    links: ["https://maps.app.goo.gl/w68w4MC2wvqDA3GJ9"]
  },

  Ambassadori: {
    title: "Location — Ambassadori",
    howTo:
`Ambassadori Hotel
Go to the Ambassadori Hotel from the opposite side of the main entrance, from Ioane Shavteli Street.
Walk to the monument alley past the [[puppet theater]].
At the corner of the building, find the statue of the man holding a cane.`,
    links: ["https://maps.app.goo.gl/KYpMYbJ4c3FxG6Xk9"]
  },

  Gurji: {
    title: "Location — Gurji (Ietim Gurji Sculpture)",
    howTo:
`Ietim Gurji Sculpture
Find the sculpture.`,
    links: ["https://maps.app.goo.gl/oZK7UNEXvPppmTe3A"]
  },

  Canyon: {
    title: "Location — Canyon",
    howTo:
`Canyon
Go to the canyon area between the sulfur baths and the waterfall.`,
    links: ["https://maps.app.goo.gl/X2ncUGt3mfv8HVd98"]
  }
};

export const TASKS = {
  Hotel: {
    title: "Task",
    text:
`[[The statue is of a philosopher]], and his instrument is consciousness.
The sculptor tried to show how far this philosopher could reach with his mind.

Today, however, he is often confused with [[another person of the same name]] —
someone whose main superpower is reaction speed.

Even if you don’t know who he is confused with,
you can still discover his name. What is it?`,
    answers: ["Mamardashvili"]
  },

  MoMA: {
    title: "Task",
    text:
`You may have never stepped inside the [[Zurab Tsereteli]] Museum on Rustaveli Avenue before,
but you may have seen his works — they appear all over the world.

One of his most provocative sculptures, based on a famous story from the Bible,
is by name related to something many people carry with them every day.

Try to guess what it is without entering the museum.`,
    answers: [
      "The Apple of Temptation",
      "The Apple of Discord",
      "Apple"
    ]
  },

  "National Gallery": {
    title: "Task",
    text:
`Find the monument to [[David Kakabadze]] near the National Gallery of Georgia.

Three clues hidden on the monument will help you:
— A written inscription revealing his profession
— A paintbrush — the artist’s tool
— And one more element you must discover on your own

What is the third object that hints that this monument is dedicated to an artist?`,
    answers: ["a palette"]
  },

  Parks: {
    title: "Task",
    text:
`In the two parks beside each other — including the one you are standing in now —
you will find many monuments.

Some of them depict artists whose profession is not immediately clear.
But [[one artist]] immortalized here can be identified with the help of his best friend.

Question:
Find the monument and identify what is his best friend.`,
    answers: ["the dog"]
  },

  Orbeliani: {
    title: "Task",
    text:
`Here you see a fountain with six musician figures.

The six friends decided to first take part in the TV show “[ [What? Where? When?] ]” in Moscow,
and then quickly fly to New York to go to the Opera.

However, only one of them was allowed in — for the same reason in both places.

Figure out who was chosen, and why.`,
    answers: ["the musician wearing a bow tie (butterfly tie)"]
  },

  Laghidze: {
    title: "Task",
    text:
`When colleagues of [[this person]] read his surname on this monument,
they often read it incorrectly.

Question 1:
What is this person’s profession?

Question 2:
How do his colleagues misread his surname?`,
    answers: [
      "Musician / Composer",
      "La-gi-Fa-e"
    ]
  },

  Ambassadori: {
    title: "Task",
    text:
`Although [[this man’s]] profession is primitive, and it is literally “written on his forehead,”
he became well-known thanks to the paintings of a famous Georgian artist.

Hint: This is a quiz, not an art history exam — the answers are right in front of you.

Question 1:
Name the artist.

Question 2:
In which style did he paint?`,
    answers: [
      "Pirosmani",
      "Primitivism"
    ]
  },

  Gurji: {
    title: "Task",
    text:
`When people learn [[this person’s]] profession,
they often mistakenly assume what kind of bird is sitting on the arch.

In reality, the bird is just a pigeon.

Question 1:
What is his profession?

Question 2:
Which bird do people think they see on the arch — the one they confuse it with?`,
    answers: [
      "Singer",
      "Nightingale"
    ]
  },

  Canyon: {
    title: "Task",
    text:
`Here, between the sulfur baths and the waterfall —
the very place where the [[story of Tbilisi begins]] —
there is no monument called “The DNA of Love.”

But if you truly want to, you can find elements of one.

Try to decode the formula of the “DNA of Love”
and name three components among things you see.`,
    answers: [
      "the bridge",
      "the locks",
      "the spiral staircase"
    ]
  }
};

/**
 * Wiki popups (Team + Host)
 * Key must match exactly what is inside [[...]]
 */
export const WIKI = {
  "The statue is of a philosopher":
    "Georgian philosopher (1930–1990) exploring consciousness, thought, and human awareness",

  "another person of the same name":
    "Famous Georgian figure, face on billboards, kids wear his name",

  "Museum of Modern Art":
    "Contemporary Georgian art, bold forms, Zurab Tsereteli legacy",

  "Zurab Tsereteli":
    "(1934–2025) Georgian artist, monumental works in USA, France, Spain",

  "National Gallery":
    "Georgian fine art, national masters, nineteenth–twentieth century classics",

  "David Kakabadze":
    "(1889–1952) Georgian modernist painter, pioneer of abstract art",

  "one artist":
    "(1827–1906) Hungarian painter and court artist. Worked in Georgia, depicting its people, landscapes, and cultural life",

  "What? Where? When?":
    "Legendary intellectual quiz show running over 50 years; many players became iconic, meme-worthy cultural figures known across the post-Soviet world",

  "this person":
    "A Georgian cultural figure whose creations are instantly recognizable, deeply emotional, and widely known across generations",

  "puppet theater":
    "Iconic Tbilisi puppet theater famous for poetic, bittersweet performances and its crooked clock tower, where an angel appears daily to strike the hour",

  "this man’s":
    "The janitor Rashid, who lived in the late nineteenth and early twentieth century, was a close friend of the artist, often helping him despite his own humble and difficult life",

  "this person’s":
    "A Tbilisi cultural figure (1875–1940), known for emotional depth, powerful expression, and a legacy that lived through voices, memory, and the streets of the city",

  "story of Tbilisi begins":
    "According to legend, Tbilisi was founded when King Vakhtang Gorgasali discovered hot sulfur springs after his falcon fell into them during a hunt"
};

// Order per team (unchanged)
export const TEAM_ORDERS = {
  1: ["Hotel","MoMA","National Gallery","Parks","Orbeliani","Laghidze","Ambassadori","Gurji","Canyon"],
  2: ["National Gallery","Parks","MoMA","Hotel","Canyon","Gurji","Ambassadori","Laghidze","Orbeliani"],
  3: ["Orbeliani","Laghidze","Ambassadori","Gurji","Canyon","Hotel","MoMA","National Gallery","Parks"]
};
