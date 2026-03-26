export async function GET() {
    return Response.json({ 
        tenant_id: process.env.TENANT_ID 
    });
}