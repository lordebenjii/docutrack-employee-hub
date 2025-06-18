
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Building, 
  FileText, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Download,
  Edit
} from "lucide-react";
import DocumentUploadModal from "./DocumentUploadModal";

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

interface EmployeeDetailsModalProps {
  employee: Employee | null;
  open: boolean;
  onClose: () => void;
}

const EmployeeDetailsModal = ({ employee, open, onClose }: EmployeeDetailsModalProps) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");

  if (!employee) return null;

  const documentTypes = [
    { key: 'nationalId', label: 'National ID', required: true },
    { key: 'goodConduct', label: 'Certificate of Good Conduct', required: true },
    { key: 'bankDetails', label: 'Bank Account Details', required: true },
    { key: 'kraPin', label: 'KRA PIN Certificate', required: false },
    { key: 'nhif', label: 'NHIF Certificate', required: false },
    { key: 'nssf', label: 'NSSF Certificate', required: false }
  ];

  const getStatusIcon = (status: 'complete' | 'pending' | 'missing') => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'missing':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getStatusBadge = (status: 'complete' | 'pending' | 'missing') => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Complete</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending Review</Badge>;
      case 'missing':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Missing</Badge>;
    }
  };

  const handleUploadDocument = (documentType: string) => {
    setSelectedDocumentType(documentType);
    setShowUploadModal(true);
  };

  const handleDocumentUploaded = (documentData: any) => {
    console.log("Document uploaded:", documentData);
    setShowUploadModal(false);
  };

  const completedDocs = Object.values(employee.documentsStatus).filter(status => status === 'complete').length;
  const totalDocs = Object.keys(employee.documentsStatus).length;
  const completionPercentage = Math.round((completedDocs / totalDocs) * 100);

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Employee Details</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Employee Header */}
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {employee.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{employee.name}</h3>
                <p className="text-gray-600">{employee.position} • {employee.department}</p>
                <p className="text-sm text-gray-500">Employee ID: {employee.employeeId}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{completionPercentage}%</div>
                <p className="text-sm text-gray-500">Documents Complete</p>
              </div>
            </div>

            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{employee.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{employee.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium">{employee.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Date Joined</p>
                        <p className="font-medium">{new Date(employee.dateJoined).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Document Checklist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {documentTypes.map((docType) => {
                        const status = employee.documentsStatus[docType.key as keyof typeof employee.documentsStatus];
                        return (
                          <div key={docType.key} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              {getStatusIcon(status)}
                              <div>
                                <p className="font-medium">{docType.label}</p>
                                <p className="text-sm text-gray-500">
                                  {docType.required ? 'Required' : 'Optional'}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {getStatusBadge(status)}
                              {status === 'complete' ? (
                                <Button size="sm" variant="outline">
                                  <Download className="w-4 h-4 mr-1" />
                                  Download
                                </Button>
                              ) : (
                                <Button 
                                  size="sm" 
                                  onClick={() => handleUploadDocument(docType.key)}
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  <Upload className="w-4 h-4 mr-1" />
                                  Upload
                                </Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">Bank Details Verified</p>
                          <p className="text-sm text-gray-500">Document verified by HR Team • 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Upload className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">National ID Uploaded</p>
                          <p className="text-sm text-gray-500">Document uploaded by employee • 1 week ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <p className="font-medium">Employee Profile Created</p>
                          <p className="text-sm text-gray-500">Profile created by Sarah Johnson • 2 weeks ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end space-x-3 pt-4 border-t">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Edit className="w-4 h-4 mr-1" />
                Edit Employee
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <DocumentUploadModal
        open={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onSubmit={handleDocumentUploaded}
        documentType={selectedDocumentType}
        employeeName={employee.name}
      />
    </>
  );
};

export default EmployeeDetailsModal;
