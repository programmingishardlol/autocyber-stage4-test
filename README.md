# AutoCyber PR Test Vulnerable App

This is a throwaway vulnerable test app for AutoCyber Stage 4B.

It intentionally includes simple security issues:

- Missing security headers in `next.config.js`
- Unsafe CORS wildcard in `app/api/users/route.ts`
- Missing auth check in `app/api/users/route.ts`
- Insecure webhook handler in `app/api/webhook/route.ts`

Do not use this app in production.