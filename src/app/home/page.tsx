import LogOutButton from "@/components/LogOutButton";
import ChatContainer from "@/components/ChatContainer";
import { getUser } from "@/lib/supabase/user";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <>
      <LogOutButton />
      <ChatContainer />
    </>
  );
}