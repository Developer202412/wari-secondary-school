"use server";

import { prisma } from "@/lib/prisma";

export async function sendInquiry(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!fullName || !email || !message) {
    return {
      success: false,
      message: "Tafadhali jaza majina yako, barua pepe, na ujumbe.",
    };
  }

  try {
    // Kuhifadhi inquiry kwenye database
    await prisma.inquiry.create({
      data: {
        fullName,
        email,
        phone: phone || null,
        subject: subject || "General Enquiry",
        message,
      },
    });

    return {
      success: true,
      message: "Ujumbe wako umepokelewa kikamilifu! Tutaubadilisha na kukujibu hivi karibuni.",
    };
  } catch (error) {
    console.error("Send Inquiry Error:", error);
    return {
      success: false,
      message: "Kuna tatizo limetokea wakati wa kutuma ujumbe. Jaribu tena baadaye.",
    };
  }
}