import './TrendCard.scss'
import { TrendData } from '../../../data/Trend.js'
const TrendCard = () => {
  return (
    <div className='trendcard'>
        <h3>Trending</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.share} K Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
