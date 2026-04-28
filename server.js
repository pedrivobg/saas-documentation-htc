const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT || '3000', 10);

// Serve static files from 'docs' directory
app.use(express.static(path.join(__dirname, 'docs')));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

function startServer(port) {
  const server = http.createServer(app);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  Porta ${port} ocupada, tentando ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('❌ Erro no servidor:', err);
    }
  });

  server.listen(port, () => {
    console.log(`\n  ✅  Documentação rodando em http://localhost:${port}`);
    console.log(`  🚀  Pressione Ctrl+C para encerrar\n`);
  });
}

startServer(DEFAULT_PORT);
