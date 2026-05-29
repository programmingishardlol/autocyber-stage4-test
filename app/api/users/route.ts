export async function GET() {
  return Response.json(
    { email: "user@example.com" },
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}