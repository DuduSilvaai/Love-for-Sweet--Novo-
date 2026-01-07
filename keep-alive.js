// Script para manter o backend Render.com acordado
// Execute: node keep-alive.js

import https from 'https';

const BACKEND_URL = 'https://love-for-sweet-novo.onrender.com/';
const INTERVAL = 14 * 60 * 1000; // 14 minutos (antes dos 15 min de sleep)

function pingBackend() {
    const startTime = Date.now();
    
    https.get(BACKEND_URL, (res) => {
        const responseTime = Date.now() - startTime;
        console.log(`✅ Backend OK - ${new Date().toLocaleString()} (${responseTime}ms)`);
    }).on('error', (err) => {
        console.log(`❌ Backend Error - ${new Date().toLocaleString()}: ${err.message}`);
    });
}

console.log('🚀 Keep-alive iniciado para:', BACKEND_URL);
console.log('⏰ Ping a cada 14 minutos');

// Ping inicial
pingBackend();

// Ping periódico
setInterval(pingBackend, INTERVAL);