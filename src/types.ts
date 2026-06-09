/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Inquiry {
  id: string;
  name: string;
  institution: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'reviewed' | 'completed';
}

export type BodyPart = 'knee' | 'wrist' | 'ankle' | 'thigh' | 'elbow';

export interface BodyPartMetadata {
  id: BodyPart;
  name: string;
  englishName: string;
  recommendedModel: 'Model 1 (대형)' | 'Model 2 (소형)';
  sizeSpec: string;
  wrappingTip: string;
}
