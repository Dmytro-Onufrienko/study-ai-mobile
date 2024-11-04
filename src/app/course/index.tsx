import Courses from "@modules/course/pages/Dashboard";
import { AuthProvider } from "@modules/auth/providers/AuthProvider";

export default function CoursesPage() {
  return <AuthProvider><Courses /></AuthProvider>
}