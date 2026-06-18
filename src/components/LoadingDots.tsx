function LoadingDots() {
  const delays = [0, 150, 300];

  return (
    <span className="inline-flex items-center gap-1.5 ml-1.5 align-middle">
      {delays.map((delay) => (
        <span
          key={delay}
          className="w-2 h-2 rounded-full bg-primary animate-pulse-dot"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  );
}

export default LoadingDots;