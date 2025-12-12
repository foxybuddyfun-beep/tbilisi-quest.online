// Shared data for all pages

export const LOCATIONS = {
  Hotel: {
    title: "Location — Hotel (The Biltmore Hotel)",
    howTo:
`The Biltmore Hotel
Go to the main entrance of the hotel.
Stand facing the building and walk towards the left corner.
There you will find a sculpture shaped like a head.`,
    links: ["https://maps.app.goo.gl/dv6CPX44Wceowc1t6"]
  },
  MoMA: {
    title: "Location — MoMA (Museum of Modern Art)",
    howTo: `Go to the main entrance.`,
    links: ["https://maps.app.goo.gl/eAj17x2wFSpje9J17"]
  },
  "National Gallery": {
    title: "Location — National Gallery",
    howTo: `Go to the main entrance.`,
    links: ["https://maps.app.goo.gl/YDCnjBTZRxwo5SY36"]
  },
  Parks: {
    title: "Location — Parks (April 9 Park + Alexander Park)",
    howTo: `Go to the parks (they are beside each other).`,
    links: [
      "https://maps.app.goo.gl/WgYVXnt3roBrHykx8",
      "https://maps.app.goo.gl/4PsYhED29uhffrs96"
    ]
  },
  Orbeliani: {
    title: "Location — Orbeliani Garden",
    howTo: `Go to Orbeliani Garden.`,
    links: ["https://maps.app.goo.gl/5jVNjS5ZWBceLamJ8"]
  },
  Laghidze: {
    title: "Location — Laghidze (Revaz Laghidze Sculpture)",
    howTo: `Find the Revaz Laghidze sculpture.`,
    links: ["https://maps.app.goo.gl/w68w4MC2wvqDA3GJ9"]
  },
  Ambassadori: {
    title: "Location — Ambassadori",
    howTo:
`Ambassadori Hotel
Go to the Ambassadori Hotel from the opposite side of the main entrance, from Ioane Shavteli Street.
Walk to the monument alley.
Find the first monument — a man with a broom.`,
    links: ["https://maps.app.goo.gl/KYpMYbJ4c3FxG6Xk9"]
  },
  Gurji: {
    title: "Location — Gurji (Ietim Gurji Sculpture)",
    howTo: `Find the Ietim Gurji sculpture.`,
    links: ["https://maps.app.goo.gl/oZK7UNEXvPppmTe3A"]
  },
  Canyon: {
    title: "Location — Canyon",
    howTo: `Go to the canyon spot between sulfur baths and the waterfall.`,
    links: ["https://maps.app.goo.gl/X2ncUGt3mfv8HVd98"]
  }
};

export const TASKS = {
  Hotel: {
    title: "Task — Philosopher",
    text:
`He is a philosopher, and his instrument is consciousness.
The sculptor tried to show how far this philosopher could reach with his mind.

Today, however, he is often confused with another person -
someone whose main superpower is reaction speed.

Even if you don’t know who he is confused with,
you can still name him`,
    answers: ["Mamardashvili"]
  },
  MoMA: {
    title: "Task — Zurab",
    text:
`You may have never stepped inside the Zurab Tsereteli Museum on Rustaveli Avenue,
yet you have almost certainly seen his works — they appear all over the world.
And one of his most provocative sculptures, based on a famous myth, is something many people carry with them every day without even noticing.
Try to guess what it is without entering the museum.`,
    answers: ["Apple (The Apple of Temptation / The Apple of Discord)"]
  },
  "National Gallery": {
    title: "Task — Artist",
    text:
`Find the monument to David Kakabadze near the National Gallery of Georgia.
Three clues hidden on the monument will help you:
— A written inscription revealing his profession
— A paintbrush — the artist’s tool
…and one more element you must discover on your own.

Which third object hints that this monument is dedicated to an artist?`,
    answers: ["a palette"]
  },
  Parks: {
    title: "Task — Friend",
    text:
`In the two parks beside each other — including the one you are standing in now — you will find many monuments.
Some of them depict artists whose profession is not immediately clear.
But one artist immortalized here can be identified with the help of his friend.

Question:
Find the monument and name his friend.`,
    answers: ["the dog"]
  },
  Orbeliani: {
    title: "Task — Team",
    text:
`Here you see a fountain with six musician figures.
Imagine they decided to form a team to play “What? Where? When?”.
But only one of them was allowed to join.

Once you understand why he was chosen — name the insect associated with that reason.
Note: this is a humorous fantasy of the author, not a historical fact.`,
    answers: ["a butterfly"]
  },
  Laghidze: {
    title: "Task — Read",
    text:
`When colleagues of this person read his surname on this monument,
they often read it incorrectly.
Note: this is a humorous fantasy of the author, not a historical fact.

Question 1:
What is this person’s profession?

Question 2:
How do his colleagues misread his surname?`,
    answers: ["Musician", "La-gi-Fa-e"]
  },
  Ambassadori: {
    title: "Task — Sweeper",
    text:
`Although this man’s profession is primitive, and it is literally “written on his forehead,”
he became well-known thanks to the paintings of a famous Georgian artist.
Hint: This is a quiz, not an art history exam — the answers are right in front of you.

Question 1:
Name the artist.

Question 2:
In which style did he paint?`,
    answers: ["Pirosmani", "Primitivism"]
  },
  Gurji: {
    title: "Task — Arch",
    text:
`When people learn this person’s profession,
they often mistakenly name the wrong bird sitting on the arch.
In reality, the bird is just a pigeon.

Question 1:
What is his profession?

Question 2:
Which bird do people think they see on the arch — the one they confuse it with?`,
    answers: ["Singer", "Nightingale"]
  },
  Canyon: {
    title: "Task — DNA",
    text:
`Here, between the sulfur baths and the waterfall — the very place where the story of Tbilisi begins —
there is no monument called “The DNA of Love.”
But if you truly want to, you can find it.

Try to decode the formula of the “DNA of Love”
and name its three components.`,
    answers: ["the bridge", "the locks", "the spiral staircase (staircase accepted)"]
  }
};

// Order per team (your exact sequences)
export const TEAM_ORDERS = {
  1: ["Hotel","MoMA","National Gallery","Parks","Orbeliani","Laghidze","Ambassadori","Gurji","Canyon"],
  2: ["National Gallery","Parks","MoMA","Hotel","Canyon","Gurji","Ambassadori","Laghidze","Orbeliani"],
  3: ["Orbeliani","Laghidze","Ambassadori","Gurji","Canyon","Hotel","MoMA","National Gallery","Parks"]
};
