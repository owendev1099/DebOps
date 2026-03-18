import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10, // 10 usuarios virtuales simultáneos
  duration: '30s', // duración de la prueba
};

export default function () {
  // Ajusta la URL a la IP de tu servidor de Google Cloud
  const res = http.get('http://TU_IP_ESTATICA'); 
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}