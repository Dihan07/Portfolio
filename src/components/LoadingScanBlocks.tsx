function LoadingScanBlocks() {
  const delays = [0, 200, 400, 600];

  return (
    <span className="inline-flex items-center gap-1 ml-1.5 align-middle text-primary">
      {delays.map((delay) => (
        <span
          key={delay}
          className="w-3 h-3 border border-current animate-scan-block"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  );
}

export default LoadingScanBlocks;