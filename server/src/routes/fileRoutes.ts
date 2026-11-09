/*
Copyright (c) 2026 Sabareesh M (saba1207B). All Rights Reserved.

This source code is proprietary and confidential.

Unauthorized copying, redistribution, modification, or use — including
any use for artificial intelligence / machine learning training —
is strictly prohibited.

See the LICENSE and COPYRIGHT files in the repository root for full terms.
*/

import { Router } from 'express';
import { uploadFile, getMeetingFiles, deleteFile } from '../controllers/fileController.js';
import { optionalAuthMiddleware } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = Router();

router.post('/upload', optionalAuthMiddleware, upload.single('file'), uploadFile);
router.get('/:meetingId', getMeetingFiles);
router.delete('/:fileId', optionalAuthMiddleware, deleteFile);

export default router;
