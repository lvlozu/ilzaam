// shared.js — constants & helpers (used by both pages)
export const PROVIDER = "BIZOLVE";
export const CLIENT = "Hidhaya School / N. Miladhoo";
export const OWNER_LINE = "Supervised & Managed by Hassan Irfan Mohamed (BIZOLVE) — Electronic Signature Verified";
export const SITE_ID = "hidhaya-n-miladhoo";

export const STAFF = {
  ibrahim: { id: "ibrahim", name: "Ibrahim Naseer" },
  saeedha: { id: "saeedha", name: "Saeedhaa A. Kareem" },
  rizaana: { id: "rizaana", name: "Rizaana Aboobakuru" },
};

export function daysInMonth(year, monthIndex){ return new Date(year, monthIndex + 1, 0).getDate(); }
export function startOfMonthWeekday(year, monthIndex){ return new Date(year, monthIndex, 1).getDay(); }
export function formatMonthYear(year, monthIndex){ return new Date(year, monthIndex, 1).toLocaleString("en", { month: "long", year: "numeric" }); }
export function monthShort(year, monthIndex){ return new Date(year, monthIndex, 1).toLocaleString("en", { month: "short" }); }
export function pad(n){ return String(n).padStart(2, "0"); }
export function weekdayShort(d){ return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d]; }
export function isWeekendHoliday(date){ const d = date.getDay(); return d===5 || d===6; } // Fri/Sat

export function staffName(id){ if(!id) return ""; return Object.values(STAFF).find(s=>s.id===id)?.name ?? ""; }

export function displayStartMinute(time){
  if (!time) return Number.POSITIVE_INFINITY;
  const [a,b] = time.split("–");
  const [sh,sm] = a.split(":"); const [eh,em] = b.split(":");
  const s = parseInt(sh)*60 + parseInt(sm); const e = parseInt(eh)*60 + parseInt(em);
  if (s <= e) return s;
  if (e === 0) return s;
  return 0;
}
