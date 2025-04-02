function ProgressBar({ current, total }: { current: number, total: number}) {
  const progress = (current / total) * 100;
  
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="progress-percentage">{progress}%</span>
      </div>
      <div className="progress-bar-label">
        {current} of {total}
      </div>
    </div>
  )
}

export default ProgressBar;