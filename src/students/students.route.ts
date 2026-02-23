import { Hono } from 'hono';
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from './students.controller.js';

const studentsRoute = new Hono();

// GET all students
studentsRoute.get('/', async (c) => {
  return await getStudents(c);
});

// CREATE student
studentsRoute.post('/', async (c) => {
  return await createStudent(c);
});

// UPDATE student
studentsRoute.put('/:id', async (c) => {
  return await updateStudent(c);
});

// DELETE student
studentsRoute.delete('/:id', async (c) => {
  return await deleteStudent(c);
});

export default studentsRoute;
