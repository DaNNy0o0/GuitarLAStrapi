module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce09b2ha6gdsa60htla0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_p3m7'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'PUxgVK8uiB6YHWvdoWwwsnXIYaXdMgoY'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
