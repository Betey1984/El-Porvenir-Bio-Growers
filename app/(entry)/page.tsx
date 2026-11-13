import { redirect } from "next/navigation";

// Root path redirects to default language (Spanish)
export default function RootPage() {
  redirect("/es");
}
