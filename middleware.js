import { authMiddleware } from '@clerk/nextjs'
export default authMiddleware({
  publicRoutes: ['/', '/api/courses', '/repos'],
})
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
