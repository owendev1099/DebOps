const express = require("express");
const client = require("prom-client"); // Cliente de Prometheus
const app = express();
const port = 3000;

// 1. Habilitar métricas por defecto de Node.js (Memoria RAM del contenedor, CPU del proceso)
client.collectDefaultMetrics();

// 2. Crear métricas personalizadas de la aplicación
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total de peticiones HTTP procesadas",
  labelNames: ["metodo", "ruta", "estado_http"],
});

const activeUsersGauge = new client.Gauge({
  name: "active_users_current",
  help: "Número actual de usuarios activos simulados",
});

// Middleware para contar peticiones
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      metodo: req.method,
      ruta: req.path,
      estado_http: res.statusCode,
    });
  });
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<h1>¡Servidor de Producción Funcionando!</h1><p>Login básico activo.</p>",
  );
});

// 3. RUTA VITAL: Endpoint /metrics donde Prometheus leerá los datos
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.send(await client.register.metrics());
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
