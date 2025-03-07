import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-500 text-white text-center p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Job Matching Platform. All rights reserved.</p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
