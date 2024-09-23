import { createClient } from "@/utils/supabase/server";
import CoursesList from "./_components/courses-list";

const LESSON_MAX_LIMIT = 1000;

export default async function CoursesPage() {
    const supabaseClient = createClient()
    const user = await supabaseClient.auth.getUser()
    const userEmail = user.data.user?.email

    let hasActiveSub = false

    if(userEmail){
        const { error } = await supabaseClient.from('subscriptions').select('*').eq('email', userEmail).eq('active', true).single()

        if(!error){
            hasActiveSub = true
        }
    }

    const maxAvailableLessons = hasActiveSub ? LESSON_MAX_LIMIT : 1;

    const { data } = await supabaseClient.from('lessons').select().limit(maxAvailableLessons)
    
    if(!data) {
        return <div>No lessons found</div>
    }
    
    return (
        <div className="p-24">
            <h1 className="text-2xl font-bold">Lessons</h1>
            <CoursesList lessons={data} />
        </div>
    )
}