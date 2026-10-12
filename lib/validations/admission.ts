import { z } from "zod";

// Orodha ya Tahasusi rasmi zinazotolewa na Shule ya Sekondari Wari
const validCombinations = [
  "PCB",
  "PCM",
  "PGM",
  "CBG",
  "PMCS",
  "ECSM",
  "EGM",
  "HGE",
] as const;

export const admissionSchema = z.object({
  // Taarifa za Mwanafunzi
  firstName: z.string().min(2, "Jina la kwanza linahitajika"),
  middleName: z.string().optional(),
  surname: z.string().min(2, "Jina la familia linahitajika"),
  gender: z.enum(["Male", "Female"], { message: "Chagua jinsia sahihi" }),
  dob: z.string().min(1, "Tarehe ya kuzaliwa inahitajika"),
  birthPlace: z.string().min(2, "Mahali pa kuzaliwa panahitajika"),
  religion: z.string().min(2, "Dini inahitajika"),
  denomination: z.string().min(2, "Dhehebu linahitajika"),
  nationality: z.string().default("Tanzanian"),

  // Shule ya Awali ('O' Level)
  schoolName: z.string().min(2, "Jina la shule ya zamani linahitajika"),
  centreNo: z.string().min(2, "CSEE Centre No inahitajika"),
  candidateNo: z.string().min(2, "Candidate No inahitajika"),
  yearCompleted: z.string().min(4, "Mwaka wa kuhitimu unahitajika"),
  
  // Matokeo ya 'O' Level na Pointi
  division: z.string().min(2, "Daraja (Division) linahitajika"),
  points: z.coerce.number().min(1, "Weka pointi sahihi"),
  oLevelGrades: z.record(z.string(), z.string()).refine(
    (val) => Object.keys(val).length > 0,
    { message: "Weka alama za masomo angalau baadhi" }
  ),

  // Machaguo ya Tahasusi
  firstChoice: z.enum(validCombinations, { message: "Chagua tahasusi ya kwanza" }),
  secondChoice: z.enum(validCombinations, { message: "Chagua tahasusi ya pili" }),

  // Taarifa za Wazazi / Walezi
  fatherName: z.string().min(2, "Jina la Baba/Mlezi linahitajika"),
  fatherPhone: z.string().min(10, "Namba ya simu si sahihi"),
  motherName: z.string().min(2, "Jina la Mama/Mlezi linahitajika"),
  motherPhone: z.string().min(10, "Namba ya simu si sahihi"),
  email: z.string().email("Barua pepe si sahihi").optional().or(z.literal("")),
  region: z.string().min(2, "Mkoa unahitajika"),
  district: z.string().min(2, "Wilaya inahitajika"),
  location: z.string().min(2, "Eneo unaloishi linahitajika"),

  // Malipo ya Fomu (Tsh. 40,000 kupitia CRDB - St. Thomas Aquinas Foundation)[cite: 3]
  bankSlipNumber: z.string().min(5, "Namba ya Slip ya Benki inahitajika"),
  amountPaid: z.coerce.number().refine((val) => val === 40000, {
    message: "Ada ya fomu ni Tsh. 40,000",
  }),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;