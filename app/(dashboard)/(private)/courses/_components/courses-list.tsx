import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Database } from "@/types/supabase"

interface CoursesListProps {
    lessons: Database['public']['Tables']['lessons']['Row'][];
}

export default function CoursesList({ lessons }: CoursesListProps) {
    return (
        <Accordion type="single" collapsible>
            {lessons.map((lesson) => (
                <AccordionItem key={lesson.id} value={lesson.title}>
                    <AccordionTrigger>{lesson.title}</AccordionTrigger>
                    <AccordionContent>{lesson.description}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}