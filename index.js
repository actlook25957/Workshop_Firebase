const express = require("express");
const firebase = require("./db");
const bodyParser = require("body-parser");
const firestore = firebase.firestore();

global.XMLHttpRequest = require("xhr2");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Item/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await firestore.collection("Item").doc(id);
    const data = await item.get();

    if (!data.exists) {
      res.status(404).send("item with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/Animals", async (req, res, next) => {
  try {
    const item = await firestore.collection("Animals");
    const data = await item.get();
    const itemArray = [];
    if (data.empty) {
      res.status(404).send("No item record found");
    } else {
      data.forEach((doc) => {
        const docData = doc.data();
        var itemData = {
          id: doc.id,
          itemData: docData,
        };

        itemArray.push(itemData);
      });
      res.send(itemArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/random/animal", async (req, res, next) => {
  try {
    const item = await firestore.collection("Animals");
    const data = await item.get();
    const itemArray = [];
    if (data.empty) {
      res.status(404).send("No Animal record found");
    } else {
      data.forEach((doc) => {
        const docData = doc.data();
        itemArray.push(docData);
      });

      const randomItem =
        itemArray[Math.floor(Math.random() * itemArray.length)];
      res.send(randomItem);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/Item/:id", async (req, res, next) => {
  try {
      const id = req.params.id;
      await firestore.collection("Item").doc(id).delete();
      res.send("item record deleted successfuly");
  } catch (error) {
      res.status(400).send(error.message);
  }
});

app.post("/Animal", async (req, res, next) => {
  try {
    const animal = req.body
    await firestore.collection('Animals').add(animal);
    res.status(200).send(animal);
} catch (error) {
    res.status(400).send(error.message);
}
});

app.get("/Animal/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await firestore.collection("Animals").doc(id);
    const data = await item.get();

    if (!data.exists) {
      res.status(404).send("Animal with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/Animal/:id", async (req, res, next) => {
  try {
      const id = req.params.id;
      const data = req.body;
      const animal = await firestore.collection("Animals").doc(id);
      await animal.update(data);
      res.send(data);
  } catch (error) {
      res.status(400).send(error.message);
  }
});



app.listen(3001, () => console.log("App is listening on port " + 3001));
