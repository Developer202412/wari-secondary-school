"use client";

import { Award, Users, BookOpen } from "lucide-react";

interface DepartmentData {
  id: string;
  departmentName: string;
  headOfDepartment: {
    name: string;
    qualification: string;
  };
  totalMembers: number;
  members: { name: string; role?: string }[];
}

// Orodha iliyoboreshwa ya idara, wakuu wao, na wajumbe wao
const departmentsData: DepartmentData[] = [
  {
    id: "academics",
    departmentName: "Academics",
    headOfDepartment: {
      name: "Baraka Kim",
      qualification: "B.Ed. Academic Leadership & Administration",
    },
    totalMembers: 3,
    members: [
      { name: "Baraka Kim", role: "Head of Academics" },
      { name: "Masese Simba" },
      { name: "Leonard John" },
    ],
  },
  {
    id: "geography",
    departmentName: "Geography",
    headOfDepartment: {
      name: "Masese Simba",
      qualification: "B.A. Education (Geography)",
    },
    totalMembers: 2,
    members: [
      { name: "Masese Simba", role: "Head of Geography" },
      { name: "Monica Mathias" },
    ],
  },
  {
    id: "physics",
    departmentName: "Physics",
    headOfDepartment: {
      name: "Stephen Luhende",
      qualification: "B.Sc. with Education (Physics)",
    },
    totalMembers: 6,
    members: [
      { name: "Stephen Luhende", role: "Head of Physics" },
      { name: "Cosmas Tango" },
      { name: "Masele Myete" },
      { name: "Fredric Edward" },
      { name: "Mwalimu Msaidizi wa Physics 4" },
      { name: "Mwalimu Msaidizi wa Physics 5" },
    ],
  },
  {
    id: "mathematics",
    departmentName: "Mathematics",
    headOfDepartment: {
      name: "Alex Kasyupa",
      qualification: "B.Sc. Mathematics & Statistics",
    },
    totalMembers: 5,
    members: [
      { name: "Alex Kasyupa", role: "Head of Mathematics" },
      { name: "Sospeter Andrew" },
      { name: "Elias Mkwavi" },
      { name: "Simon Kabushi" },
       { name: "Laurent Magesa" },
      { name: "Mayanzani Madeleke" },
    ],
  },
  {
    id: "computer-science",
    departmentName: "Computer Science",
    headOfDepartment: {
      name: "Inocent Malya",
      qualification: "B.Sc. Computer Science & Software Engineering",
    },
    totalMembers: 2,
    members: [
      { name: "Inocent Malya", role: "Head of Computer Science & ICT" },
      { name: "Mwalimu Msaidizi wa Computer 1" },
    ],
  },
  {
    id: "chemistry",
    departmentName: "Chemistry",
    headOfDepartment: {
      name: "Mussa Lugallila",
      qualification: "B.Sc. Chemistry with Education",
    },
    totalMembers: 5,
    members: [
      { name: "Mussa Lugallila", role: "Head of Chemistry" },
      { name: "Paul Gesimba" },
      { name: "Dastan Innocent" },
      { name: "Michael Daudi" },
      { name: "Mwalimu Msaidizi wa Chemistry 4" },
    ],
  },
  {
    id: "biology",
    departmentName: "Biology",
    headOfDepartment: {
      name: "Joyfren Fabian",
      qualification: "B.Sc. Life Sciences & Biology",
    },
    totalMembers: 6,
    members: [
      { name: "Joyfren Fabian", role: "Head of Biology" },
      { name: "David Sironga" },
      { name: "Riziki Marco" },
      { name: "Leonard John" },
      { name: "Theophili Kaiza" },
      { name: "Mwalimu Msaidizi wa Biology 5" },
    ],
  },
  {
    id: "economics",
    departmentName: "Economics",
    headOfDepartment: {
      name: "Mustafa Fidia",
      qualification: "B.A. Economics & Finance",
    },
    totalMembers: 2,
    members: [
      { name: "Mustafa Fidia", role: "Head of Economics" },
      { name: "Jovita Akyoo" },
    ],
  },
  {
    id: "history",
    departmentName: "History",
    headOfDepartment: {
      name: "Baraka Kim",
      qualification: "B.A. Education (History)",
    },
    totalMembers: 2,
    members: [
      { name: "Baraka Kim", role: "Head of History" },
      { name: "Yombo Jackson" },
    ],
  },
  {
    id: "htm",
    departmentName: "HTM",
    headOfDepartment: {
      name: "Andrea Kibingo",
      qualification: "B.A. Education",
    },
    totalMembers: 3,
    members: [
      { name: "Andrea Kibingo", role: "Head of HTM" },
      { name: "Alberto Isingo" },
      { name: "Lucia Pauline" },
    ],
  },
  {
    id: "academics-communication",
    departmentName: "Academics Communication",
    headOfDepartment: {
      name: "Laurent Luziga",
      qualification: "B.A. Languages & Communication",
    },
    totalMembers: 3,
    members: [
      { name: "Laurent Luziga", role: "Head of Academics Communication" },
      { name: "Joel Edward" },
      { name: "Gudila " },
    ],
  },
];

export default function StaffDirectory() {
  return (
    <section
      id="staff"
      className="bg-staf-white py-20 text-staf-blue sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-blue sm:text-[11px] sm:tracking-[0.28em]">
              Departments & Faculty
            </p>
          </div>

          <h2 className="font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
            Academic Departments <br />
            <span className="text-staf-blue/80 font-bold">
              & Department Heads.
            </span>
          </h2>

          <p className="mt-5 text-[13px] leading-7 text-staf-blue/70 sm:text-[15px] sm:leading-8">
            Muundo wa idara za kitaalamu na uongozi wa masomo katika Shule ya Sekondari Wari, ukionyesha wakuu wa idara na idadi ya wataalamu katika kila kitengo.
          </p>
        </div>

        {/* DEPARTMENTS GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {departmentsData.map((dept) => (
            <div
              key={dept.id}
              className="group border border-staf-blue/10 bg-white p-6 shadow-sm transition-all hover:border-staf-yellow hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* TOP BADGE: TOTAL MEMBERS */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-staf-yellow/20 px-2.5 py-1 text-[10px] font-bold uppercase text-staf-blue">
                    {dept.departmentName}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-staf-blue bg-staf-blue/5 px-2.5 py-1 rounded-full">
                    <Users className="h-3.5 w-3.5 text-staf-yellow" />
                    {dept.totalMembers} Members
                  </span>
                </div>

                {/* HOD INFO */}
                <div className="border-t border-b border-staf-blue/10 py-3 my-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-staf-blue/40">
                    Mkuu wa Idara (HOD)
                  </p>
                  <h4 className="font-heading text-base font-bold text-staf-blue mt-0.5">
                    {dept.headOfDepartment.name}
                  </h4>
                  <p className="text-[11px] text-staf-blue/60 mt-0.5 flex items-center gap-1">
                    <Award className="h-3 w-3 text-staf-yellow shrink-0" />
                    {dept.headOfDepartment.qualification}
                  </p>
                </div>

                {/* MEMBERS PREVIEW */}
                <div className="mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-staf-blue/50 mb-2">
                    Wajumbe wa Idara ({dept.totalMembers}):
                  </p>
                  <ul className="space-y-1.5">
                    {dept.members.map((member, idx) => (
                      <li key={idx} className="text-xs text-staf-blue/80 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-staf-yellow shrink-0" />
                        <span className="font-medium">{member.name}</span>
                        {member.role && (
                          <span className="text-[10px] text-staf-blue/50 italic">({member.role})</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-staf-blue/10 flex items-center justify-between text-[11px] text-staf-blue/50 font-medium">
                <span>Wari Secondary School</span>
                <BookOpen className="h-3.5 w-3.5 text-staf-yellow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}