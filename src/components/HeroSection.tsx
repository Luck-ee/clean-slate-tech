import { Shield, Download, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const downloadOptions = [
    { 
      platform: 'Windows', 
      icon: '🪟', 
      file: 'SecureWipe-Windows.exe',
      description: 'Desktop application for Windows 10/11'
    },
    { 
      platform: 'macOS', 
      icon: '🍎', 
      file: 'SecureWipe-macOS.dmg',
      description: 'Desktop application for macOS 10.15+'
    },
    { 
      platform: 'Linux', 
      icon: '🐧', 
      file: 'SecureWipe-Linux.AppImage',
      description: 'Desktop application for Linux distributions'
    },
    { 
      platform: 'Android', 
      icon: '🤖', 
      file: 'SecureWipe-Android.apk',
      description: 'Mobile application for Android devices'
    },
    { 
      platform: 'Bootable ISO', 
      icon: '💿', 
      file: 'SecureWipe-Live.iso',
      description: 'Bootable USB/DVD for offline wiping'
    },
  ];

  const features = [
    { icon: Lock, text: 'NIST-compliant secure wiping' },
    { icon: CheckCircle, text: 'Tamper-proof certificates' },
    { icon: Shield, text: 'Cross-platform compatibility' },
  ];

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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Download for Your Platform
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadOptions.map((option, index) => (
              <div key={index} className="feature-card group">
                <div className="text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {option.platform}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <Button className="btn-hero w-full group-hover:scale-105">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All downloads are free and include comprehensive documentation. 
              <br />
              Digital signatures verify authenticity of all software packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;