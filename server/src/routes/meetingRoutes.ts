/*
Copyright (c) 2026 Sabareesh M (saba1207B). All Rights Reserved.

This source code is proprietary and confidential.

Unauthorized copying, redistribution, modification, or use — including
any use for artificial intelligence / machine learning training —
is strictly prohibited.

See the LICENSE and COPYRIGHT files in the repository root for full terms.
*/

import { Router } from 'express';
import { createMeeting, getMeeting, getUserMeetings } from '../controllers/meetingController.js';
import { authMiddleware, optionalAuthMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, createMeeting);
router.get('/user', authMiddleware, getUserMeetings);
router.get('/:meetingId', optionalAuthMiddleware, getMeeting);

export default router;
