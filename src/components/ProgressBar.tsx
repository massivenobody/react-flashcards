function ProgressBar({ current, total }: { current: number, total: number}) {
  const progress = (current / total) * 100;
  
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">
        <span className="progress-percentage">{progress}%</span>
        <span className="progress-fraction">{current} of {total}</span>
      </div>
    </div>
  )
}

export default ProgressBar;