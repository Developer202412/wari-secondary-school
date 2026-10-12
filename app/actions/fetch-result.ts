"use server";

import { prisma } from "@/lib/prisma";

export async function fetchStudentResult(regNumber: string) {
  if (!regNumber || regNumber.trim() === "") {
    return { success: false, message: "Tafadhali ingiza namba ya mtihani." };
  }

  try {
    const formattedReg = regNumber.trim().toUpperCase();

    // Tumia 'regNumber' badala ya 'studentRegNumber' kulingana na Prisma schema
    const result = await prisma.result.findFirst({
      where: {
        regNumber: formattedReg,
      },
    });

    if (!result) {
      return {
        success: false,
        message: `Haingewezekana kupata matokeo ya namba ${formattedReg}. Hakikisha namba ipo sahihi.`,
      };
    }

    return {
      success: true,
      data: {
        studentName: result.studentName,
        regNumber: result.regNumber,
        examType: result.examType,
        year: result.examYear, // Tumia examYear badala ya year
        division: result.division,
        points: result.points,
        subjects: result.subjects as Record<string, string>,
      },
    };
  } catch (error) {
    console.error("Fetch Result Error:", error);
    return {
      success: false,
      message: "Kuna hitilafu imetokea wakati wa kupakua matokeo. Jaribu tena baadaye.",
    };
  }
}