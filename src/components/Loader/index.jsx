import "./style.css"
import { ReactComponent as Circle } from "./circle.svg"
import { ReactComponent as Rect} from "./rect.svg"
import { ReactComponent as Polygon} from "./polygon.svg"

const Loader = () => {
  return (
    <div className="load-container">
      <div className="loader circle">
        <Circle />
      </div>

      <div className="loader triangle">
        <Polygon />
      </div>

      <div className="loader rect">
        <Rect />
      </div>
    </div>
  )
}

export default Loader