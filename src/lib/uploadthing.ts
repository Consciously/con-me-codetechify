import { UTApi } from 'uploadthing/server';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

import { generateReactHelpers } from '@uploadthing/react';

export const { useUploadThing, uploadFiles } =
	generateReactHelpers<OurFileRouter>();
