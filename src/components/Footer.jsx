import { Shield, Github, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">VeriWipe</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Professional-grade data wiping solution with tamper-proof certificates. 
              Secure, reliable, and compliant with industry standards.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@veriwipe.com" 
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/veriwipe" 
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#demo" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#verification" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Verification
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  NIST Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-light mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 VeriWipe. All rights reserved. NIST 800-88 compliant data sanitization.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;