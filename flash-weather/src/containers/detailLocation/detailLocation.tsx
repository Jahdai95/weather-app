import "./detailLocation.css";
import Wrapper from "../../components/wrapper/wrapper";
import Widget from "../../components/widget/widget";
import Item from "../../components/item/item";
import { useWeatherContext } from "../../providers/weather.provider";

function DetailLocation() {
  const { data } = useWeatherContext();
  return (
    <Wrapper>
      <div className="container-detail-location">
        <div>
          <Widget data={data} />
        </div>
        <div>
          <Item />
        </div>
      </div>
    </Wrapper>
  );
}

export default DetailLocation;
