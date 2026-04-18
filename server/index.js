import { env } from "cloudflare:workers";
import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Express.js API Server running on Cloudflare Workers!" });
});

// GET all members
app.get('/api/members', async (req, res) => {
  try {
	// DB is available from env as a binding configured for the database in wrangler.jsonc

	// Access DB by preparing a Query, binding JS variables to the SQL variables, then calling the all() method
    const { results } = await env.DB.prepare('SELECT * FROM members ORDER BY joined_date DESC').all();

    res.json({ success: true, members: results });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch members' });
  }
});

// GET a single member by ID
app.get('/api/members/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { results } = await env.DB.prepare('SELECT * FROM members WHERE id = ?').bind(id).all();

    if (results.length === 0) {
      return res.status(404).json({ success: false, error: 'Member not found' });
    }

    res.json({ success: true, member: results[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch member' });
  }
});

app.listen(3000);
export default httpServerHandler({ port: 3000 });