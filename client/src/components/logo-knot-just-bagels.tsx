interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LogoKnotJustBagels({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 60, height: 60 },
    md: { width: 80, height: 80 },
    lg: { width: 100, height: 100 }
  };

  const { width, height } = sizes[size];

  return (
    <img 
      src="/images/knot-just-bagels-logo.avif"
      alt="Knot Just Bagels Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
}