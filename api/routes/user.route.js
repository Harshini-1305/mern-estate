import express from 'express';
import { test } from '../controllers/user.controller.js'; // Adjust the import path as necessary

const router = express.Router();

router.get('/test', test);

export default router;
