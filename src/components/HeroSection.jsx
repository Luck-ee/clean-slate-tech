import { Shield, Download, Lock, CheckCircle, Monitor, Smartphone, HardDrive, Disc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HeroSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Windows');

  const downloadOptions = [
    { 
      platform: 'Windows', 
      icon: Monitor, 
      file: 'VeriWipe-Windows.exe',
      description: 'Desktop application for Windows 10/11'
    },
    { 
      platform: 'macOS', 
      icon: Monitor, 
      file: 'VeriWipe-macOS.dmg',
      description: 'Desktop application for macOS 10.15+'
    },
    { 
      platform: 'Linux', 
      icon: Monitor, 
      file: 'VeriWipe-Linux.AppImage',
      description: 'Desktop application for Linux distributions'
    },
    { 
      platform: 'Android', 
      icon: Smartphone, 
      file: 'VeriWipe-Android.apk',
      description: 'Mobile application for Android devices'
    },
    { 
      platform: 'Bootable ISO', 
      icon: Disc, 
      file: 'VeriWipe-Live.iso',
      description: 'Bootable USB/DVD for offline wiping'
    },
  ];

  const features = [
    { icon: Lock, text: 'NIST-compliant secure wiping' },
    { icon: CheckCircle, text: 'Tamper-proof certificates' },
    { icon: Shield, text: 'Cross-platform compatibility' },
  ];

  const selectedOption = downloadOptions.find(option => option.platform === selectedPlatform) || downloadOptions[0];

  return (
    <section id="hero" className="section-padding pt-32 bg-background">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 p-4 rounded-full">
              <Shield className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Secure Data Wiping
            <span className="block text-primary">Made Simple</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Professional-grade data wiping tool that securely erases sensitive information 
            from computers and mobile devices, with tamper-proof digital certificates for verification.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Download for Your Platform
          </h2>
          
          <div className="feature-card">
            {/* Platform Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Select Your Platform
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {downloadOptions.map((option) => (
                  <button
                    key={option.platform}
                    onClick={() => setSelectedPlatform(option.platform)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center space-y-2 ${
                      selectedPlatform === option.platform
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <option.icon className={`h-6 w-6 ${
                      selectedPlatform === option.platform ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <span className={`text-sm font-medium ${
                      selectedPlatform === option.platform ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {option.platform}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Platform Download */}
            <div className="text-center border-t border-border pt-6">
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <selectedOption.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {selectedOption.platform}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {selectedOption.description}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  File: <span className="font-mono text-foreground">{selectedOption.file}</span>
                </p>
              </div>
              
              <Button size="lg" className="btn-hero">
                <Download className="h-5 w-5 mr-2" />
                Download {selectedOption.platform} Version
              </Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              All downloads are free and include comprehensive documentation. 
              Digital signatures verify authenticity of all software packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;