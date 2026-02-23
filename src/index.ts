import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import studentsRoute from './students/students.route.js'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS config
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Origin', 'Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // ✅ FIXED
  maxAge: 600
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Mount students route
app.route('/students', studentsRoute)

// Start server
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
