import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Initialize a variable to cache the database connection,
// checking for a cached connection in a global variable first. (global as any)
let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async () => {
    // If a cached connection exists, return it immediately.
    if (cached.conn) return cached.connect;

    // Ensure the MONGODB_URI environment variable is present.
    if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

    // Establish a database connection, reusing a cached promise if available.
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'scheduler-app',
        bufferCommands: false // Disable command buffering for immediate execution.
    });

    // Await the connection promise and cache the connection object for future use.
    cached.conn = await cached.promise;
    return cached.conn;
}

// **Purpose of this code:**
// - Efficiently manages database connections in serverless environments where functions execute in separate processes.
// - Avoids redundant connections for each function invocation, improving performance and resource usage.
// - Caches the connection for reuse across function calls.
// - Prioritizes immediate command execution for serverless functions with potentially short lifespans.