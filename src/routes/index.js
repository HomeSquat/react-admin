import errorPage from '@/pages/error';
import loginPage from '@/pages/login';

/**
 * 公共页面
 * 不需要权限管理
 */
export const staticRoutes = [
  {
    path: '/login',
    exact: true,
    component: loginPage
  },
  {
    path: '/error',
    exact: true,
    component: errorPage
  }
]

export const authorityRoutes = [
  
]