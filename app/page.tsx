import { getUser } from "@/lib/supabase/user";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUser();

  if (user) {
    redirect("/home");
  } else {
    redirect("/select");
  }
}