import { Play, Monitor, Smartphone, HardDrive } from 'lucide-react';

const DemoSection = () => {
  const wipeMethods = [
    {
      icon: HardDrive,
      title: 'DoD 3-Pass',
      description: 'Department of Defense standard: zeros, ones, random data',
      suitable: 'Traditional HDDs'
    },
    {
      icon: Monitor,
      title: 'ATA Secure Erase',
      description: 'Hardware-level secure erase command for SSDs',
      suitable: 'Modern SSDs'
    },
    {
      icon: Smartphone,
      title: 'Crypto-Erase',
      description: 'Delete encryption keys for instant secure wipe',
      suitable: 'Encrypted devices'
    },
  ];

  return (
    <section id="demo" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            See SecureWipe in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how our tool securely erases data from various devices and generates 
            tamper-proof certificates for compliance and verification.
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-secondary rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-primary/20 p-6 rounded-full mb-4 inline-block">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                  Demo Video Coming Soon
                </h3>
                <p className="text-secondary-foreground/70">
                  Complete walkthrough of the secure wiping process
                </p>
              </div>
            </div>
            
            {/* Video Controls Placeholder */}
            <div className="bg-secondary/80 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary-dark transition-colors">
                  <Play className="h-4 w-4" />
                </button>
                <span className="text-secondary-foreground text-sm">0:00 / 5:24</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary-foreground text-sm">Quality:</span>
                <select className="bg-secondary-light text-secondary-foreground text-sm rounded px-2 py-1">
                  <option>1080p</option>
                  <option>720p</option>
                  <option>480p</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Wiping Methods */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Supported Wiping Methods
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wipeMethods.map((method, index) => (
              <div key={index} className="feature-card text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h4>
                <p className="text-muted-foreground mb-3">
                  {method.description}
                </p>
                <div className="text-sm">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    {method.suitable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-accent/50 border border-border rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-foreground mb-2">NIST Compliance</h4>
              <p className="text-sm text-muted-foreground">
                All wiping methods follow NIST Special Publication 800-88 guidelines 
                for media sanitization, ensuring complete data destruction and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;