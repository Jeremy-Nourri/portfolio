import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { CareerPage } from '@/pages/CareerPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PresentationPage } from '@/pages/PresentationPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ProjectsListPage } from '@/pages/ProjectsListPage'
import { SkillDetailPage } from '@/pages/SkillDetailPage'
import { SkillsListPage } from '@/pages/SkillsListPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'presentation', element: <PresentationPage /> },
      { path: 'competences', element: <SkillsListPage /> },
      { path: 'competences/:slug', element: <SkillDetailPage /> },
      { path: 'realisations', element: <ProjectsListPage /> },
      { path: 'realisations/:slug', element: <ProjectDetailPage /> },
      { path: 'parcours', element: <CareerPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
