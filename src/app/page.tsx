// import { getUser } from "@/lib/supabase/user";
// import { redirect } from "next/navigation";
import HomePage from "./home/page";

export default async function Page() {
  // const user = await getUser();
  // if (user) {
  //   redirect("/home");
  // } else {
  //   redirect("/login");
  // }
  return <HomePage />;
}