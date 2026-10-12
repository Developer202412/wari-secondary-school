"use server";

import { admissionSchema } from "@/lib/validations/admission";
import { prisma } from "@/lib/prisma";

export async function submitAdmission(prevState: any, formData: FormData) {
  try {
    const rawData = {
      firstName: formData.get("firstName"),
      middleName: formData.get("middleName"),
      surname: formData.get("surname"),
      gender: formData.get("gender"),
      dob: formData.get("dob"),
      birthPlace: formData.get("birthPlace"),
      religion: formData.get("religion"),
      denomination: formData.get("denomination"),
      nationality: formData.get("nationality"),
      schoolName: formData.get("schoolName"),
      centreNo: formData.get("centreNo"),
      candidateNo: formData.get("candidateNo"),
      yearCompleted: formData.get("yearCompleted"),
      division: formData.get("division"),
      points: formData.get("points"),
      oLevelGrades: JSON.parse((formData.get("oLevelGrades") as string) || "{}"),
      firstChoice: formData.get("firstChoice"),
      secondChoice: formData.get("secondChoice"),
      fatherName: formData.get("fatherName"),
      fatherPhone: formData.get("fatherPhone"),
      motherName: formData.get("motherName"),
      motherPhone: formData.get("motherPhone"),
      email: formData.get("email"),
      region: formData.get("region"),
      district: formData.get("district"),
      location: formData.get("location"),
      bankSlipNumber: formData.get("bankSlipNumber"),
      amountPaid: formData.get("amountPaid"),
    };

    const validatedFields = admissionSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Tafadhali kagua taarifa ulizojaza. Kuna makosa kwenye fomu.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const data = validatedFields.data;
    const fullName = `${data.firstName} ${data.middleName ? data.middleName + " " : ""}${data.surname}`;

    const newApplication = await prisma.studentApplication.create({
      data: {
        applicantName: fullName,
        parentPhone: data.fatherPhone || data.motherPhone,
        combination: data.firstChoice,
        status: "PENDING",
        formData: data as any,
      },
    });

    return {
      success: true,
      message: "Ombi lako limetumikiwa kwa mafanikio!",
      applicationId: newApplication.id,
    };

  } catch (error) {
    console.error("Admission Submission Error:", error);
    return {
      success: false,
      message: "Imeshindikana kuwasilisha ombi. Tafadhali jaribu tena.",
    };
  }
}