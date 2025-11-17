import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/common/layouts/RootLayout";
import DefaultLayout from "../layouts/default";
import IndexPage from "@/pages";
import DocsPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";

// Páginas simuladas para test

const ProfilePage = () => <h1>Profile</h1>;
const DashboardPage = () => <h1>Dashboard</h1>;
const ProjectsPage = () => <h1>Projects</h1>;
const TeamPage = () => <h1>Team</h1>;
const CalendarPage = () => <h1>Calendar</h1>;
const SettingsPage = () => <h1>Settings</h1>;
const HelpFeedbackPage = () => <h1>Help & Feedback</h1>;
const LogoutPage = () => <h1>Logout</h1>;

export const router = createBrowserRouter([
  {
    element: <RootLayout />, // 👈 Provider vive aquí
    children: [
      {
        element: <DefaultLayout />,
        children: [
          { path: "/", element: <IndexPage /> },
          { path: "/docs", element: <DocsPage /> },
          { path: "/pricing", element: <PricingPage /> },
          { path: "/blog", element: <BlogPage /> },
          { path: "/about", element: <AboutPage /> },

          // Menú
          { path: "/profile", element: <ProfilePage /> },
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/projects", element: <ProjectsPage /> },
          { path: "/team", element: <TeamPage /> },
          { path: "/calendar", element: <CalendarPage /> },
          { path: "/settings", element: <SettingsPage /> },
          { path: "/help-feedback", element: <HelpFeedbackPage /> },
          { path: "/logout", element: <LogoutPage /> },
        ],
      },
    ],
  },
]);
