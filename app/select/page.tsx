import SelectModal from "@/components/SelectModal";
import { getUser } from "@/lib/supabase/user";

export default async function Select() {
    const user = await getUser();
    
    return <SelectModal user={user} />
}