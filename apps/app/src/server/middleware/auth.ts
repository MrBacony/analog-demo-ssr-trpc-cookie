import { defineEventHandler, getRequestURL, H3Event, sendRedirect, setCookie } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const pathname = getRequestURL(event).pathname;
  
  console.log('Request URL:', pathname);
  
  if (
        pathname === '/'
    ) {
        return;
    }

   if (pathname === '/setcookie') {
        setCookie(event, 'myCookie', Math.random().toString(), { path: '/', httpOnly: true });
        sendRedirect(event, '/');
        return;
    }

    if (pathname === '/protected' || pathname.startsWith('/api/trpc')) {
        console.log('Checking cookie for protected route');
        console.log('Cookie:', event.node.req.headers.cookie);


        if(!event.node.req.headers.cookie?.includes('myCookie')) {
            event.node.res.statusCode = 403;
            event.node.res.end('Forbidden');
            return;
        }
    }
});
