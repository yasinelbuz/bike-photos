import { bikes } from "../mocks/bikes"

export async function GET() {
  return Response.json({ bikes })
}