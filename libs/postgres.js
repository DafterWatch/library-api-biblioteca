const { Client } = require('pg')

async function getConection() {
    const client = new Client({
        host: '172.18.0.2',
        port: 5432,
        user: 'root',
        password: 'admin123',
        database: 'UnivalleBiblioteca'
    })

    await client.connect()
    return client

}
module.exports = getConection