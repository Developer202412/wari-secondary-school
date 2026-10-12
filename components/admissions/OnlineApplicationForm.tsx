"use client";

import { useActionState } from "react";
// 1. Path sahihi inayoelekeza kwenye app/actions/submit-admission
import { submitAdmission } from "@/app/actions/submit-admission";

// 2. Type definition kuzuia makosa ya TypeScript "never"
interface AdmissionState {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  applicationId?: string;
}

const initialState: AdmissionState = {};

export default function OnlineApplicationForm() {
  const [state, formAction, isPending] = useActionState<AdmissionState, FormData>(
    submitAdmission as any,
    initialState
  );

  return (
    <form action={formAction} className="mx-auto max-w-3xl space-y-6 bg-staf-blue p-6 sm:p-10 text-white shadow-xl">
      <div className="border-b border-white/20 pb-4">
        <h3 className="font-heading text-2xl font-bold text-staf-yellow">Fomu ya Maombi ya Mtandaoni (Form Five)</h3>
        <p className="text-xs text-white/70 mt-1">Jaza taarifa zako kwa usahihi kama zilivyoelekezwa kwenye fomu rasmi.</p>
      </div>

      {state?.message && (
        <div className={`p-4 text-xs font-semibold ${state.success ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
          {state.message}
        </div>
      )}

      {/* Taarifa za Mwanafunzi */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1">Jina la Kwanza</label>
          <input type="text" name="firstName" required className="w-full bg-staf-blue-light/30 border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Jina la Kati</label>
          <input type="text" name="middleName" className="w-full bg-staf-blue-light/30 border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Jina la Familia</label>
          <input type="text" name="surname" required className="w-full bg-staf-blue-light/30 border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none" />
        </div>
      </div>

      {/* Machaguo ya Tahasusi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1">Tahasusi Chaguo la Kwanza (1st Choice)</label>
          <select name="firstChoice" required className="w-full bg-staf-blue border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none">
            <option value="PCB">PCB (Physics, Chemistry, Biology)</option>
            <option value="PCM">PCM (Physics, Chemistry, Mathematics)</option>
            <option value="PGM">PGM (Physics, Geography, Mathematics)</option>
            <option value="CBG">CBG (Chemistry, Biology, Geography)</option>
            <option value="PMCS">PMCs (Physics, Math, Computer Science)</option>
            <option value="ECSM">ECsM (Economics, Computer Science, Math)</option>
            <option value="EGM">EGM (Economics, Geography, Mathematics)</option>
            <option value="HGE">HGE (History, Geography, Economics)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Tahasusi Chaguo la Pili (2nd Choice)</label>
          <select name="secondChoice" required className="w-full bg-staf-blue border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none">
            <option value="PCB">PCB</option>
            <option value="PCM">PCM</option>
            <option value="PGM">PGM</option>
            <option value="CBG">CBG</option>
            <option value="PMCS">PMCs</option>
            <option value="ECSM">ECsM</option>
            <option value="EGM">EGM</option>
            <option value="HGE">HGE</option>
          </select>
        </div>
      </div>

      {/* Malipo ya Benki */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/20 pt-4">
        <div>
          <label className="block text-xs font-medium mb-1">Namba ya Slip ya Benki (CRDB)</label>
          <input type="text" name="bankSlipNumber" placeholder="Mfano: SLIP-12345" required className="w-full bg-staf-blue-light/30 border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">Kiasi Kilicholipwa (Tsh)</label>
          <input type="number" name="amountPaid" defaultValue={40000} required className="w-full bg-staf-blue-light/30 border border-white/20 p-2 text-sm text-white focus:border-staf-yellow outline-none" />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-staf-yellow py-3 text-staf-blue font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors cursor-pointer"
      >
        {isPending ? "Inawasilisha Ombi..." : "Wasilisha Ombi la Kujiunga"}
      </button>
    </form>
  );
}