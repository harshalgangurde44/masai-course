const express = require("express");
const fs = require("fs");
const router = express.Router();
const validatorMiddleware = require("../middlewares/validatorMiddleware");

// Endpoint: /marvel/addnew
router.post("/addnew", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("db.json"));
    const { name, alias, power_level, role } = req.body;
    const newHero = {
      id: db.marvel.length + 1,
      name,
      alias,
      power_level,
      role,
    };
    db.marvel.push(newHero);
    fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
    res.status(200).send("New superhero has been added");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint: /marvel
router.get("/", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("db.json"));
    const marvelData = req.query.alias
      ? db.marvel.find((hero) => hero.alias === req.query.alias)
      : db.marvel;
    res.status(200).json(marvelData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint: /marvel/:id
router.get("/:id", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("db.json"));
    const hero = db.marvel.find((hero) => hero.id === parseInt(req.params.id));
    if (hero) {
      res.status(200).json(hero);
    } else {
      res.status(404).send("Hero not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint: /marvel/update/:id
router.patch("/update/:id", validatorMiddleware, (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("db.json"));
    const { name, alias, power_level, role } = req.body;
    const heroIndex = db.marvel.findIndex(
      (hero) => hero.id === parseInt(req.params.id)
    );
    if (heroIndex !== -1) {
      db.marvel[heroIndex] = {
        id: parseInt(req.params.id),
        name,
        alias,
        power_level,
        role,
      };
      fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
      res.status(200).send("Patched Character Details");
    } else {
      res.status(404).send("Hero not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint: /marvel/delete/:id
router.delete("/delete/:id", validatorMiddleware, (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("db.json"));
    const heroIndex = db.marvel.findIndex(
      (hero) => hero.id === parseInt(req.params.id)
    );
    if (heroIndex !== -1) {
      db.marvel.splice(heroIndex, 1);
      fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
      res.status(200).send("Deleted Character Details");
    } else {
      res.status(404).send("Hero not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
