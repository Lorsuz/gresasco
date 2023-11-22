#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js';
import * as http from 'http';

// Importe a função diretamente
import createDebug from 'debug';

// Use a função para criar uma instância de debug
const debug = createDebug('server:server');

/**
 * Get port from environment and store in Express.
 */

const port: string | number | false = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server: http.Server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log(`API running on localhost:${port}`));
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string): number | string | false {
	const port: number = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException): void {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind: string = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void {
	const addr = server.address();
	const bind = typeof addr === 'string' ? `pipe ${addr}` : addr === null ? 'no address' : `port ${addr.port}`;
	debug(`Listening on ${bind}`);
}
