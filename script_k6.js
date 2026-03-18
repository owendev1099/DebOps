import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10, 
  duration: '10s', 
};

export default function () {
  // REEMPLAZA ESTO con tu IP real de Google Cloud
  const res = http.get('http://35.226.198.244'); 
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}