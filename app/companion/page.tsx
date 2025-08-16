import CompanionCard from "@/components/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionLibrary = async({searchParams }: SearchParams) =>{
    const filter  = await searchParams;
    const subject = filter.subject ? filter.subject : '';
    const topic =  filter.topic ? filter.topic : '';
const companion = await getAllCompanions({subject, topic});

    return(
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">Filters</div>
            </section>
            <section className="companion-grid">
                {companion.map((companion)=>(
                    <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
                ))}

            </section>
        </main>
    )
}
export default CompanionLibrary