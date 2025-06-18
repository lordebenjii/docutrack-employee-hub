
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2, FileText, AlertTriangle } from "lucide-react";
import EmployeeDetailsModal from "./EmployeeDetailsModal";

interface Employee {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  documentsStatus: {
    nationalId: 'complete' | 'pending' | 'missing';
    goodConduct: 'complete' | 'pending' | 'missing';
    bankDetails: 'complete' | 'pending' | 'missing';
    kraPin: 'complete' | 'pending' | 'missing';
    nhif: 'complete' | 'pending' | 'missing';
    nssf: 'complete' | 'pending' | 'missing';
  };
  profileImage?: string;
  dateJoined: string;
}

interface EmployeeListProps {
  searchTerm: string;
}

const EmployeeList = ({ searchTerm }: EmployeeListProps) => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Mock employee data
  const employees: Employee[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      employeeId: "EMP001",
      department: "HR",
      position: "HR Manager",
      email: "sarah.johnson@company.com",
      phone: "+254 700 123456",
      documentsStatus: {
        nationalId: 'complete',
        goodConduct: 'complete',
        bankDetails: 'complete',
        kraPin: 'complete',
        nhif: 'pending',
        nssf: 'complete'
      },
      dateJoined: "2023-01-15"
    },
    {
      id: "2",
      name: "Michael Chen",
      employeeId: "EMP002",
      department: "IT",
      position: "Software Developer",
      email: "michael.chen@company.com",
      phone: "+254 700 789012",
      documentsStatus: {
        nationalId: 'complete',
        goodConduct: 'missing',
        bankDetails: 'complete',
        kraPin: 'pending',
        nhif: 'complete',
        nssf: 'missing'
      },
      dateJoined: "2023-03-20"
    },
    {
      id: "3",
      name: "Amanda Rodriguez",
      employeeId: "EMP003",
      department: "Finance",
      position: "Financial Analyst",
      email: "amanda.rodriguez@company.com",
      phone: "+254 700 345678",
      documentsStatus: {
        nationalId: 'complete',
        goodConduct: 'complete',
        bankDetails: 'complete',
        kraPin: 'complete',
        nhif: 'complete',
        nssf: 'complete'
      },
      dateJoined: "2022-11-08"
    },
    {
      id: "4",
      name: "David Wilson",
      employeeId: "EMP004",
      department: "Marketing",
      position: "Marketing Coordinator",
      email: "david.wilson@company.com",
      phone: "+254 700 901234",
      documentsStatus: {
        nationalId: 'pending',
        goodConduct: 'missing',
        bankDetails: 'pending',
        kraPin: 'missing',
        nhif: 'missing',
        nssf: 'missing'
      },
      dateJoined: "2023-06-12"
    }
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDocumentStatusBadge = (status: 'complete' | 'pending' | 'missing') => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Complete</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case 'missing':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Missing</Badge>;
    }
  };

  const getOverallStatus = (documents: Employee['documentsStatus']) => {
    const statuses = Object.values(documents);
    const completeCount = statuses.filter(status => status === 'complete').length;
    const totalCount = statuses.length;
    
    if (completeCount === totalCount) return 'complete';
    if (statuses.some(status => status === 'missing')) return 'incomplete';
    return 'pending';
  };

  const getCompletionPercentage = (documents: Employee['documentsStatus']) => {
    const statuses = Object.values(documents);
    const completeCount = statuses.filter(status => status === 'complete').length;
    return Math.round((completeCount / statuses.length) * 100);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => {
          const overallStatus = getOverallStatus(employee.documentsStatus);
          const completionPercentage = getCompletionPercentage(employee.documentsStatus);
          
          return (
            <Card key={employee.id} className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                      <p className="text-sm text-gray-500">{employee.employeeId}</p>
                    </div>
                  </div>
                  {overallStatus === 'incomplete' && (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Department:</span>
                    <span className="font-medium">{employee.department}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Position:</span>
                    <span className="font-medium">{employee.position}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Document Completion</span>
                    <span className="text-sm font-medium">{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        completionPercentage === 100 ? 'bg-green-500' : 
                        completionPercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedEmployee(employee)}
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-gray-600 border-gray-200 hover:bg-gray-50"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  {getDocumentStatusBadge(overallStatus as any)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredEmployees.length === 0 && (
        <Card className="bg-white border-0 shadow-md">
          <CardContent className="p-12 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or add a new employee.</p>
          </CardContent>
        </Card>
      )}

      <EmployeeDetailsModal
        employee={selectedEmployee}
        open={!!selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </>
  );
};

export default EmployeeList;
