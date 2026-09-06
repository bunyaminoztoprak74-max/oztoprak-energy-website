import { getInvestmentToken, submitInvestmentLead } from "@/lib/investment-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const GET = (request: Request) => getInvestmentToken(request);
export const POST = (request: Request) => submitInvestmentLead(request);
