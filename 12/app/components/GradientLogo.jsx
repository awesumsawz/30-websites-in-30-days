'use client';

export default function GradientLogo() {
  return (
    <a 
      href="#" 
      className="text-xl font-bold text-white relative group"
    >
      {/* Static text */}
      <span className="absolute group-hover:opacity-0 transition-opacity duration-300">
        LitRepo
      </span>
      
      {/* Gradient text that appears on hover */}
      <span 
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
          backgroundSize: '200% 200%',
          animation: 'gradient-rotate 1s linear infinite',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block'
        }}
      >
        LitRepo
      </span>
    </a>
  );
} 