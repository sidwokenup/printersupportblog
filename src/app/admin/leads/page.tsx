import { formatDistanceToNow } from "date-fns"
import { Users, PhoneCall, CheckCircle, Ban } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function AdminLeadsPage() {
  // Mock data for the dashboard since DB is unavailable during this build
  const leads = [
    {
      id: "1",
      fullName: "John Smith",
      email: "john@example.com",
      phone: "+1 555-0123",
      pageUrl: "http://localhost:3002/troubleshooting",
      status: "New",
      createdAt: new Date(Date.now() - 1000 * 60 * 5)
    },
    {
      id: "2",
      fullName: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "(555) 987-6543",
      pageUrl: "http://localhost:3002/troubleshooting",
      status: "Contacted",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
    }
  ]

  const totalLeads = 2
  const newLeads = 1
  const qualifiedLeads = 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Lead Dashboard</h1>
        <p className="text-slate-500 mt-2">Manage and view captured support leads.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">New (Uncontacted)</CardTitle>
            <PhoneCall className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newLeads}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Qualified</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{qualifiedLeads}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Spam</CardTitle>
            <Ban className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
      </div>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
              <thead className="[&_tr]:border-b border-slate-200">
                <tr className="border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100">
                  <th className="h-12 px-4 align-middle font-medium text-slate-500">Name</th>
                  <th className="h-12 px-4 align-middle font-medium text-slate-500">Contact</th>
                  <th className="h-12 px-4 align-middle font-medium text-slate-500">Page URL</th>
                  <th className="h-12 px-4 align-middle font-medium text-slate-500">Status</th>
                  <th className="h-12 px-4 align-middle font-medium text-slate-500">Time</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-slate-500">No leads captured yet.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-slate-200 transition-colors hover:bg-slate-50">
                      <td className="p-4 align-middle font-medium">{lead.fullName}</td>
                      <td className="p-4 align-middle">
                        <div className="flex flex-col">
                          <span>{lead.phone}</span>
                          <span className="text-xs text-slate-500">{lead.email}</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="truncate max-w-[200px]" title={lead.pageUrl || "Direct"}>
                          {lead.pageUrl?.split('localhost:3002')[1] || lead.pageUrl || "Direct"}
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <Badge variant={lead.status === "New" ? "default" : "secondary"}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle text-slate-500">
                        {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
