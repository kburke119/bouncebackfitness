interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LogoWantASmoothie({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 80, height: 60 },
    md: { width: 120, height: 90 },
    lg: { width: 160, height: 120 }
  };

  const { width, height } = sizes[size];

  return (
    <img 
      src="/images/want-a-smoothie-logo.avif"
      alt="Want A Smoothie Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
}