/*
Copyright (c) 2026 Sabareesh M (saba1207B). All Rights Reserved.

This source code is proprietary and confidential.

Unauthorized copying, redistribution, modification, or use — including
any use for artificial intelligence / machine learning training —
is strictly prohibited.

See the LICENSE and COPYRIGHT files in the repository root for full terms.
*/

export * from '../../../shared/types';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export interface LocalDeviceSettings {
  audioInputId?: string;
  audioOutputId?: string;
  videoInputId?: string;
  noiseSuppression: boolean;
  echoCancellation: boolean;
}
