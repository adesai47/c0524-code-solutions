import express from 'express';
import { json } from 'body-parser';
import { Pool } from 'pg';
import { notFound, errorHandler } from './lib/error-middleware';

const app = express();
const port = 8080;
const pool = new Pool({
  connectionString: 'postgresql://dev: dev@localhost/studentGradeTable',
});

app.use(json());

app.get('/api/grades', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM grades');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching grades.' });
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  const { gradeId } = req.params;
  if (isNaN(Number(gradeId))) {
    return res.status(400).json({ error: 'Invalid gradeId' });
  }
  try {
    const result = await pool.query(
      'SELECT * FROM grades WHERE "gradeId" = $1',
      [gradeId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the grade.' });
  }
});

app.post('/api/grades', async (req, res) => {
  const { name, course, score } = req.body;
  if (
    !name ||
    !course ||
    typeof score !== 'number' ||
    score < 0 ||
    score > 100
  ) {
    return res.status(400).json({ error: 'Invalid grade data' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO grades (name, course, score) VALUES ($1, $2, $3) RETURNING *',
      [name, course, score]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while adding the grade.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  const { gradeId } = req.params;
  const { name, course, score } = req.body;
  if (
    isNaN(Number(gradeId)) ||
    !name ||
    !course ||
    typeof score !== 'number' ||
    score < 0 ||
    score > 100
  ) {
    return res.status(400).json({ error: 'Invalid grade data' });
  }
  try {
    const result = await pool.query(
      'UPDATE grades SET name = $1, course = $2, score = $3 WHERE "gradeId" = $4 RETURNING *',
      [name, course, score, gradeId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the grade.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  const { gradeId } = req.params;
  if (isNaN(Number(gradeId))) {
    return res.status(400).json({ error: 'Invalid gradeId' });
  }
  try {
    const result = await pool.query(
      'DELETE FROM grades WHERE "gradeId" = $1 RETURNING *',
      [gradeId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the grade.' });
  }
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
