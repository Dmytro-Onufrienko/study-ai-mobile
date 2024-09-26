import Dashboard from "@modules/course/pages/Dashboard";
import { AuthProvider } from "providers/AuthProvider";

export default function DashboardPage() {
  return <AuthProvider><Dashboard /></AuthProvider>
}