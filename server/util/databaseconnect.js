const Sequelize = require('sequelize');

// Note: bagi yang belum terhubung, bisa sesuaikan config masing2. Sequelize(<database>, <user>, <password>).
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    // Opsional untuk port / jika portnya 3306 untuk mysql maka tidak perlu menulis port
    // Nggak mau di port 5400, saya ganti default port postgresql 5432 baru bisa.
    port: process.env.DB_PORT || 5432
});

module.exports = sequelize;