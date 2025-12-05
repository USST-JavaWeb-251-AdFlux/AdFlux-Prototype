// src/tracker.ts
// Tracker script, imported by tracker.html

import { getTrackId } from './utils';

const params = new URLSearchParams(window.location.search);

const trackId = await getTrackId();
const category = params.get('category') ?? 'Not-Specified';
const origin = params.get('origin') ?? '*';

// TODO: Send API Request
console.log(`Track ID: ${trackId}`);
console.log(`Page Category: ${category}`);

window.parent.postMessage('AdFlux-TrackerReady', origin);
