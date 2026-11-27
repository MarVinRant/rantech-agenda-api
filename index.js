
const express = require("express");

const app = express();
const porta = 3000;

const agendamentos = [
  {
    id: 1,
    cliente: "Cliente Teste",
    barbeiro: "João",
    data: "2026-12-01",
    horario: "10:00",
    status: "confirmado"
  },
  {
    id: 2,
    cliente: "Maria",
    barbeiro: "Carlos",
    data: "2026-12-01",
    horario: "11:00",
    status: "confirmado"
  }
];

// Rota inicial
app.get("/", (req, res) => {
  res.json({ mensagem: "RanTech Agenda API funcionando" });
});

// Listar todos os agendamentos
app.get("/agendamentos", (req, res) => {
  res.json(agendamentos);
});

// Consultar um agendamento pelo ID
app.get("/agendamentos/:id", (req, res) => {
  const id = Number(req.params.id);

  const agendamento = agendamentos.find(
    (item) => item.id === id
  );

  if (!agendamento) {
    return res.status(404).json({
      mensagem: "Agendamento não encontrado"
    });
  }

  res.json(agendamento);
});

// Iniciar servidor
app.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});
