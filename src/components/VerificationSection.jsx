import { useState, useRef } from 'react';
import { Upload, FileCheck, CheckCircle, AlertCircle, Download, Calendar, User, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VerificationSection = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('idle'); // idle, verifying, verified, failed
  const [certificateData, setCertificateData] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      setVerificationStatus('verifying');
      
      // Mock verification process
      setTimeout(() => {
        setVerificationStatus('verified');
        setCertificateData({
          serialNumber: 'VW-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          issueDate: '2024-01-15',
          deviceType: 'Samsung SSD 980 PRO 1TB',
          wipeMethod: 'ATA Secure Erase',
          verificationHash: 'SHA256:' + Math.random().toString(36).substr(2, 16),
          issuer: 'VeriWipe Certification Authority',
          status: 'Valid'
        });
      }, 2500);
    } else {
      alert('Please upload a PDF file only.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const downloadSampleCertificate = () => {
    // Create a sample PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsO+CjIgMCBvYmoKPDwKL0xlbmd0aCAzIDAgUgo+PgpzdHJlYW0KQKU=';
    link.download = 'sample-certificate.pdf';
    link.click();
  };

  const resetVerification = () => {
    setUploadedFile(null);
    setVerificationStatus('idle');
    setCertificateData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getStatusConfig = () => {
    switch (verificationStatus) {
      case 'verifying':
        return {
          icon: FileCheck,
          text: 'Verifying certificate...',
          className: 'text-warning',
          bgClass: 'bg-warning/10'
        };
      case 'verified':
        return {
          icon: CheckCircle,
          text: 'Certificate verified successfully',
          className: 'text-success',
          bgClass: 'bg-success/10'
        };
      case 'failed':
        return {
          icon: AlertCircle,
          text: 'Certificate verification failed',
          className: 'text-destructive',
          bgClass: 'bg-destructive/10'
        };
      default:
        return null;
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <section id="verification" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Certificate Verification
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload your data wiping certificate to verify its authenticity and view detailed information 
            about the sanitization process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Upload Certificate</h3>
              
              {verificationStatus === 'idle' && (
                <div
                  className={`upload-zone ${isDragOver ? 'dragover' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Drop your certificate here
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Or click to browse for a PDF file
                  </p>
                  <Button variant="outline" className="pointer-events-none">
                    Choose File
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>
              )}

              {verificationStatus !== 'idle' && (
                <div className="text-center">
                  <div className={`${statusConfig.bgClass} p-6 rounded-lg mb-6`}>
                    <statusConfig.icon className={`h-12 w-12 ${statusConfig.className} mx-auto mb-4`} />
                    <h4 className={`text-lg font-semibold ${statusConfig.className} mb-2`}>
                      {statusConfig.text}
                    </h4>
                    {uploadedFile && (
                      <p className="text-sm text-muted-foreground">
                        File: {uploadedFile.name}
                      </p>
                    )}
                  </div>
                  
                  {(verificationStatus === 'verified' || verificationStatus === 'failed') && (
                    <Button onClick={resetVerification} variant="outline">
                      Upload Another Certificate
                    </Button>
                  )}
                </div>
              )}

              <div className="mt-8 text-center">
                <h4 className="font-semibold text-foreground mb-4">Need a sample certificate?</h4>
                <Button 
                  onClick={downloadSampleCertificate}
                  variant="outline"
                  className="bg-accent hover:bg-accent/80"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Sample Certificate
                </Button>
              </div>
            </div>

            {/* Results Section */}
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Verification Results</h3>
              
              {verificationStatus === 'idle' && (
                <div className="text-center py-12">
                  <FileCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Upload a certificate to see verification results
                  </p>
                </div>
              )}

              {verificationStatus === 'verifying' && (
                <div className="text-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    Verifying certificate authenticity...
                  </p>
                </div>
              )}

              {verificationStatus === 'verified' && certificateData && (
                <div className="space-y-4">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">Certificate is Valid</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Serial Number</p>
                        <p className="text-sm text-muted-foreground font-mono">{certificateData.serialNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Issue Date</p>
                        <p className="text-sm text-muted-foreground">{certificateData.issueDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Device</p>
                        <p className="text-sm text-muted-foreground">{certificateData.deviceType}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FileCheck className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Wipe Method</p>
                        <p className="text-sm text-muted-foreground">{certificateData.wipeMethod}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Verification Hash</p>
                        <p className="text-sm text-muted-foreground font-mono break-all">{certificateData.verificationHash}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {verificationStatus === 'failed' && (
                <div className="text-center py-12">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      <span className="font-semibold text-destructive">Invalid Certificate</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    The uploaded certificate could not be verified. 
                    Please ensure it's a valid VeriWipe certificate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;