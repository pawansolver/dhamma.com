const fs = require('fs');
let content = fs.readFileSync('src/app/doctors/page.tsx', 'utf8');

// Replace the faculty list
const startIdx = content.indexOf('const facultyList: Doctor[] = [');
const endIdx = content.indexOf('];\n\nconst departments = [') + 2;

if (startIdx !== -1 && endIdx !== -1) {
    const newFacultyList = `const facultyList: Doctor[] = [
    {
        name: "Dr. S. P. Prasad",
        role: "Professor & HOD",
        dept: "Biochemistry",
        credentials: "MD, Ph.D. (Medical Biochemistry)",
        exp: "20+ Years Experience",
        specialty: "Molecular Diagnostics & Metabolic Pathways",
        tags: ["HOD", "Biochemist"],
        image: "https://i.pravatar.cc/150?img=11",
    },
    {
        name: "Dr. Anjana Kumari",
        role: "Associate Professor",
        dept: "Biochemistry",
        credentials: "MD (Biochemistry)",
        exp: "12+ Years Experience",
        specialty: "Clinical Enzymology & Immunoassays",
        tags: ["Associate Professor", "Diagnostics Lead"],
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Dr. Amit Kumar",
        role: "Professor & HOD",
        dept: "Pharmacology",
        credentials: "MD (Pharmacology)",
        exp: "18+ Years Experience",
        specialty: "Clinical Trials, Pharmacovigilance & Drug Assays",
        tags: ["HOD", "Drug Expert"],
        image: "https://i.pravatar.cc/150?img=8",
    }
];`;

    content = content.substring(0, startIdx) + newFacultyList + content.substring(endIdx);
} else {
    console.log("Could not find facultyList to replace");
}

// Replace avatar div
const oldAvatar = `<Stethoscope size={22} strokeWidth={1.5} />`;
const newAvatar = `{doc.image ? (
                                                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <Stethoscope size={22} strokeWidth={1.5} />
                                                        )}`;

// Find the index of the first Stethoscope which is inside the leadership loop, and second is inside the directory loop.
// The second one is what we want to replace.
// Actually let's just replace all occurrences of `<Stethoscope size={22} strokeWidth={1.5} />` to be safe, there's only one in the document at line 773.
// Wait, the leadership loop doesn't use Stethoscope, it uses `<Users size={40} ... />`
content = content.replace(oldAvatar, newAvatar);

fs.writeFileSync('src/app/doctors/page.tsx', content);
console.log('Done');
