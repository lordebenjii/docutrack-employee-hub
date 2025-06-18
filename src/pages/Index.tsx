
import { useState } from "react";
import { Search, Plus, Users, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmployeeList from "@/components/EmployeeList";
import AddEmployeeModal from "@/components/AddEmployeeModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const { toast } = useToast();

  // Mock data for demonstration
  const dashboardStats = {
    totalEmployees: 247,
    pendingDocuments: 23,
    verifiedDocuments: 892,
    completionRate: 89
  };

  const handleAddEmployee = (employeeData: any) => {
    console.log("Adding employee:", employeeData);
    toast({
      title: "Employee Added",
      description: "New employee has been successfully added to the system.",
    });
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">DocuTrack HR Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Employee
              </Button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalEmployees}</div>
              <p className="text-xs text-green-600 mt-1">+12 from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Documents</CardTitle>
              <AlertCircle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.pendingDocuments}</div>
              <p className="text-xs text-amber-600 mt-1">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Verified Documents</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.verifiedDocuments}</div>
              <p className="text-xs text-green-600 mt-1">All verified</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completion Rate</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.completionRate}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${dashboardStats.completionRate}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-white border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Employee Management</CardTitle>
            <CardDescription>Search and manage employee records and documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name, ID, department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>All Departments</option>
                  <option>HR</option>
                  <option>IT</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>All Status</option>
                  <option>Complete</option>
                  <option>Pending</option>
                  <option>Incomplete</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Employee List */}
        <EmployeeList searchTerm={searchTerm} />
      </main>

      {/* Add Employee Modal */}
      <AddEmployeeModal 
        open={showAddModal} 
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddEmployee}
      />
    </div>
  );
};

export default Index;
