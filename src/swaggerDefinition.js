const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Nome da sua API",
    version: "1.0.0",
    description: "Uma breve descrição da sua API.",
    contact: {
      name: "Seu Nome",
      email: "seu@email.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Servidor de desenvolvimento",
    },
  ],
};

module.exports = swaggerDefinition;
