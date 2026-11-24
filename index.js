const express = require("express");
const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.json({ message: "RanTech Agenda API funcionando" });
});

app.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});